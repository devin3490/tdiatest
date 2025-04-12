
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        speed: 0.02 + Math.random() * 0.08,
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
    setDots(newDots);

    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
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
        const offsetX = (mousePosition.x - 50) * dot.speed;
        const offsetY = (mousePosition.y - 50) * dot.speed;
        
        return (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `${dot.x + offsetX}%`,
              top: `${dot.y + offsetY}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              transition: 'left 0.3s ease-out, top 0.3s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export default ParallaxDots;
