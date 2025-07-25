
import { ChatBotSerice } from "./service";

const service = ChatBotSerice.enhanceEndpoints({
  addTagTypes: ["grmConfig"]
}).injectEndpoints({
  endpoints: (builder) => ({
    getresponse1data: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: `staticResponse/response1.json`
      })
    }),
    getChatResponse: builder.mutation<any, any>({
      query: (requestInfo) => ({
        method: "POST",
        url: `/airlines/configuration`,
        body: requestInfo
      })
    }),
  })
});

export const {
  useLazyGetresponse1dataQuery,
  useGetChatResponseMutation
} = service;