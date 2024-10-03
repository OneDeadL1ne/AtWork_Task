

import { UserInterface } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';



const initialState:{users:UserInterface[]}  = {
	users: [],
	
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (_, action) => {
			
			_.users = action.payload

		},
		setArchive: (_, action) => {
			const userIndex = _.users.findIndex(user => user.id === action.payload);
			_.users[userIndex].isArchive =!_.users[userIndex].isArchive;
			
			
		},
		setHide: (_, action) => {
			const userIndex = _.users.findIndex(user => user.id === action.payload);
			_.users[userIndex].isHide =!_.users[userIndex].isHide;
		},
		setUpdate:  (_, action) => {
			const userIndex = _.users.findIndex(user => user.id === action.payload.id);
			_.users[userIndex] = action.payload;
		}
		
	},
});

export const {setUsers, setArchive, setHide} = usersSlice.actions;
export default usersSlice.reducer;
