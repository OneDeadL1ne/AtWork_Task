import { FetchUserInterface } from "@/types/user";


export const formatUsers = (data:FetchUserInterface[] ) => {
	return data.map((user) => {
		return {
			id: user.id,
			city: user.address.city,
			companyName: user.company.name,
			userName: user.username,
			email: user.email,
			name: user.name,
			phone: user.phone,
			isArchive: false,
			isHide: false,
		};
	});
}

export const formatUser = (user:FetchUserInterface ) => {
	
		return {
			id: user.id,
			city: user.address.city,
			companyName: user.company.name,
			userName: user.username,
			email: user.email,
			name: user.name,
			phone: user.phone,
			isArchive: false,
			isHide: false,
		};
	
}