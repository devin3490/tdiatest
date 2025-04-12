
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
  const lastMouseMoveTime = useRef<number>(0);
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
        speed: 0.002 + Math.random() * 0.01, // Much reduced speed for smoother movement
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
    setDots(newDots);
    dotsRef.current = newDots;

    // Add mouse move event listener with debouncing
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Only update target mouse position, actual rendering happens in the animation frame
      targetMousePosition.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      };
      
      // Update timestamp
      lastMouseMoveTime.current = currentTime;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Setup animation frame for smooth movement
    const animate = () => {
      // Interpolate current mouse position towards target (smoothing)
      const lerpFactor = 0.05; // Lower value = smoother, higher = more responsive
      
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
        // Even more reduced movement range for subtlety
        const offsetX = (mousePosition.x - 50) * dot.speed * 0.3;
        const offsetY = (mousePosition.y - 50) * dot.speed * 0.3;
        
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
              transition: 'left 2s cubic-bezier(0.25, 0.1, 0.25, 1), top 2s cubic-bezier(0.25, 0.1, 0.25, 1)',
              willChange: 'left, top'
            }}
          />
        );
      })}
    </div>
  );
};

export default ParallaxDots;
