import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
  background-color: #e04e2f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(224, 78, 47, 0.7);
`;

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <NavContainer className="border-b border-gold/30">
      <NavLink to="/altar" className={location.pathname === '/altar' ? 'active' : ''}>
        ALTAR
      </NavLink>
      
      <DodecahedronContainer>
        {/* Placeholder for 3D dodecahedron */}
        <div className="text-center">
          ⬡
        </div>
      </DodecahedronContainer>
      
      <NavLink to="/golem" className={location.pathname.includes('/golem') ? 'active' : ''}>
        GOLEM
      </NavLink>
    </NavContainer>
  );
};

export default Navigation;
