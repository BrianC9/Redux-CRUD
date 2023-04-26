import { useAppSelector } from ".";

export const useUsers = () => {
	const users = useAppSelector((state) => state.users);
	const premiumUsers = users.filter((user) => user.premium === true);
	const nonPremiunUsers = users.filter((user) => user.premium === false);

	return { users, premiumUsers, nonPremiunUsers };
};
