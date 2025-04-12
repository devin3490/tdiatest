
import React, { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

interface ParallaxDotsProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  className?: string;
}

const ParallaxDots: React.FC<ParallaxDotsProps> = ({
  count = 30,
  colors = ['#006fff', '#3944bc', '#8bfa7b', '#ffffff'],
  minSize = 2,
  maxSize = 8,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  className = '',
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Generate random dots
    const newDots: Dot[] = [];
    
    for (let i = 0; i < count; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100, // % position
        y: Math.random() * 100, // % position
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.01 + Math.random() * 0.04, // Reduced speed range
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
    setDots(newDots);

    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle the mouse updates to avoid jittery behavior
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((dot) => {
        // Reduced movement range
        const offsetX = (mousePosition.x - 50) * dot.speed * 0.5;
        const offsetY = (mousePosition.y - 50) * dot.speed * 0.5;
        
        return (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `calc(${dot.x}% + ${offsetX}%)`,
              top: `calc(${dot.y}% + ${offsetY}%)`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              transform: 'translate(-50%, -50%)',
              transition: 'left 1.2s ease-out, top 1.2s ease-out',
              willChange: 'left, top'
            }}
          />
        );
      })}
    </div>
  );
};

export default ParallaxDots;
