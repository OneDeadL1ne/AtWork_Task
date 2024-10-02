
import { api } from './';

import { UserInterface } from '@/types/user';

const usersApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.mutation<Array<UserInterface>, void>({
			query: () => ({ url: ``, method: 'GET' }),
			invalidatesTags: ['User'],
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
	useGetUsersMutation,
	useChangeUserStatusMutation,
	useUpdateUserMutation,

} = usersApi;
