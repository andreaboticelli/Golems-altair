import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron } from '@react-three/drei';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  position: relative;
`;

const NavLink = styled(Link)`
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  font-size: 1.2rem;
  letter-spacing: 0.05em;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    text-shadow: 0 0 10px rgba(179, 166, 125, 0.7);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover:after {
    width: 80%;
  }
  
  &.active {
    color: white;
    text-shadow: 0 0 10px rgba(179, 166, 125, 0.7);
    
    &:after {
      width: 80%;
    }
  }
`;

const DodecahedronContainer = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 1.5rem;
`;

// Rotating 3D Dodecahedron component
function RotatingDodecahedron() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
    }
  });
  
  return (
    <Dodecahedron ref={meshRef} args={[1, 0]}>
      <meshStandardMaterial 
        color="#e04e2f" 
        emissive="#e04e2f"
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </Dodecahedron>
  );
}

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <NavContainer className="border-b border-gold/30">
      <NavLink to="/altar" className={location.pathname === '/altar' ? 'active' : ''}>
        ALTAR
      </NavLink>
      
      <DodecahedronContainer>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <RotatingDodecahedron />
        </Canvas>
      </DodecahedronContainer>
      
      <NavLink to="/golem" className={location.pathname.includes('/golem') ? 'active' : ''}>
        GOLEM
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
