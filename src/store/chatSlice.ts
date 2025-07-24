import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Message {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: number;
  isLoading?: boolean;
  attachments?: {
    id: string;
    name: string;
    type: string;
    size: number;
    url?: string;
    preview?: string;
    downloadUrl?: string;
  }[];
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentUser: {
    firstName: string;
    lastName: string;
    username: string;
  };
}

const initialState: ChatState = {
  messages: [
    {
      id: '1',
      sender: 'ai',
      content: 'Hello! I\'m your AI assistant for airline reporting. I can help you generate custom reports, filter data by date ranges, select specific columns, and analyze booking and payment information. What would you like to explore today?',
      timestamp: Date.now(),
    }
  ],
  isTyping: false,
  currentUser: {
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
  },
};

// Simulate AI response
export const sendMessageToAI = createAsyncThunk<string, { message: string; attachments?: any[] }>(
  'chat/sendMessageToAI',
  async ({ message, attachments }) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
    
    // Mock AI responses based on message content
    let response = '';
    const lowerMessage = message.toLowerCase();
    
    // Handle file attachments in response
    if (attachments && attachments.length > 0) {
      const fileTypes = attachments.map(att => att.type).join(', ');
      response = `I've received your ${attachments.length} file(s) (${fileTypes}). I can analyze these files and generate reports based on their content. Here's what I can do:

📊 **For Data Files (CSV, Excel):**
• Extract and analyze booking/payment data
• Generate custom reports with filtering
• Create visualizations and summaries

📄 **For Documents (PDF, Word):**
• Extract relevant information
• Summarize key points
• Cross-reference with airline data

🖼️ **For Images:**
• Analyze charts, graphs, or screenshots
• Extract text using OCR if needed

Based on your uploaded files, I'll generate a comprehensive airline report. Would you like me to proceed with the analysis?`;
      
      return response;
    }
    
    if (lowerMessage.includes('booking') || lowerMessage.includes('flight')) {
      response = `I'll help you generate a booking report. Based on your request, I can include columns like: Flight Number, Passenger Name, Booking Date, Departure Time, Arrival Time, Seat Number, and Booking Status.

Would you like me to:
• Filter by specific date range?
• Include payment information?
• Focus on particular flight routes?
• Show only specific booking statuses?`;
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('transaction')) {
      response = `Perfect! I can create a comprehensive payment report for you. Available columns include: Transaction ID, Payment Method, Amount, Currency, Payment Status, Processing Date, Customer Details, and Refund Information.

Here's a sample report I've generated for you:`;
      
      // Simulate AI providing a downloadable report
      setTimeout(() => {
        // This would normally be handled by the API response
        // For demo purposes, we'll add this to the message after creation
      }, 100);
      
      response += `

Let me know if you'd like to:
• Filter by payment method (Credit Card, Bank Transfer, etc.)
• Set a specific date range
• Include failed transactions
• Show refund details`;
      
    } else if (lowerMessage.includes('last month') || lowerMessage.includes('last 30 days')) {
      response = `I'll generate a report for the last month. This will include data from ${new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString()} to ${new Date().toLocaleDateString()}.

Which type of report would you prefer:
• Booking summary with passenger details
• Payment transactions and revenue analysis  
• Flight performance metrics
• Customer analytics and demographics`;
    } else if (lowerMessage.includes('column') || lowerMessage.includes('field')) {
      response = `I can help you customize the columns in your report. Here are the available fields organized by category:

**Booking Information:**
• Flight Number, Route, Departure/Arrival Times
• Passenger Name, Contact Details, Seat Assignment
• Booking Date, Status, Confirmation Code

**Payment Details:**
• Transaction Amount, Payment Method, Status
• Processing Date, Currency, Refund Amount

**Operational Data:**
• Aircraft Type, Gate Information, Delays
• Crew Assignment, Fuel Consumption

Which columns would you like to include?`;
    } else {
      response = `I understand you're looking for airline reporting assistance. I can help you with:

🛫 **Booking Reports** - Passenger details, flight information, seat assignments
💳 **Payment Analysis** - Transaction data, revenue tracking, refund processing  
📊 **Operational Metrics** - Flight performance, delays, crew utilization
📅 **Custom Date Ranges** - Last week, month, quarter, or specific periods

Please tell me more about what specific information you'd like to analyze, and I'll create the perfect report for your needs.`;
    }
    
    return response;
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addUserMessage: (state, action: PayloadAction<{ content: string; attachments?: any[] }>) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: 'user',
        content: action.payload.content,
        timestamp: Date.now(),
        attachments: action.payload.attachments,
      };
      state.messages.push(newMessage);
    },
    updateUser: (state, action: PayloadAction<Partial<ChatState['currentUser']>>) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageToAI.pending, (state) => {
        state.isTyping = true;
      })
      .addCase(sendMessageToAI.fulfilled, (state, action) => {
        state.isTyping = false;
        const aiMessage: Message = {
          id: Date.now().toString(),
          sender: 'ai',
          content: action.payload,
          timestamp: Date.now(),
          // Simulate AI providing downloadable attachments for certain responses
          attachments: action.payload.includes('payment report') ? [{
            id: 'report-' + Date.now(),
            name: 'Payment_Report_' + new Date().toISOString().split('T')[0] + '.pdf',
            type: 'application/pdf',
            size: 245760,
            downloadUrl: 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFBheW1lbnQgUmVwb3J0KQovQ3JlYXRvciAoQUkgQXNzaXN0YW50KQovUHJvZHVjZXIgKEFpcmxpbmUgUmVwb3J0aW5nIFN5c3RlbSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDI1MDEyMzAwMDAwMFopCj4+CmVuZG9iago=',
          }] : undefined,
        };
        state.messages.push(aiMessage);
      })
      .addCase(sendMessageToAI.rejected, (state) => {
        state.isTyping = false;
        const errorMessage: Message = {
          id: Date.now().toString(),
          sender: 'ai',
          content: 'I apologize, but I encountered an error processing your request. Please try again.',
          timestamp: Date.now(),
        };
        state.messages.push(errorMessage);
      });
  },
});

export const { addUserMessage, updateUser } = chatSlice.actions;
export default chatSlice.reducer;