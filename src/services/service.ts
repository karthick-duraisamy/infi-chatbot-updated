import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiUrl = `${window.location.origin}/grmadmin/admin`;

// Define a service using a base URL
const ChatBotSerice = createApi({
  reducerPath: "GRMConfig",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8002/v1",
    // baseUrl: '/',
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        token &&
          headers.set(
            "Authorization",
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUzOTM4ODgzLCJpYXQiOjE3NTM4NjY5OTQsImp0aSI6ImYyMDc0ZjNhODRlNTQ1MWFhM2ZkNmZkNmQ0MTUzNWEzIiwidXNlcl9pZCI6MX0.DCl3Pdvw-s0KbL0-H-LbEKgntoUC6x4X6vNWsbXgYYs.Q2pLbTluK0NvY1cwVWJYdW1aVmxIRkNWRWVXckNLT0lIVjdRSkNpbzdjRUNma2NuZ3hLeTlxbWNsVW5CSjFBT09pMkt5UjJzWFJYejVzd2k2MmJQSGQzd0NtcjVsTnZ2dHN3TjUvRStkT09EeTZvRXdVMGJPbGVOTEVlS3RaUFV4Q2tISXI4MDVWR01mQ2tSVlZuOHVydDVnWWN3d3VSaUQvT0xJM25DcUJvWFNLTlpyUnMxSEJOSkVSMHJWYUFPTlRQTDhpay9wMFJRUUR5OURJR0lSUT09"
          );
      } else {
        headers.set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzUzOTM4ODgzLCJpYXQiOjE3NTM4NjY5OTQsImp0aSI6ImYyMDc0ZjNhODRlNTQ1MWFhM2ZkNmZkNmQ0MTUzNWEzIiwidXNlcl9pZCI6MX0.DCl3Pdvw-s0KbL0-H-LbEKgntoUC6x4X6vNWsbXgYYs.Q2pLbTluK0NvY1cwVWJYdW1aVmxIRkNWRWVXckNLT0lIVjdRSkNpbzdjRUNma2NuZ3hLeTlxbWNsVW5CSjFBT09pMkt5UjJzWFJYejVzd2k2MmJQSGQzd0NtcjVsTnZ2dHN3TjUvRStkT09EeTZvRXdVMGJPbGVOTEVlS3RaUFV4Q2tISXI4MDVWR01mQ2tSVlZuOHVydDVnWWN3d3VSaUQvT0xJM25DcUJvWFNLTlpyUnMxSEJOSkVSMHJWYUFPTlRQTDhpay9wMFJRUUR5OURJR0lSUT09"
        );
      }
      // Example: Set a custom header for a specific endpoint
      if (endpoint !== "fileUpload" && endpoint !== "importAirlineConfig") {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
export { ChatBotSerice, apiUrl };
