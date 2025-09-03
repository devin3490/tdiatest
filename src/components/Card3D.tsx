
import React, { useRef, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface Card3DProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}

const Card3D: React.FC<Card3DProps> = ({ 
  className = "", 
  children, 
  glowColor = "rgba(255, 255, 255, 0.08)" 
}) => {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current && !isMobile) {
      // Get the card dimensions and position
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the percentage of the mouse position within the card
      const mouseX = Math.round((x / rect.width) * 100);
      const mouseY = Math.round((y / rect.height) * 100);
      
      // Calculate rotation (maximum ±15 degrees)
      const rotateY = ((mouseX / 100) * 30) - 15;
      const rotateX = (((mouseY / 100) * 30) - 15) * -1; // Invert Y axis for natural movement
      
      // Update state
      setRotation({ x: rotateX, y: rotateY });
      setPosition({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves with smooth transition
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`perspective-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": `${position.x}%`,
        "--mouse-y": `${position.y}%`,
        perspective: "1000px"
      } as React.CSSProperties}
    >
      <div 
        className="perspective-card-inner transition-transform duration-200"
        style={{
          transform: isMobile ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d"
        }}
      >
        {children}
      </div>
      <div 
        className="perspective-card-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 rounded-lg"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${glowColor}, transparent 70%)`,
          opacity: isMobile ? 0 : (Math.abs(rotation.x) > 2 || Math.abs(rotation.y) > 2 ? 1 : 0)
        }}
      />
    </div>
  );
};

export default Card3D;
