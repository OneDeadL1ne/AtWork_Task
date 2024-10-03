
export interface FetchUserInterface {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export interface UserInterface {
    id: number;
    name: string;
    userName: string;
    email: string;
    city: string;
    phone: string;
    companyName:string;  
    isArchive: boolean;
    isHide: boolean;
}

export interface UserStateInterface { 
	users:UserInterface[],
	archiveUsers:UserInterface[],
	hideUsers:UserInterface[]

}