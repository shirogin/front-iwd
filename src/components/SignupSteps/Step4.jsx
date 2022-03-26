import React from "react";

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
    list: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: {
            sm: "50%",
            xs: "80%",
        },
    },
    listItem: (selected) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "50px",
        width: "100%",
        "& .title": {
            fontWeight: "bold",
        },
        "& .time": {
            fontWeight: "bold",
            opacity: "0.6",
        },
        margin: "10px 0",
        padding: "0 30px",
        border: selected ? "2px solid #70C1F2" : "null",
    }),
    link: {
        color: "#56BCA6",
    },
};

const offers = [
    { title: "Casual", time: "10 min / day" },
    { title: "Regular", time: "20 min / day" },
    { title: "Serious", time: "30 min / day" },
    { title: "Intense", time: "01 hour / day" },
];

function Step4() {
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
                    Great, time to set a daily goal
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
            <Box sx={styles.list}>
                {offers.map((offer, i) => (
                    <Paper
                        key={i}
                        button
                        sx={styles.listItem(data.goal === offer.title)}
                        onClick={() =>
                            dispatch(setData({ ...data, goal: offer.title }))
                        }
                    >
                        <Typography className="title">{offer.title}</Typography>
                        <Typography className="time">{offer.time}</Typography>
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
                            if (data.goal) {
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

export default Step4;
