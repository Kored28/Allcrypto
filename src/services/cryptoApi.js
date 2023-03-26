import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
     'X-RapidAPI-Key': 'e5dda05c53mshaca7b62d87e5cd7p1997e5jsn888dd0fb7bd4',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
     endpoints: (builder) => ({
          getCryptos: builder.query({
               query: (count) => createRequest(`/coins?limit=${count}`)
          }),
          getCryptoDetails: builder.query({
               query: (coinId) => createRequest(`/coin/${coinId}`)
          }),
          getCryptoHistory: builder.query({
               query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`)
          }),
     })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;