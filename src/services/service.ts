import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = `${window.location.origin}/grmadmin/admin`;

// Define a service using a base URL
const ChatBotSerice = createApi({
  reducerPath: "GRMConfig",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8002/v1',
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        token && headers.set('Authorization', `Token ${token}`);
      }
      // Example: Set a custom header for a specific endpoint
      if (endpoint !== 'fileUpload' && endpoint !== 'importAirlineConfig') {
        headers.set('Content-Type', 'application/json');
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
export { ChatBotSerice, apiUrl };