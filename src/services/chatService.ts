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
