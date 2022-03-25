import { configureStore } from '@reduxjs/toolkit';
import Api from "./backend";
import notifications from "./slices/notifications";
import user from "./slices/user";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        counter: counterReducer,
        notifications,
        user,
    },
});
