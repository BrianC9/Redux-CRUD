import { useAppDispatch } from ".";
import {
	User,
	UserId,
	addNewUser,
	changePremiunById,
	deleteUserById,
} from "../store/users/slice";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const removeUserById = (id: UserId) => dispatch(deleteUserById(id));

	const updatePremiunById = (id: UserId) => dispatch(changePremiunById(id));

	const addUser = (user: User) => dispatch(addNewUser(user));

	return { removeUserById, updatePremiunById, addUser };
};
