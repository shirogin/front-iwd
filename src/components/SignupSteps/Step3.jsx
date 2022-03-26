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
            md: "4rem",
            xs: "2rem",
        },
        fontWeight: "bold",
        width: {
            md: "200px",
            xs: "100px",
        },
        height: {
            md: "200px",
            xs: "100px",
        },
        borderRadius: "30px",
        "& p": {
            fontSize: {
                md: "4rem",
                xs: "2rem",
            },
            fontWeight: "bold",
        },
        // "& .MuiPaper-root": {
        //     margin: "20px",
        // },
        // margin: {
        //     md: "20px",
        //     xs: "20px",
        // },
        margin: "20px",

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
                        fontSize: { xs: "1.5rem", md: "3.75rem" },
                    }}
                >
                    What is your study level
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        width: { xs: "80%", md: "100%" },
                        display: { xs: "none", md: "inherit" },
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
                        md: "no-wrap",
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
                            md: "row",
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
