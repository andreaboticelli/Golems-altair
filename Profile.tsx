import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(179, 166, 125, 0.5);
  margin-right: 2rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionHeader = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 1rem;
  border-bottom: 1px solid rgba(179, 166, 125, 0.3);
`;

const ElementalAffinity = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const AffinityItem = styled.div<{ active?: boolean }>`
  text-align: center;
  opacity: ${props => props.active ? 1 : 0.5};
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const AffinityIcon = styled.div<{ element: string }>`
  width: 60px;
  height: 60px;
  margin: 0 auto 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    filter: drop-shadow(0 0 5px ${props => 
      props.element === 'fire' ? '#e04e2f' :
      props.element === 'air' ? '#3a6ea5' :
      props.element === 'ice' ? '#7dd3fc' :
      props.element === 'earth' ? '#7b5e57' :
      '#c084fc'
    });
  }
`;

const Profile: React.FC = () => {
  return (
    <ProfileContainer className="arcane-container arcane-container-bottom">
      <h1 className="text-4xl text-center mb-8">AVATAR</h1>
      
      <ProfileHeader>
        <ProfileAvatar>
          <img src="/placeholder-avatar.jpg" alt="Mage Avatar" className="w-full h-full object-cover" />
        </ProfileAvatar>
        
        <ProfileInfo>
          <h2 className="text-3xl mb-2">MAGE</h2>
          <p className="text-gold/70">Arcane Practitioner • Level 3</p>
          <p className="mt-4">Seeker of elemental wisdom and cosmic harmony.</p>
        </ProfileInfo>
      </ProfileHeader>
      
      <ProfileSection>
        <SectionHeader>ESSENCE</SectionHeader>
        <div className="p-4">
          <p>Your spiritual essence determines your connection to the arcane forces.</p>
          
          <div className="flex justify-center mt-4">
            <div className="w-20 h-20 rounded-full border-2 border-gold/50 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gold/20"></div>
            </div>
          </div>
        </div>
      </ProfileSection>
      
      <ProfileSection>
        <SectionHeader>ELEMENT</SectionHeader>
        <div className="p-4">
          <p>Your elemental affinities influence your connection with each golem.</p>
          
          <ElementalAffinity>
            <AffinityItem active>
              <AffinityIcon element="fire">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#e04e2f">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              </AffinityIcon>
              <span>Fire</span>
            </AffinityItem>
            
            <AffinityItem>
              <AffinityIcon element="air">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#3a6ea5">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </AffinityIcon>
              <span>Air</span>
            </AffinityItem>
            
            <AffinityItem>
              <AffinityIcon element="ice">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#7dd3fc">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                </svg>
              </AffinityIcon>
              <span>Ice</span>
            </AffinityItem>
            
            <AffinityItem>
              <AffinityIcon element="earth">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#7b5e57">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </AffinityIcon>
              <span>Earth</span>
            </AffinityItem>
            
            <AffinityItem>
              <AffinityIcon element="aether">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#c084fc">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
              </AffinityIcon>
              <span>Aether</span>
            </AffinityItem>
          </ElementalAffinity>
        </div>
      </ProfileSection>
      
      <ProfileSection>
        <SectionHeader>STATUS</SectionHeader>
        <div className="p-4">
          <p>Your current arcane status and ritual progress.</p>
          
          <div className="flex justify-center mt-4">
            <div className="w-20 h-5 border border-gold/50 flex">
              <div className="w-1/2 bg-gold/50"></div>
            </div>
          </div>
        </div>
      </ProfileSection>
      
      <div className="mt-8">
        <input 
          type="text" 
          placeholder="Enter message..." 
          className="chat-input"
        />
      </div>
    </ProfileContainer>
  );
};

export default Profile;
