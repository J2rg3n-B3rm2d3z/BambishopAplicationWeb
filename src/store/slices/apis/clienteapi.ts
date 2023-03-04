import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Cliente } from '../../../interfaces';

type GetClientesResponse = Cliente[]

export const bambishopApi = createApi({
  reducerPath: 'bambishop',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7257/apibambishop'
  }),

  tagTypes: ['Clientes'],

  endpoints: (builder) => ({

    createCliente: builder.mutation({
      query: (newCliente) => ({
        url: '/cliente',
        method: 'POST',
        body: newCliente,
      }),
      invalidatesTags: ["Clientes"],
    }),
    getClientes: builder.query<GetClientesResponse,void>({
      query: () => '/cliente',
      providesTags: ['Clientes'],
    }),
    updateCliente: builder.mutation({
      query: (updatedCliente) => ({
        url: `/cliente/cliente:${updatedCliente.idCliente}`,
        method: 'PUT',
        body: updatedCliente
      }),
      invalidatesTags: ["Clientes"],
    }),
    deleteCliente: builder.mutation({
      query: (IdCliente) => ({
        url: `/cliente/cliente:${IdCliente}`,
        method: 'DELETE',
      }),
      invalidatesTags: ["Clientes"],
    })
  }),
});

export const { useGetClientesQuery, useCreateClienteMutation, useDeleteClienteMutation, useUpdateClienteMutation } = bambishopApi;