import { useAppDispatch } from ".";
import {
	UserId,
	changePremiunById,
	deleteUserById,
} from "../store/users/slice";

export const useUserActions = () => {
	const dispatch = useAppDispatch();
	const removeUserById = (id: UserId) => dispatch(deleteUserById(id));

	const updatePremiunById = (id: UserId) => dispatch(changePremiunById(id));

	return { removeUserById, updatePremiunById };
};
