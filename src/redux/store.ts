import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';
import usersReducer from './reducers/userSlice';


export const store = configureStore({
	reducer: {
		users: usersReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch)
