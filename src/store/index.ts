import { Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		console.log("____Start of middleware persistanceLocalStorageMiddleware_________");
		console.log("state ANTES de la acción: ",store.getState());
		console.log("action que hemos enviado:",action);
		next(action);
		console.log("state DESPUÉS de procesar la acción", store.getState());
		console.log("------End of middleware persistanceLocalStorageMiddleware-----");

	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware],
});

store.subscribe(() => {
	console.log(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
