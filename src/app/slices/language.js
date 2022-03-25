import { createSlice } from "@reduxjs/toolkit";

const initial_state = localStorage.getItem("Language") || "English";

const language = createSlice({
    name: "language",
    initialState: initial_state,
    reducers: {
        chooseLanguage: (state, action) => {
            state = action.payload;
            localStorage.setItem("Language", state);
            return state;
        },
    },
});

export const { chooseLanguage } = language.actions;

export default language.reducer;
