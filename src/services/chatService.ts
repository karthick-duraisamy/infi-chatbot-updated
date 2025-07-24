
import { ChatBotSerice } from "./service";

const service = ChatBotSerice.enhanceEndpoints({
  addTagTypes: ["grmConfig"]
}).injectEndpoints({
  endpoints: (builder) => ({
    getAirlineConfig: builder.query<any, void>({
      query: () => ({
        method: "GET",
        url: `/`
      })
    })
  })
});

export const {
  useGetAirlineConfigQuery,
} = service;