
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
    })
  })
});

export const {
  useLazyGetresponse1dataQuery,
} = service;