
import { api } from './';

import { FetchUserInterface, UserInterface } from '@/types/user';

const usersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<Array<FetchUserInterface>, void>({
			query: () => ({ url: `/users`, method: 'GET' }),
			providesTags: ['User'],
		}),
		getUser: builder.query<FetchUserInterface, number>({
			query: (id) => ({ url: `/users/${id}`, method: 'GET' }),
			providesTags: ['User'],
		}),

		updateUser: builder.mutation<UserInterface, Partial<UserInterface>>({
			query: (body) => ({
				url: ``,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		changeUserStatus: builder.mutation<boolean, Partial<UserInterface>>({
			query: (body) => ({
				url: '',
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['User'],
		}),

		
	
	}),
	overrideExisting: true,
});

export const {
	useGetUserQuery,
	useGetUsersQuery,
	useChangeUserStatusMutation,
	useUpdateUserMutation,

} = usersApi;
