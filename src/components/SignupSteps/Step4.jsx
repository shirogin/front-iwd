import React from "react";

import { Typography } from "@mui/material";
import { Button, Box, Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
        margin: "0 15px",
    },
    list: {
        border: "1px solid black",
        borderRadius: "30px",
        width: "50%",
        padding: 0,
    },
    listItem: (selected, first, last) => ({
        backgroundColor: selected ? "#56BCA6" : "white",
        borderTopLeftRadius: first ? "30px" : 0,
        borderTopRightRadius: first ? "30px" : 0,
        borderBottomLeftRadius: last ? "30px" : 0,
        borderBottomRightRadius: last ? "30px" : 0,
        "&:hover": {
            color: "black",
        },
    }),
    ListItemText: (selected) => ({
        width: "100%",
        color: selected ? "white" : "black",
        "&:hover": {
            color: "black",
        },
        "& span": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        "& .title": {
            fontWeight: "bold",
        },
        "& .time": {
            fontWeight: "bold",
            opacity: "0.6",
        },
    }),
    link: {
        color: "#56BCA6",
    },
};

const offers = [
    { title: "Casual", time: "10 min / day" },
    { title: "Regular", time: "20 min / day" },
    { title: "serious", time: "30 min / day" },
    { title: "Intense", time: "01 hour / day" },
];

function Step4() {
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    return (
        <div style={styles.root}>
            <Box>
                <Typography variant="h2">
                    Great, time to set a daily goal
                </Typography>
                <Typography paragraph>
                    This will help us to know our students more
                </Typography>
            </Box>
            <List sx={styles.list}>
                {offers.map((offer, i) => (
                    <React.Fragment key={i}>
                        <ListItem
                            button
                            sx={styles.listItem(
                                data.goal === offer.title,
                                i === 0,
                                i === offers.length - 1
                            )}
                            onClick={() =>
                                dispatch(
                                    setData({ ...data, goal: offer.title })
                                )
                            }
                        >
                            <ListItemText
                                sx={styles.ListItemText(
                                    data.goal === offer.title
                                )}
                            >
                                <Typography className="title">
                                    {offer.title}
                                </Typography>
                                <Typography className="time">
                                    {offer.time}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {i !== offers.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
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
        </div>
    );
}

export default Step4;
