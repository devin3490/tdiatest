
import React, { useEffect, useState, useRef } from 'react';

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
  const animationRef = useRef<number | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const targetMousePosition = useRef({ x: 50, y: 50 });

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
        // Increase speed range to make movement more noticeable
        speed: 0.01 + Math.random() * 0.03,
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
    setDots(newDots);
    dotsRef.current = newDots;

    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      // Update target mouse position immediately to make parallax feel responsive
      targetMousePosition.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Setup animation frame for smooth movement
    const animate = () => {
      // Use a higher lerp factor for more immediate response
      const lerpFactor = 0.15; // Higher value = more responsive
      
      setMousePosition(prevPos => ({
        x: prevPos.x + (targetMousePosition.current.x - prevPos.x) * lerpFactor,
        y: prevPos.y + (targetMousePosition.current.y - prevPos.y) * lerpFactor
      }));
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {dots.map((dot) => {
        // Increase movement range for more noticeable parallax effect
        const offsetX = (mousePosition.x - 50) * dot.speed * 1.5;
        const offsetY = (mousePosition.y - 50) * dot.speed * 1.5;
        
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
              // Use a shorter transition duration for more immediate response
              transition: 'left 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), top 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'left, top'
            }}
          />
        );
      })}
    </div>
  );
};

export default ParallaxDots;
