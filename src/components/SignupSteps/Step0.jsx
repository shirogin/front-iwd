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
        margin: "0 15px",
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
            <Box>
                <Typography variant="h2">Tell us more about you</Typography>
                <Typography paragraph>
                    This will help us to know our students more
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <TextField
                        label="First Name"
                        variant="standard"
                        sx={{ marginBottom: 2 }}
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
                        sx={{ marginTop: 2 }}
                        value={data.lastName}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, lastName: e.target.value })
                            )
                        }
                    />
                </Box>
                <Divider orientation="vertical" />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        sx={{ width: 220 }}
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
