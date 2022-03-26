import { createSlice } from "@reduxjs/toolkit";

const initial_state = JSON.parse(
    localStorage.getItem("Dashboard") || "null"
) || {
    progress: { trimester: 0, module: null, element: null },
    packs: { downloading: [], installed: [] },
};

const dashboard = createSlice({
    name: "dashboard",
    initialState: initial_state,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload ?? null;
            localStorage.setItem("Dashboard", JSON.stringify(state));
            return state;
        },
        setProgress: (state, action) => {
            state.progress = action.payload ?? initial_state.progress;
            localStorage.setItem("Dashboard", JSON.stringify(state));
            return state;
        },
    },
});

export const { setData, setProgress } = dashboard.actions;

export default dashboard.reducer;
