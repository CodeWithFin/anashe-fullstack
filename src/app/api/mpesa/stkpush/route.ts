import { NextRequest, NextResponse } from 'next/server';

const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
const SHORTCODE = process.env.MPESA_SHORTCODE;
const PASSKEY = process.env.MPESA_PASSKEY;

// Detect if we should use sandbox or production
const isSandbox = SHORTCODE === '174379';
const BASE_URL = isSandbox 
  ? 'https://sandbox.safaricom.co.ke' 
  : 'https://api.safaricom.co.ke';

async function getAccessToken() {
  const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  const response = await fetch(`${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { amount, phone, orderId } = await req.json();

    // Format phone to 254XXXXXXXXX
    let formattedPhone = phone.replace(/[^0-9]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '254' + formattedPhone.substring(1);
    } else if (formattedPhone.startsWith('7') || formattedPhone.startsWith('1')) {
      formattedPhone = '254' + formattedPhone;
    } else if (formattedPhone.startsWith('254')) {
      // Already formatted
    } else {
      // Fallback
      formattedPhone = '254' + formattedPhone;
    }

    const accessToken = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(`${SHORTCODE}${PASSKEY}${timestamp}`).toString('base64');

    const stkResponse = await fetch(`${BASE_URL}/mpesa/stkpush/v1/processrequest`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        method: 'POST',
        body: JSON.stringify({
            BusinessShortCode: SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: isSandbox ? 'CustomerPayBillOnline' : 'CustomerBuyGoodsOnline', // Sandbox usually uses PayBill, Production might be BuyGoods for Till numbers
            Amount: Math.round(amount),
            PartyA: formattedPhone,
            PartyB: isSandbox ? SHORTCODE : SHORTCODE, // For BuyGoods, PartyB is the Till Number
            PhoneNumber: formattedPhone,
            CallBackURL: `${process.env.SITE_URL}/api/mpesa/callback`,
            AccountReference: `Anashe-${orderId}`,
            TransactionDesc: 'Payment for Anashe Skincare',
        }),
    });

    const stkData = await stkResponse.json();
    console.log('M-Pesa Response:', stkData);
    return NextResponse.json(stkData);
  } catch (error: any) {
    console.error('M-Pesa STK Push Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
