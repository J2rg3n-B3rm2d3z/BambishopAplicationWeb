import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const bambishopApi = createApi({
  reducerPath: 'bambishop',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7257/apibambishop'
  }),

  endpoints: (builder) => ({

    getClientes: builder.query({
      query: () => '/cliente'
    })
  })
});

export const { useGetClientesQuery } = bambishopApi;