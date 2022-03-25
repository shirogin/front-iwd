import { createSlice } from "@reduxjs/toolkit";

const initial_state = JSON.parse(
    localStorage.getItem("Dashboard") || "null"
) || { progress: {}, history: [] };

const dashboard = createSlice({
    name: "dashboard",
    initialState: initial_state,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload ?? null;
            localStorage.setItem("Dashboard", JSON.stringify(state));
            return state;
        },
    },
});

export const { next, prev } = dashboard.actions;

export default dashboard.reducer;
