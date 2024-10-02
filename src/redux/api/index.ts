import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	reducerPath: 'api',
	refetchOnReconnect: true,
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API
	}),
	tagTypes: ['User'],
	endpoints: () => ({}),
});
