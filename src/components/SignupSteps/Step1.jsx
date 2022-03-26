import { Typography } from "@mui/material";
import { Button, Box, Paper } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { next, prev, setData } from "../../app/slices/installation";

import { Link } from "react-router-dom";

import femaleimg from "../../images/female.svg";
import maleimg from "../../images/male.svg";

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
        // color: selected ? "white" : "black",
        width: "50%",
        height: "200px",
        justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: selected ? "#56BCA6" : "white",
        "& p": {
            fontSize: "1.5rem",
        },
        margin: "0 20px",
        border: selected ? "2px solid #70C1F2" : "null",
    }),
    link: {
        color: "#56BCA6",
    },
};

function Step1() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();
    return (
        <Box sx={styles.root}>
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "3.75rem" },
                    }}
                >
                    What's your gender
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
                }}
            >
                <Paper
                    elevation={8}
                    sx={styles.genderBtn(data.gender === "f")}
                    onClick={() => dispatch(setData({ ...data, gender: "f" }))}
                >
                    <img src={femaleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Female</Typography>
                </Paper>
                <Paper
                    elevation={8}
                    sx={styles.genderBtn(data.gender === "m")}
                    onClick={() => dispatch(setData({ ...data, gender: "m" }))}
                >
                    <img src={maleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Male</Typography>
                </Paper>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column-reverse",
                            sm: "row",
                        },
                    }}
                >
                    <Button
                        onClick={() => dispatch(prev())}
                        variant="contained"
                        sx={styles.btn}
                        color="grey"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() => (data.gender ? dispatch(next()) : null)}
                        variant="contained"
                        sx={styles.btn}
                    >
                        Next
                    </Button>
                </Box>
                <Typography paragraph>
                    Existing user?{" "}
                    <Link style={styles.link} to="/signin">
                        Login
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Step1;
