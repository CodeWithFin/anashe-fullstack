import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log('M-Pesa Callback Received:', JSON.stringify(data, null, 2));

    const result = data?.Body?.stkCallback;
    if (!result) {
        console.error('Invalid M-Pesa callback payload:', data);
        return NextResponse.json({ ResultCode: 1, ResultDesc: "Invalid Payload" }, { status: 400 });
    }

    if (result.ResultCode === 0) {
      // Payment successful
      // Here you would typically extract the M-Pesa Receipt Number, Amount, and update the order status
      const metadataItems = result.CallbackMetadata?.Item || [];
      const receiptNumber = metadataItems.find((item: { Name: string; Value: unknown }) => item.Name === 'MpesaReceiptNumber')?.Value;
      console.log('Payment Successful for CheckoutRequestID:', result.CheckoutRequestID, 'Receipt:', receiptNumber);
    } else {
      // Payment failed or cancelled
      console.log('Payment Failed:', result.ResultDesc);
    }

    return NextResponse.json({ ResultCode: 0, ResultDesc: "Success" });
  } catch (error: unknown) {
    console.error('M-Pesa Callback Error:', error);
    return NextResponse.json({ ResultCode: 1, ResultDesc: "Internal Server Error" }, { status: 500 });
  }
}
