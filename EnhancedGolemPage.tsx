import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChatInterface from '../components/ChatInterface';
import N8nService from '../services/n8nService';

// Update the GolemPage component to use the ChatInterface and N8nService
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
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: string[];
}

interface EnhancedGolemPageProps {
  type: 'fire' | 'air' | 'ice' | 'earth' | 'aether';
  title: string;
}

const EnhancedGolemPage: React.FC<EnhancedGolemPageProps> = ({ type, title }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [webSocket, setWebSocket] = useState<any>(null);
  
  useEffect(() => {
    // Initialize WebSocket connection
    const ws = N8nService.setupWebSocket(type, handleMessageReceived);
    ws.connect();
    setWebSocket(ws);
    
    // Cleanup on unmount
    return () => {
      if (ws) {
        ws.disconnect();
      }
    };
  }, [type]);
  
  const handleMessageReceived = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };
  
  const handleSendMessage = async (message: string, attachments?: File[]) => {
    try {
      // Send message to n8n
      await N8nService.sendMessage(type, message, attachments);
      
      // For demonstration, simulate a response
      if (webSocket) {
        webSocket.simulateResponse(message);
      }
      
      return true;
    } catch (error) {
      console.error('Failed to send message:', error);
      return false;
    }
  };
  
  return (
    <GolemPageContainer>
      <GolemHeader>
        <h1 className="text-3xl mb-2">{title}</h1>
      </GolemHeader>
      
      <ChatContainer>
        <ChatInterface 
          elementType={type} 
          onSendMessage={handleSendMessage} 
        />
      </ChatContainer>
    </GolemPageContainer>
  );
};

export default EnhancedGolemPage;
