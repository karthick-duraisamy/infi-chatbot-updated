import { ChatBotSerice } from "./service";

const service = ChatBotSerice.enhanceEndpoints({
  addTagTypes: ["grmConfig"],
}).injectEndpoints({
  endpoints: (builder) => ({
    getresponse1data: builder.query<any, string>({
      query: (fileName) => ({
        method: "GET",
        url: `staticResponse/${fileName}`,
      }),
    }),
    getChatResponse: builder.mutation<any, any>({
      query: (requestInfo) => ({
        method: "POST",
        url: `/chat/completions`,
        body: requestInfo,
      }),
      transformResponse: (response: any, meta: any) => {
        // Check content type from response headers
        const contentType = meta?.response?.headers?.get('content-type') || '';
        
        // If it's a binary response, return the blob with metadata
        if (contentType.includes('application/octet-stream') ||
            contentType.includes('application/vnd.openxmlformats') ||
            contentType.includes('text/csv') ||
            contentType.includes('application/pdf')) {
          
          // Extract filename from Content-Disposition header if available
          const disposition = meta?.response?.headers?.get('content-disposition') || '';
          const filenameMatch = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
          const filename = filenameMatch ? filenameMatch[1].replace(/['"]/g, '') : 'download';
          
          return {
            blob: response,
            filename: filename,
            contentType: contentType,
            isBinary: true
          };
        }
        
        // For JSON responses, return as is
        return response;
      },
    }),
    downloadReport: builder.mutation<Blob, any>({
      query: (requestInfo) => ({
        method: "POST",
        url: `/chat/completions`,
        body: requestInfo,
        responseHandler: (response) => response.blob(),
      }),
    }),
    downloadExcelBinary: builder.query<Blob, void>({
      query: () => ({
        method: "GET",
        url: `/download-excel`,
        responseHandler: (response) => response.blob(),
      }),
    }),
    downloadCsvBinary: builder.query<Blob, void>({
      query: () => ({
        method: "GET",
        url: `/download-csv`,
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
});

export const { useLazyGetresponse1dataQuery, useGetChatResponseMutation } =
  service;
