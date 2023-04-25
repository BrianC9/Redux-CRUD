import { createSlice } from "@reduxjs/toolkit";

const initialStateUsers: UserWithId[] = [
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
export interface User {
	name: string;
	github: string;
	email: string;
	premium: boolean;
}
export type UserId = number;

export interface UserWithId extends User {
	id: UserId;
}
export const usersSlice = createSlice({
	name: "users",
	initialState: initialStateUsers,
	reducers: {},
});

export default usersSlice.reducer;
