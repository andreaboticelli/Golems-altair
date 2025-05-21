import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const MessageBubble = styled.div<{ isUser: boolean }>`
  max-width: 80%;
  margin: ${props => props.isUser ? '0.5rem 0 0.5rem auto' : '0.5rem auto 0.5rem 0'};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.isUser ? 'right' : 'left'}: 0;
    width: 10px;
    height: 10px;
    border-top: 1px solid rgba(179, 166, 125, 0.3);
    border-${props => props.isUser ? 'right' : 'left'}: 1px solid rgba(179, 166, 125, 0.3);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    ${props => props.isUser ? 'right' : 'left'}: 0;
    width: 10px;
    height: 10px;
    border-bottom: 1px solid rgba(179, 166, 125, 0.3);
    border-${props => props.isUser ? 'right' : 'left'}: 1px solid rgba(179, 166, 125, 0.3);
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-top: auto;
`;

const ChatInput = styled.textarea`
  width: 100%;
  min-height: 60px;
  resize: none;
  background-color: rgba(10, 10, 10, 0.7);
  border: 1px solid rgba(179, 166, 125, 0.3);
  border-radius: 0.25rem;
  color: rgba(179, 166, 125, 1);
  padding: 0.75rem;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: rgba(179, 166, 125, 0.6);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 1px solid rgba(179, 166, 125, 0.3);
  color: rgba(179, 166, 125, 0.8);
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(179, 166, 125, 0.8);
    color: rgba(179, 166, 125, 1);
  }
  
  &.record {
    border-radius: 50%;
  }
  
  &.active {
    background-color: rgba(224, 78, 47, 0.2);
    border-color: rgba(224, 78, 47, 0.5);
    color: rgba(224, 78, 47, 1);
  }
`;

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: string[];
}

interface ChatInterfaceProps {
  elementType: 'fire' | 'air' | 'ice' | 'earth' | 'aether';
  onSendMessage: (message: string, attachments?: File[]) => Promise<void>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ elementType, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `I am the ${elementType === 'fire' ? 'Fire Golem' : 
                elementType === 'air' ? 'Air Golem' : 
                elementType === 'ice' ? 'Ice Golem' : 
                elementType === 'earth' ? 'Earth Golem' : 
                'Homunculus'}. How may I assist you in your arcane endeavors?`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const getGlowClass = () => {
    switch (elementType) {
      case 'fire': return 'ember-glow';
      case 'air': return 'storm-glow';
      case 'ice': return 'frost-glow';
      case 'earth': return 'clay-glow';
      case 'aether': return 'aether-glow';
    }
  };
  
  const handleSendMessage = async () => {
    if (!message.trim() && attachments.length === 0) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      timestamp: new Date(),
      attachments: attachments.length > 0 ? attachments.map(file => file.name) : undefined
    };
    
    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setAttachments([]);
    
    try {
      await onSendMessage(message, attachments);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const toggleRecording = () => {
    // In a real implementation, this would use the Web Audio API
    setIsRecording(!isRecording);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };
  
  return (
    <ChatContainer>
      <MessagesContainer className="arcane-container arcane-container-bottom">
        {messages.map(msg => (
          <MessageBubble 
            key={msg.id} 
            isUser={msg.isUser}
            className={`${msg.isUser ? 'chat-message-user' : 'chat-message-golem'}`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
            
            {msg.attachments && msg.attachments.length > 0 && (
              <div className="mt-2 p-2 border border-gold/30 rounded">
                <p className="text-sm">Attachments:</p>
                <ul className="list-disc pl-4">
                  {msg.attachments.map((attachment, index) => (
                    <li key={index} className="text-sm">{attachment}</li>
                  ))}
                </ul>
              </div>
            )}
          </MessageBubble>
        ))}
      </MessagesContainer>
      
      <InputContainer>
        <ChatInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter message..."
          className="chat-input"
        />
        
        {attachments.length > 0 && (
          <div className="mt-2 p-2 border border-gold/30 rounded">
            <p className="text-sm">Selected files:</p>
            <ul className="list-disc pl-4">
              {attachments.map((file, index) => (
                <li key={index} className="text-sm">{file.name}</li>
              ))}
            </ul>
          </div>
        )}
        
        <ActionButtons>
          <label htmlFor="file-upload" className="cursor-pointer">
            <ActionButton as="span">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </ActionButton>
            <input 
              id="file-upload" 
              type="file" 
              multiple 
              className="hidden" 
              onChange={handleFileUpload} 
            />
          </label>
          
          <ActionButton 
            className={`record ${isRecording ? 'active' : ''} ${getGlowClass()}`}
            onClick={toggleRecording}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </ActionButton>
          
          <ActionButton onClick={handleSendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </ActionButton>
        </ActionButtons>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatInterface;
