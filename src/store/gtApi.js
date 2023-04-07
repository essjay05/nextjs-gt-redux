import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

export const gtApi = createApi({
  reducerPath: "gtApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mobile-staging.gametime.co/v1/" }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (q) => `search?q=${q}`,
      providesTags: (result, error, id) => [{ type: 'event', id }]
    })
  })
})

export const { searchGt } = gtApi