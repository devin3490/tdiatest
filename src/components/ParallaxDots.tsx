import React, { useEffect, useRef, useMemo } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotsElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Génère les dots une seule fois avec useMemo
  const dots = useMemo<Dot[]>(() => {
    const newDots: Dot[] = [];
    
    for (let i = 0; i < count; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.5 + Math.random() * 1.5, // Vitesse réduite mais plus fluide
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
    return newDots;
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  useEffect(() => {
    let isAnimating = true;
    
    // Gestionnaire de mouvement de souris optimisé
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 100,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 100
      };
    };

    // Animation optimisée avec transform au lieu de left/top
    const animate = () => {
      if (!isAnimating) return;
      
      dotsElementsRef.current.forEach((dotElement, index) => {
        if (!dotElement) return;
        
        const dot = dots[index];
        const offsetX = mousePosition.current.x * dot.speed * 0.3;
        const offsetY = mousePosition.current.y * dot.speed * 0.3;
        
        // Utilise transform pour des performances optimales
        dotElement.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Démarrer l'animation seulement si on a le container
    if (containerRef.current) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      isAnimating = false;
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dots]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {dots.map((dot, index) => (
        <div
          key={dot.id}
          ref={(el) => {
            dotsElementsRef.current[index] = el;
          }}
          className="absolute rounded-full"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            backgroundColor: dot.color,
            opacity: dot.opacity,
            transform: 'translate(-50%, -50%)',
            willChange: 'transform', // Optimisation GPU
            backfaceVisibility: 'hidden', // Anti-aliasing
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxDots;