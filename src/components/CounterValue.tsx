
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useCounter } from '../hooks/useCounter';

interface CounterValueProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

const CounterValue: React.FC<CounterValueProps> = ({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formattedCount = useCounter({
    end: inView ? value : 0,
    start: 0,
    duration: 2500,
    decimals,
    prefix,
    suffix
  });

  return (
    <p ref={ref} className={className}>
      {formattedCount}
    </p>
  );
};

export default CounterValue;
