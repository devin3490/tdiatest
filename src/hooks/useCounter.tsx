
import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  shouldStart?: boolean;
}

export const useCounter = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  shouldStart = true
}: CounterProps) => {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Don't start animation until shouldStart is true
    if (!shouldStart) {
      setCount(start);
      return;
    }

    // Reset the start time when shouldStart changes
    startTimeRef.current = null;
    
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
        const currentCount = start + (end - start) * easedProgress;
        
        setCount(currentCount);
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Start animation
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup animation on unmount or when dependencies change
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration, shouldStart]);

  // Format the count with the correct number of decimal places and add prefix/suffix
  const formattedValue = prefix + Number(count.toFixed(decimals)) + suffix;
  return formattedValue;
};
