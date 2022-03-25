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
        color: "white",
        backgroundColor: "#56BCA6",
        marginBottom: 2,
    },
    genderBtn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        width: "50%",
        height: "200px",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "white",
        "& p": {
            fontSize: "1.5rem",
        },
        margin: "0 20px",
    },
    link: {
        color: "#56BCA6",
    },
};

function Step1() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();
    return (
        <div style={styles.root}>
            <Box>
                <Typography variant="h2">What's your gender</Typography>
                <Typography paragraph>
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
                <Paper elevation={8} sx={styles.genderBtn}>
                    <img src={femaleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Female</Typography>
                </Paper>
                <Paper elevation={8} sx={styles.genderBtn}>
                    <img src={maleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Male</Typography>
                </Paper>
                {/* <Button sx={styles.genderBtn}>
                    <img src={femaleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Female</Typography>
                </Button>
                <Button sx={styles.genderBtn}>
                    <img src={maleimg} style={{ width: "50%" }} />
                    <Typography paragraph>Male</Typography>
                </Button> */}
            </Box>
            <Box>
                <Button
                    onClick={() => dispatch(next())}
                    variant="contained"
                    sx={styles.btn}
                >
                    Next
                </Button>
                <Typography paragraph>
                    Existing user?{" "}
                    <Link style={styles.link} to="/signin">
                        Login
                    </Link>
                </Typography>
            </Box>
        </div>
    );
}

export default Step1;
