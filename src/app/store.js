import { configureStore } from '@reduxjs/toolkit';
import Api from "./backend";
import LocalManager from "./localManager";
import notifications from "./slices/notifications";
import user from "./slices/user";
import installation from "./slices/installation";

export const store = configureStore({
    reducer: {
        [Api.reducerPath]: Api.reducer,
        [LocalManager.reducerPath]: LocalManager.reducer,
        installation,
        notifications,
        user,
    },
});
