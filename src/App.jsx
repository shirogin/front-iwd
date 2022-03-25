import Router from "./Router";
import { useGetUserDataQuery } from "./app/backend";
import { removeUser, setUser } from "./app/slices/user";

import { useAppDispatch } from "./app/hooks";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#96f8fb",
            light: "#fff",
            dark: "#3ea0a3",
            contrastText: "#030505",
        },
        background: {
            default: "#030505",
            paper: "#101010",
        },
    },
    typography: {
        fontFamily: `"Roboto Mono", monospace, Arial, Helvetica, sans-serif`,
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
});
function App() {
    const { data, error, isLoading: isAuthing } = useGetUserDataQuery(),
        dispatch = useAppDispatch();
    if (!isAuthing) {
        if (error) dispatch(removeUser());
        else if (data) dispatch(setUser(data));
    }
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
}

export default App;
