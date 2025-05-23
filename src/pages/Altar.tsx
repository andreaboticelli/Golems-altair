import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AltarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pentagram = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  height: 80%;
  max-height: 600px;
`;

const ElementSymbol = styled.div<{ color: string; top: string; left: string }>`
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 5px ${props => props.color});
  top: ${props => props.top};
  left: ${props => props.left};
  
  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px ${props => props.color});
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Triangle = styled.div<{ color: string; rotation?: string }>`
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 35px solid ${props => props.color};
  transform: ${props => props.rotation || 'rotate(0deg)'};
`;

const Altar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  
  // Draw pentagram with glowing effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) * 0.8;
    
    // Calculate pentagram points
    const points = [];
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      });
    }
    
    // Draw pentagram
    ctx.strokeStyle = '#e04e2f';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#e04e2f';
    
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.lineTo(points[4].x, points[4].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.closePath();
    ctx.stroke();
    
    // Add central circle
    ctx.beginPath();
    ctx.arc(centerX, centerY - radius * 0.2, radius * 0.1, 0, 2 * Math.PI);
    ctx.strokeStyle = '#c084fc';
    ctx.shadowColor = '#c084fc';
    ctx.stroke();
    
    // Add wheel symbol
    ctx.beginPath();
    ctx.arc(centerX, centerY - radius * 0.2, radius * 0.15, 0, 2 * Math.PI);
    ctx.strokeStyle = '#c084fc';
    ctx.shadowColor = '#c084fc';
    ctx.stroke();
    
    // Add spokes to wheel
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const innerRadius = radius * 0.1;
      const outerRadius = radius * 0.15;
      
      ctx.beginPath();
      ctx.moveTo(
        centerX + innerRadius * Math.cos(angle),
        centerY - radius * 0.2 + innerRadius * Math.sin(angle)
      );
      ctx.lineTo(
        centerX + outerRadius * Math.cos(angle),
        centerY - radius * 0.2 + outerRadius * Math.sin(angle)
      );
      ctx.stroke();
    }
  }, []);
  
  const handleElementClick = (element: string) => {
    navigate(`/golem/${element}`);
  };
  
  return (
    <AltarContainer className="arcane-container arcane-container-bottom">
      <Pentagram>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        
        {/* Fire Element (Top) */}
        <ElementSymbol 
          color="#e04e2f" 
          top="0%" 
          left="50%"
          style={{ transform: 'translate(-50%, 0)' }}
          onClick={() => handleElementClick('fire')}
        >
          <Triangle color="#e04e2f" />
        </ElementSymbol>
        
        {/* Air Element (Right) */}
        <ElementSymbol 
          color="#3a6ea5" 
          top="38%" 
          left="95%"
          onClick={() => handleElementClick('air')}
        >
          <Triangle color="#3a6ea5" rotation="rotate(72deg)" />
        </ElementSymbol>
        
        {/* Earth Element (Bottom Right) */}
        <ElementSymbol 
          color="#7b5e57" 
          top="85%" 
          left="75%"
          onClick={() => handleElementClick('earth')}
        >
          <Triangle color="#7b5e57" rotation="rotate(144deg)" />
        </ElementSymbol>
        
        {/* Ice Element (Bottom Left) */}
        <ElementSymbol 
          color="#7dd3fc" 
          top="85%" 
          left="25%"
          onClick={() => handleElementClick('ice')}
        >
          <Triangle color="#7dd3fc" rotation="rotate(216deg)" />
        </ElementSymbol>
        
        {/* Aether Element (Center) */}
        <ElementSymbol 
          color="#c084fc" 
          top="38%" 
          left="5%"
          onClick={() => handleElementClick('aether')}
        >
          <Triangle color="#c084fc" rotation="rotate(288deg)" />
        </ElementSymbol>
      </Pentagram>
    </AltarContainer>
  );
};

export default Altar;
