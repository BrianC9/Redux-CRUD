import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const DEFAULT_USERS_STATE: UserWithId[] = [
	{
		id: 1,
		name: "Danielle",
		email: "dking@rocketmail.com",
		github: "entertainingswim",
		premium: false,
	},
	{
		id: 2,
		name: "Rachel",
		email: "rachel@hotmail.com",
		github: "zestywhistle",
		premium: true,
	},
	{
		id: 3,
		name: "Alexander",
		email: "aawalker@live.com",
		github: "zippycoat",
		premium: false,
	},
	{
		id: 4,
		name: "Courtney",
		email: "courtney_l_smith@gmail.com",
		github: "nondescriptletter",
		premium: true,
	},
	{
		id: 5,
		name: "Nicholas",
		email: "nicholas.david.jones@ymail.com",
		github: "chivalrousjeans",
		premium: false,
	},
	{
		id: 6,
		name: "Eric",
		email: "e.a.turner@yahoo.com",
		github: "harshsweater",
		premium: true,
	},
	{
		id: 7,
		name: "Layla",
		email: "l_j_patterson@aol.com",
		github: "publicmouth",
		premium: false,
	},
	{
		id: 8,
		name: "Melissa",
		email: "mwatson@rocketmail.com",
		github: "chiefsteam",
		premium: true,
	},
	{
		id: 9,
		name: "Sofia",
		email: "sacollins@aol.com",
		github: "coherentslope",
		premium: false,
	},
	{
		id: 10,
		name: "Owen",
		email: "owen55@yahoo.com",
		github: "stupendousmemory",
		premium: true,
	},
];
const initialStateUsers: UserWithId[] = (() => {
	const usersListFromLS = localStorage.getItem("__redux__state__");
	console.log(usersListFromLS);
	if (usersListFromLS) {
		return JSON.parse(usersListFromLS).users;
	} else return DEFAULT_USERS_STATE;
})();
export interface User {
	name: string;
	github: string;
	email: string;
	premium: boolean;
}
export type UserId = number;

export interface UserWithId extends User {
	id: UserId | string;
}
export const usersSlice = createSlice({
	name: "users",
	initialState: initialStateUsers,
	reducers: {
		addNewUser: (prevState, action: PayloadAction<User>) => {
			const id = crypto.randomUUID().split("-")[0];
			const newUser: User = action.payload;
			return [...prevState, { id, ...newUser }];
		},
		deleteUserById: (prevState, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return prevState.filter((user) => user.id !== id);
		},
		changePremiunById: (prevState, action: PayloadAction<UserId>) => {
			const id = action.payload;
			const newState = prevState.map((user) => {
				if (user.id === id) {
					const actualPremiun = user.premium;
					return { ...user, premium: !actualPremiun };
				}
				return user;
			});
			return newState;
		},
	},
});
export const { deleteUserById, changePremiunById, addNewUser } =
	usersSlice.actions;
export default usersSlice.reducer;
