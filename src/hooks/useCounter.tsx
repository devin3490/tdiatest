
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCounter = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = ''
}: CounterProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const runtime = timestamp - startTimeRef.current;
      const relativeProgress = runtime / duration;
      
      if (relativeProgress < 1) {
        const easedProgress = easeOutQuart(relativeProgress);
        const currentCount = Math.min(start + (end - start) * easedProgress, end);
        
        countRef.current = currentCount;
        setCount(currentCount);
        
        frameRef.current = requestAnimationFrame(animate);
      } else {
        countRef.current = end;
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration]);

  // Format the count with the correct number of decimal places and add prefix/suffix
  const formattedCount = () => {
    const fixed = Number(count.toFixed(decimals));
    return `${prefix}${fixed}${suffix}`;
  };

  return formattedCount();
};
