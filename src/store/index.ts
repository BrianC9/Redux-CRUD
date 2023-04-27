import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { User, UserWithId, rollbackUser } from "./users/slice";
const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};
const validateNewUserInfoMiddleware: Middleware =
	(store) => (next) => (action) => {
		if (action.type === "users/addNewUser") {
			const prevState = store.getState();
			const newUser = action.payload;
			const userEmailAlreadyTaken = prevState.users.some(
				(user: User) =>
					user.email.toLocaleLowerCase() === newUser.email.toLocaleLowerCase(),
			);
			if (userEmailAlreadyTaken) {
				toast.error("Email already taken");
			} else {
				toast.success("User created successfully");
			}
		}
		next(action);
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log({ SyncWithDBMiddlewareBEFOREAction: action });
		const prevState = store.getState();

		next(action);

		console.log({ SyncWithDBMiddlewareAFTERAction: action });

		const { type, payload } = action;

		//Delete

		if (type === "users/deleteUserById") {
			const id = payload;
			const userToRemove = prevState.users.find(
				(user: UserWithId) => user.id === id,
			);

			fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) {
						toast(`User ${id} deleted successfully from  the DB`, {
							action: {
								label: "Rollback",
								onClick: () => store.dispatch(rollbackUser(userToRemove)),
							},
						});
					}
				})
				.catch(() => {
					toast.error("Error deleting the user");

					if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				});
		}

		// Create

		if (type === "users/addNewUser") {
			const newUser: User = payload;
			fetch("https://jsonplaceholder.typicode.com/users", {
				method: "POST",
				body: JSON.stringify(newUser),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((res) => {
					if (res.ok)
						toast.success(
							`User ${newUser.name} inserted successfully in the DB`,
						);
				})
				.catch(() => toast.error("Error CREATING the user"));
		}
	};
export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [
		persistanceLocalStorageMiddleware,
		validateNewUserInfoMiddleware,
		syncWithDatabaseMiddleware,
	],
});

store.subscribe(() => {
	console.log(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
