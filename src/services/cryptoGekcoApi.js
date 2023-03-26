import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoGekcoApiHeaders = {
     'X-RapidAPI-Key': 'e5dda05c53mshaca7b62d87e5cd7p1997e5jsn888dd0fb7bd4',
     'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoGekcoApiHeaders})

export const cryptoGekcoApi = createApi({
     reducerPath: 'cryptoGekcoApi',
     baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
     endpoints: (builder) => ({
          getExchanges: builder.query({
               query: () => createRequest(`/exchanges`),
          }),
     })
})

export const {  useGetExchangesQuery } = cryptoGekcoApi;