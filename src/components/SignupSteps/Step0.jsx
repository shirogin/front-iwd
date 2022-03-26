import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { next, setData } from "../../app/slices/installation";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Button, Box, Divider } from "@mui/material";

const styles = {
    root: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        textAlign: "center",
    },
    btn: {
        fontSize: "2rem",
        width: "250px",
        borderRadius: "10px",
        marginBottom: 2,
        margin: "5px 15px",
    },
    genderBtn: (selected) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        width: "50%",
        height: "200px",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: selected ? "#828FED" : "white",
        "& p": {
            fontSize: "1.5rem",
        },
        margin: "0 20px",
    }),
    link: {
        color: "#56BCA6",
    },
};

function Step0() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    const handleChange = (e) => {
        dispatch(setData({ ...data, birthday: e.target.value }));
    };

    return (
        <Box sx={styles.root}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "3.75rem" },
                    }}
                >
                    Tell us more about you.
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        width: { xs: "80%", sm: "100%" },
                        display: { xs: "none", sm: "inherit" },
                    }}
                >
                    This will help us to know our students more
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: {
                        xs: "column",
                        sm: "row",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        marginBottom: { xs: 2, sm: 0 },
                        width: { sm: "inherit", xs: "100%" },
                    }}
                >
                    <TextField
                        label="First Name"
                        variant="standard"
                        sx={{
                            marginBottom: 2,
                            width: { sm: "inherit", xs: "100%" },
                        }}
                        value={data.firstName}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, firstName: e.target.value })
                            )
                        }
                    />
                    <TextField
                        label="Last Name"
                        variant="standard"
                        sx={{
                            marginTop: 2,
                            width: { sm: "inherit", xs: "100%" },
                        }}
                        value={data.lastName}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, lastName: e.target.value })
                            )
                        }
                    />
                </Box>
                <Divider
                    orientation="vertical"
                    sx={{
                        display: { xs: "none", sm: "inherit" },
                    }}
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: { sm: 0, xs: 4 },
                        width: { sm: "inherit", xs: "100%" },
                    }}
                >
                    <TextField
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{
                            width: {
                                sm: 220,
                                xs: "100%",
                            },
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={data.birthday || new Date()}
                        onChange={handleChange}
                    />
                </Box>
            </Box>
            <Button
                variant="contained"
                sx={styles.btn}
                onClick={() => {
                    if (data.firstName && data.lastName && data.birthday)
                        dispatch(next());
                }}
            >
                Next
            </Button>
            {/* <button onClick={() => dispatch(next())}>next</button> */}
        </Box>
    );
}

export default Step0;
