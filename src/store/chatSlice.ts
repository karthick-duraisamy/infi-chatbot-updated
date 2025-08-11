import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { downloadFile, isBinaryResponse, detectFileType } from "../utils/downloadUtils";

export interface User {
  firstName: string;
  lastName?: string;
  email?: string;
}

export interface Message {
  id: string;
  sender: "user" | "ai";
  content: string;
  timestamp: number;
  isLoading?: boolean;
  choices?: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason?: string;
  }[];
  attachments?: {
    id: string;
    name: string;
    type: string;
    size: number;
    url?: string;
    preview?: string;
    downloadUrl?: string;
  }[];
  isDownload?: boolean;
  downloadSuccess?: boolean;
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  currentUser: User;
}

const initialState: ChatState = {
  messages: [],
  isTyping: false,
  currentUser: {
    firstName: "John",
    lastName: "Doe",
  },
};

// Dynamic local JSON response loading using Redux Toolkit Query
export const sendMessageToAI = createAsyncThunk<
  any,
  { message: string; attachments?: any[]; requestData?: any }
>(
  "chat/sendMessageToAI",
  async ({ message, attachments, requestData }, { dispatch, extra }) => {
    // Determine which JSON file to load based on message content
    const lowerMessage = message.toLowerCase().trim();
    let jsonFileName = "hello.json"; // default fallback

    // Map common keywords to JSON files
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      jsonFileName = "hello.json";
    } else if (
      lowerMessage.includes("booking") ||
      lowerMessage.includes("flight")
    ) {
      jsonFileName = "bookingdetails.json";
    } else if (
      lowerMessage.includes("group") ||
      lowerMessage.includes("request")
    ) {
      jsonFileName = "GroupRequestReport.json";
    } else if (
      lowerMessage.includes("last 3 months") ||
      lowerMessage.includes("3 months")
    ) {
      jsonFileName = "last3months.json";
    } else if (
      lowerMessage.includes("report") ||
      lowerMessage.includes("get report")
    ) {
      jsonFileName = "getthereport.json";
    }

    try {
      // Import the service endpoints
      const { ChatBotSerice } = await import("../services/service");

      // Use the service's endpoints directly to fetch the JSON file
      const result = await dispatch(
        // (ChatBotSerice as any)?.endpoints?.getChatResponse?.initiate(
        //   requestData
        // )
        (ChatBotSerice as any)?.endpoints?.getresponse1data?.initiate(jsonFileName)
      ).unwrap();

      // Handle binary file downloads
      if (isBinaryResponse(result)) {
        const fileName = message.split(' ').join('_'); // Simple filename generation
        const fileType = detectFileType(result);
        await downloadFile(result, fileName, fileType);
        return {
          id: "download-" + Date.now(),
          sender: "ai",
          content: `<p>Your report ('${fileName}.${fileType}') has been downloaded successfully.</p>`,
          timestamp: Date.now(),
          isDownload: true,
          downloadSuccess: true,
        };
      }

      // Return the entire JSON response object for text/html content
      return result;
    } catch (error) {
      console.error("Error loading response:", error);

      // Fallback response if loading fails
      return {
        id: "error-" + Date.now(),
        choices: [
          {
            message: {
              role: "assistant",
              content: `<p>I apologize, but I encountered an error processing your request. Please try again or contact support.</p>`,
            },
          },
        ],
      };
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (
      state,
      action: PayloadAction<{ content: string; attachments?: any[] }>
    ) => {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: "user",
        content: action.payload.content,
        timestamp: Date.now(),
        attachments: action.payload.attachments,
      };
      state.messages.push(newMessage);
    },
    updateUser: (
      state,
      action: PayloadAction<Partial<ChatState["currentUser"]>>
    ) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
      state.isTyping = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessageToAI.pending, (state) => {
        state.isTyping = true;
      })
      .addCase(sendMessageToAI.fulfilled, (state, action) => {
        state.isTyping = false;
        const responseData = action.payload;

        // Check if the payload is a direct message object (for downloads)
        if (responseData.sender === "ai" && responseData.isDownload) {
          state.messages.push(responseData);
          return;
        }

        // Handle regular text/HTML responses
        let content = "";
        let choices = undefined;

        if (responseData.choices && responseData.choices.length > 0) {
          content = responseData.choices[0].message.content;
          choices = responseData.choices;
        } else if (responseData.content) {
          // Handle cases where response is directly the content
          content = responseData.content;
        } else {
          // Fallback for unexpected response structures
          content = `<p>Received an unexpected response format.</p>`;
        }

        const aiMessage: Message = {
          id: responseData.id || Date.now().toString(),
          sender: "ai",
          content: content,
          timestamp: Date.now(),
          choices: choices,
        };
        state.messages.push(aiMessage);
      })
      .addCase(sendMessageToAI.rejected, (state) => {
        state.isTyping = false;
        const errorMessage: Message = {
          id: Date.now().toString(),
          sender: "ai",
          content:
            "I apologize, but I encountered an error processing your request. Please try again.",
          timestamp: Date.now(),
        };
        state.messages.push(errorMessage);
      });
  },
});

export const { addUserMessage, setTyping, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;