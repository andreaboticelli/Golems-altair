import React from 'react';
import styled from 'styled-components';

// Define types for the service
type ElementType = 'fire' | 'air' | 'ice' | 'earth' | 'aether';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: string[];
}

// N8n integration service for chat automation
const N8nService = {
  // Base URL for the n8n webhook
  baseUrl: 'https://n8n-instance.example.com/webhook/',
  
  // Webhook IDs for different golems
  webhooks: {
    fire: 'fire-golem-webhook-id',
    air: 'air-golem-webhook-id',
    ice: 'ice-golem-webhook-id',
    earth: 'earth-golem-webhook-id',
    aether: 'aether-golem-webhook-id',
  },
  
  // Send message to n8n webhook
  async sendMessage(elementType: ElementType, message: string, attachments: File[] = []) {
    const webhookId = this.webhooks[elementType];
    if (!webhookId) {
      throw new Error(`No webhook configured for element type: ${elementType}`);
    }
    
    // Create form data for file uploads
    const formData = new FormData();
    formData.append('message', message);
    formData.append('elementType', elementType);
    
    // Add any attachments
    attachments.forEach((file, index) => {
      formData.append(`attachment_${index}`, file);
    });
    
    try {
      const response = await fetch(`${this.baseUrl}${webhookId}`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error sending message to n8n:', error);
      throw error;
    }
  },
  
  // Setup WebSocket connection for real-time responses
  setupWebSocket(elementType: ElementType, onMessageReceived: (message: Message) => void) {
    // In a real implementation, this would connect to a WebSocket server
    // For demonstration, we'll simulate responses
    
    // Return an object with methods to manage the connection
    return {
      connect() {
        console.log(`WebSocket connected for ${elementType}`);
      },
      
      disconnect() {
        console.log(`WebSocket disconnected for ${elementType}`);
      },
      
      // Simulate receiving a message (for demonstration)
      simulateResponse(message: string) {
        setTimeout(() => {
          const responses = {
            fire: "The flames dance with your words. I sense your intent burning bright.",
            air: "Your thoughts drift like clouds through my consciousness. I hear your call.",
            ice: "Cold clarity reflects in your query. Let me crystallize a response.",
            earth: "Your request takes root in my earthen form. I shall nurture an answer.",
            aether: "The quintessence of your inquiry resonates through the void. I shall channel wisdom from beyond."
          };
          
          onMessageReceived({
            id: Date.now().toString(),
            content: responses[elementType] || "I have received your message and shall respond with arcane wisdom.",
            isUser: false,
            timestamp: new Date()
          });
        }, 1500);
      }
    };
  }
};

export default N8nService;
