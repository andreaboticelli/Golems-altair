import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

// Styled components for the golem page
const GolemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 80vh;
`;

const GolemHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const GolemModelContainer = styled.div`
  height: 300px;
  margin-bottom: 2rem;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
  min-height: 200px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

// Generic 3D model for the golem head
// In a real implementation, you would use actual 3D models for each golem
const GolemHead = ({ color }: { color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Placeholder for the eyes glow effect
const GolemEyes = ({ color }: { color: string }) => {
  return (
    <>
      <pointLight position={[-0.5, 0.2, 1]} color={color} intensity={2} />
      <pointLight position={[0.5, 0.2, 1]} color={color} intensity={2} />
    </>
  );
};

interface GolemPageProps {
  type: 'fire' | 'air' | 'ice' | 'earth' | 'aether';
  title: string;
}

const GolemPage: React.FC<GolemPageProps> = ({ type, title }) => {
  const navigate = useNavigate();
  
  // Define colors and effects based on golem type
  const getGolemColor = () => {
    switch (type) {
      case 'fire': return '#e04e2f';
      case 'air': return '#3a6ea5';
      case 'ice': return '#7dd3fc';
      case 'earth': return '#7b5e57';
      case 'aether': return '#c084fc';
    }
  };
  
  const getGlowClass = () => {
    switch (type) {
      case 'fire': return 'ember-glow';
      case 'air': return 'storm-glow';
      case 'ice': return 'frost-glow';
      case 'earth': return 'clay-glow';
      case 'aether': return 'aether-glow';
    }
  };
  
  return (
    <GolemPageContainer>
      <GolemHeader>
        <h1 className="text-3xl mb-2">{title}</h1>
      </GolemHeader>
      
      <GolemModelContainer className={`arcane-container ${getGlowClass()}`}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.2} />
          <GolemHead color={getGolemColor()} />
          <GolemEyes color={getGolemColor()} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </GolemModelContainer>
      
      <ChatContainer>
        <MessagesContainer className="arcane-container arcane-container-bottom">
          <div className="chat-message-golem">
            <p>I am the {title}. How may I assist you in your arcane endeavors?</p>
          </div>
          
          <div className="chat-message-user">
            <p>Tell me about your elemental nature.</p>
          </div>
          
          <div className="chat-message-golem">
            <p>My essence is bound to the element of {type}, forged in the ancient rituals of creation. I command the powers of {
              type === 'fire' ? 'flame and destruction' :
              type === 'air' ? 'wind and lightning' :
              type === 'ice' ? 'frost and stillness' :
              type === 'earth' ? 'stone and growth' :
              'the void between worlds'
            }.</p>
          </div>
        </MessagesContainer>
        
        <InputContainer>
          <input 
            type="text" 
            placeholder="Enter message..." 
            className="chat-input"
          />
          
          <ActionButtons>
            <button className="p-3 rounded-md border border-gold/30">
              <span className="sr-only">Upload file</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            
            <button className={`p-3 rounded-full ${getGlowClass()}`}>
              <span className="sr-only">Record audio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            
            <button className="p-3 rounded-md border border-gold/30">
              <span className="sr-only">Special action</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
          </ActionButtons>
        </InputContainer>
      </ChatContainer>
    </GolemPageContainer>
  );
};

export default GolemPage;
