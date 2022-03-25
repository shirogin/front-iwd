import Router from "./Router";
import { useGetUserDataQuery } from "./app/backend";
import { removeUser, setUser } from "./app/slices/user";

import { useAppDispatch } from "./app/hooks";
import { createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#56BCA6",
            light: "#fff",
            dark: "#3ea0a3",
            contrastText: "#fff",
        },
        secondary: {
            main: "#828FED",
            light: "#fff",
            dark: "#3ea0a3",
            contrastText: "#fff",
        },
        background: {
            main: "#E5E5E5",
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
    shape: {
        borderRadius: 15,
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
