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
        margin: "5px 15px",
    },
    yearBtn: (selected) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        fontSize: {
            sm: "4rem",
            xs: "2rem",
        },
        fontWeight: "bold",
        width: {
            sm: "200px",
            xs: "100px",
        },
        height: {
            sm: "200px",
            xs: "100px",
        },
        borderRadius: "30px",
        "& p": {
            fontSize: {
                sm: "4rem",
                xs: "2rem",
            },
            fontWeight: "bold",
        },
        margin: {
            sm: "0 20px",
            xs: "20px 0",
        },
        border: selected ? "2px solid #70C1F2" : "null",
    }),
    link: {
        color: "#56BCA6",
    },
};

function Step3() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    const arr = Array(data.etab === "P" ? 5 : data.etab === "M" ? 4 : 3).fill(
        0
    );
    return (
        <Box sx={styles.root}>
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "3.75rem" },
                    }}
                >
                    What is your study level
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
                    flexWrap: {
                        xs: "wrap",
                        sm: "no-wrap",
                    },
                }}
            >
                {arr.map((val, idx) => (
                    <Paper
                        elevation={8}
                        sx={styles.yearBtn(data.year === idx + 1)}
                        key={idx}
                        onClick={() =>
                            dispatch(
                                setData({
                                    ...data,
                                    year: idx + 1,
                                    studyLevel: `${data.etab}${idx + 1}`,
                                })
                            )
                        }
                    >
                        <Typography>
                            <span
                                style={{
                                    color: "#56BCA6",
                                }}
                            >
                                {idx + 1}
                            </span>
                        </Typography>
                        <Typography>Year</Typography>
                    </Paper>
                ))}
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
                        onClick={() => {
                            if (data.year) {
                                dispatch(next());
                            }
                        }}
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

export default Step3;
