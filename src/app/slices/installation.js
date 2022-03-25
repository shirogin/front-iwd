import { createSlice } from "@reduxjs/toolkit";

const initial_state = JSON.parse(
    localStorage.getItem("Installation") || '{ "step": 1,"data":{} }'
);

const minSteps = 0;
const maxSteps = 5;

const installation = createSlice({
    name: "installation",
    initialState: initial_state,
    reducers: {
        next: (state) => {
            state.step = Math.min(state.step + 1, maxSteps);
            localStorage.setItem("Installation", JSON.stringify(state));
            return state;
        },
        prev: (state) => {
            state.step = Math.max(state.step - 1, minSteps);
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
