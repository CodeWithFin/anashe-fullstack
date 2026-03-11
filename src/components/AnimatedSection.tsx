"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function AnimatedSection({ 
  children, 
  className,
  delay = 0,
  style
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={cn(
        "animate-on-scroll",
        isVisible && "animate",
        className
      )}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
