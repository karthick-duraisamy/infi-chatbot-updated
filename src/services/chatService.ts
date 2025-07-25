
import { ChatBotSerice } from "./service";

const service = ChatBotSerice.enhanceEndpoints({
  addTagTypes: ["grmConfig"]
}).injectEndpoints({
  endpoints: (builder) => ({
    getresponse1data: builder.query<any, string>({
      query: (fileName) => ({
        method: "GET",
        url: `staticResponse/${fileName}`
      })
    }),
    getChatResponse: builder.mutation<any, any>({
      query: (requestInfo) => ({
        method: "POST",
        url: `/chat/completions`,
        body: requestInfo
      })
    }),
  })
});

export const {
  useLazyGetresponse1dataQuery,
  useGetChatResponseMutation
} = service;