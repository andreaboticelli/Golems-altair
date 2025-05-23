import React, { useState } from 'react';
import styled from 'styled-components';

const SettingsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SettingSection = styled.div`
  margin-bottom: 2rem;
`;

const SettingHeader = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1rem;
  border-bottom: 1px solid rgba(179, 166, 125, 0.3);
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(179, 166, 125, 0.1);
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(179, 166, 125, 0.2);
    transition: .4s;
    border-radius: 34px;
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: rgba(179, 166, 125, 0.8);
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + span {
    background-color: rgba(179, 166, 125, 0.5);
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.div`
  width: 100%;
  padding: 1rem 0;
  
  input {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    background: rgba(179, 166, 125, 0.3);
    outline: none;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      background: rgba(179, 166, 125, 0.8);
      cursor: pointer;
      transform: rotate(45deg);
    }
    
    &::-moz-range-thumb {
      width: 20px;
      height: 20px;
      background: rgba(179, 166, 125, 0.8);
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
`;

const PasswordButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  
  svg {
    margin-right: 1rem;
  }
`;

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [soundLevel, setSoundLevel] = useState(50);
  
  return (
    <SettingsContainer className="arcane-container arcane-container-bottom">
      <h1 className="text-4xl text-center mb-8">SETTINGS</h1>
      
      <SettingSection>
        <SettingHeader>GENERAL</SettingHeader>
        <SettingRow>
          <span>Notifications</span>
          <ToggleSwitch>
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)} 
            />
            <span></span>
          </ToggleSwitch>
        </SettingRow>
      </SettingSection>
      
      <SettingSection>
        <SettingHeader>SOUND</SettingHeader>
        <SettingRow>
          <Slider>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={soundLevel} 
              onChange={(e) => setSoundLevel(parseInt(e.target.value))} 
            />
          </Slider>
        </SettingRow>
      </SettingSection>
      
      <SettingSection>
        <SettingHeader>SECURITY</SettingHeader>
        <SettingRow>
          <PasswordButton className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Change password
          </PasswordButton>
        </SettingRow>
      </SettingSection>
      
      <div className="flex justify-end mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
    </SettingsContainer>
  );
};

export default Settings;
