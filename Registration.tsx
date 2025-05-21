import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(179, 166, 125, 0.5);
  padding: 0.5rem 0;
  color: rgba(179, 166, 125, 1);
  font-size: 1.1rem;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(179, 166, 125, 1);
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1.2rem;
  transition: all 0.3s ease;
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 3rem;
  
  a {
    color: rgba(179, 166, 125, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: rgba(179, 166, 125, 1);
      text-shadow: 0 0 8px rgba(179, 166, 125, 0.5);
    }
  }
`;

const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase registration will be implemented here
    console.log('Register with:', email, password);
  };
  
  return (
    <RegisterContainer className="arcane-container arcane-container-bottom">
      <h1 className="text-4xl text-center mb-8">REGISTER</h1>
      
      <form onSubmit={handleRegister}>
        <InputGroup>
          <InputLabel>Email</InputLabel>
          <InputField 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <InputField 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Confirm Password</InputLabel>
          <InputField 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <RegisterButton 
          type="submit" 
          className="btn-arcane"
        >
          REGISTER
        </RegisterButton>
      </form>
      
      <LoginLink>
        Already have an account?{' '}
        <Link to="/login">Log in</Link>
      </LoginLink>
    </RegisterContainer>
  );
};

export default Registration;
