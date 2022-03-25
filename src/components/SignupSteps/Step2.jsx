import { Typography } from "@mui/material";
import { Button, Box, Paper } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { next, prev, setData } from "../../app/slices/installation";

import { Link } from "react-router-dom";

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
    etabBtn: (selected) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: selected ? "white" : "black",
        border: "1px solid black",
        fontSize: "4rem",
        fontWeight: "bold",
        width: "100%",
        borderRadius: "20px",
        backgroundColor: selected ? "#56BCA6" : "white",
        "& p": {
            fontSize: "1.5rem",
        },
        "& span": {
            fontSize: "3rem",
            fontWeight: 300,
        },
        margin: "20px 0",
    }),
    link: {
        color: "#56BCA6",
    },
};

function Step2() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    return (
        <Box sx={styles.root}>
            <Box>
                <Typography variant="h2">What is your study level</Typography>
                <Typography paragraph>
                    This will help us to know our students more
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "50%",
                }}
            >
                <Paper
                    elevation={8}
                    sx={styles.etabBtn(data.etab === "P")}
                    onClick={() => dispatch(setData({ ...data, etab: "P" }))}
                >
                    <Typography>Primary School</Typography>
                    <Typography
                        variant="span"
                        sx={{ color: data.etab === "P" ? "white" : "#828FED" }}
                    >
                        1+1
                    </Typography>
                </Paper>
                <Paper
                    elevation={8}
                    sx={styles.etabBtn(data.etab === "M")}
                    onClick={() => dispatch(setData({ ...data, etab: "M" }))}
                >
                    <Typography>Middle School</Typography>
                    <Typography
                        variant="span"
                        sx={{ color: data.etab === "M" ? "white" : "#70C1F2" }}
                    >
                        ✓2
                    </Typography>
                </Paper>
                <Paper
                    elevation={8}
                    sx={styles.etabBtn(data.etab === "H")}
                    onClick={() => dispatch(setData({ ...data, etab: "H" }))}
                >
                    <Typography>High School</Typography>
                    <Typography
                        variant="span"
                        sx={{ color: data.etab === "H" ? "white" : "#56BCA6" }}
                    >
                        i²
                    </Typography>
                </Paper>
            </Box>
            <Box>
                <Box>
                    <Button
                        onClick={() => dispatch(prev())}
                        variant="contained"
                        sx={styles.btn}
                        color="grey"
                    >
                        Back
                    </Button>
                    <Button
                        onClick={() => (data.etab ? dispatch(next()) : null)}
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

export default Step2;
