import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['kpis'],
  endpoints: (builder) => ({
    getKpis: builder.query<void, void>({
      query: () => `api/kpis`,
      providesTags: ['kpis'],
    }),
  }),
});

export const { useGetKpisQuery } = api;
