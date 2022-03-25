import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    title: "Error",
    description: "Undefined",
    type: "error",
    shown: false,
};
const notifications = createSlice({
    name: "notifications",
    initialState: initial_state,
    reducers: {
        setNotification: (state, { payload }) => {
            state.title = payload.title;
            state.description = payload.description;
            state.type = payload.type;
            state.shown = true;
        },
        setShow: (state, { payload }) => {
            state.shown = payload;
        },
    },
});

export const { setNotification, setShow } = notifications.actions;
export const Notify = (dispatch, { title, description, type }) => {
    dispatch(
        setNotification({
            title,
            description,
            type,
        })
    );
    setTimeout(() => {
        dispatch(setShow(false));
    }, 10000);
};
export default notifications.reducer;
