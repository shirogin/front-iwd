import { createSlice } from "@reduxjs/toolkit";

const initial_state = JSON.parse(
    localStorage.getItem("Installation") || '{ "step": 0,"data":{} }'
);

const installation = createSlice({
    name: "installation",
    initialState: initial_state,
    reducers: {
        next: (state) => {
            state.step++;
            localStorage.setItem("Installation", JSON.stringify(state));
            return state;
        },
        prev: (state) => {
            state.step--;
            localStorage.setItem("Installation", JSON.stringify(state));
            return state;
        },
        setData: (state, action) => {
            state.data = action.payload ?? null;
            localStorage.setItem("Installation", JSON.stringify(state));
            return state;
        },
    },
});

export const { next, prev, setData } = installation.actions;

export default installation.reducer;
