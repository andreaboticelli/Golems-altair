import React from 'react';
import styled from 'styled-components';

// Import responsive styles
import './responsive.css';

const ValidationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ValidationSection = styled.div`
  margin-bottom: 2rem;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(179, 166, 125, 0.1);
`;

const CheckIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4ade80;
`;

const ValidationPage: React.FC = () => {
  return (
    <ValidationContainer className="arcane-container arcane-container-bottom">
      <h1 className="text-4xl text-center mb-8">VALIDATION</h1>
      
      <ValidationSection>
        <h2 className="text-2xl mb-4">Visual Alignment</h2>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Dark arcane theme matches UI sketches</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>3D dodecahedron navigation implemented</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Golem 3D heads with elemental styling</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Chat interface with mystical aesthetics</div>
        </CheckItem>
      </ValidationSection>
      
      <ValidationSection>
        <h2 className="text-2xl mb-4">Functionality</h2>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Supabase authentication integration</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Markdown support in chat messages</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>File upload and audio recording UI</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>n8n integration for chat automation</div>
        </CheckItem>
      </ValidationSection>
      
      <ValidationSection>
        <h2 className="text-2xl mb-4">Responsiveness</h2>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Desktop layout optimized</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Mobile layout responsive</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Touch-friendly interactive elements</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Accessibility considerations implemented</div>
        </CheckItem>
      </ValidationSection>
      
      <ValidationSection>
        <h2 className="text-2xl mb-4">Deployment Readiness</h2>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Project structure optimized for deployment</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Environment variables configured</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Build process tested</div>
        </CheckItem>
        <CheckItem>
          <CheckIcon>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </CheckIcon>
          <div>Documentation prepared</div>
        </CheckItem>
      </ValidationSection>
    </ValidationContainer>
  );
};

export default ValidationPage;
