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
    yearBtn: (selected) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: selected ? "white" : "black",
        border: "1px solid black",
        fontSize: "4rem",
        fontWeight: "bold",
        width: "200px",
        height: "200px",
        borderRadius: "30px",
        backgroundColor: selected ? "#56BCA6" : "white",
        "& p": {
            fontSize: "4rem",
            fontWeight: "bold",
        },
        margin: "0 20px",
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
                <Typography variant="h2">What is your study level</Typography>
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
                {arr.map((val, idx) => (
                    <Box
                        sx={styles.yearBtn(data.year === idx + 1)}
                        key={idx}
                        onClick={() =>
                            dispatch(
                                setData({
                                    ...data,
                                    year: idx + 1,
                                    level: `${data.etab}${idx + 1}`,
                                })
                            )
                        }
                    >
                        <Typography>
                            <span
                                style={{
                                    color:
                                        data.year === idx + 1
                                            ? "white"
                                            : "#56BCA6",
                                }}
                            >
                                {idx + 1}
                            </span>
                        </Typography>
                        <Typography>Year</Typography>
                    </Box>
                ))}
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
