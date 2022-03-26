import React from "react";

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button, Box, Divider } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GoogleIcon from "@mui/icons-material/Google";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useSignUpMutation } from "../../app/backend";
import { prev, setData } from "../../app/slices/installation";
import { setUser } from "../../app/slices/user";

import { Link } from "react-router-dom";

import BookImg from "../../images/book.svg";
import RuleImg from "../../images/rule.svg";

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
    phoneBtn: {
        width: "40%",
        backgroundColor: "#70C1F2",
        color: "white",
        fontSize: "1.3rem",
        margin: "0 15px",
        padding: "10px 0",
        "&:hover": {
            backgroundColor: "#62B0DF",
        },
    },
    googleBtn: {
        width: "40%",
        backgroundColor: "#828FED",
        color: "white",
        fontSize: "1.3rem",
        margin: "0 15px",
        "&:hover": {
            backgroundColor: "#7782D8",
        },
    },
    link: {
        color: "#56BCA6",
    },
};

function Step5() {
    const [signUp] = useSignUpMutation();
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    return (
        <Box sx={styles.root}>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 2,
                    right: 0,
                    top: 50,
                    "& img": {
                        width: { xs: "20px" },
                    },
                }}
            >
                <img src={RuleImg} alt="rule image" />
            </Box>

            <img
                src={BookImg}
                style={{
                    position: "absolute",
                    zIndex: 2,
                    left: 0,
                    bottom: 120,
                }}
                alt="book image"
            />
            <Box>
                <Typography variant="h3">
                    Create an account to check on all your corses
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                    }}
                >
                    <Button sx={styles.phoneBtn} endIcon={<LocalPhoneIcon />}>
                        Phone
                    </Button>
                    <Button sx={styles.googleBtn} startIcon={<GoogleIcon />}>
                        Google
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        margin: "20px 0",
                    }}
                >
                    <Divider
                        sx={{
                            flexGrow: 1,
                            position: "absolute",
                            zIndex: -1,
                            width: "40%",
                        }}
                    />
                    <Typography
                        sx={{
                            backgroundColor: "#fff",
                            width: "30px",
                        }}
                    >
                        OR
                    </Typography>
                </Box>
                <Box sx={{ width: "90%" }}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        value={data.email}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, email: e.target.value })
                            )
                        }
                    />
                </Box>
                <Box sx={{ width: "90%", marginTop: "1em" }}>
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={data.password}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, password: e.target.value })
                            )
                        }
                    />
                </Box>
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
                            if (data.goal) {
                                signUp({ body: data }).then((res) => {
                                    dispatch(setUser(res.data));
                                });
                            }
                        }}
                        variant="contained"
                        sx={styles.btn}
                    >
                        Sign up
                    </Button>
                </Box>
                <Typography
                    paragraph
                    sx={{ fontSize: "0.8rem", color: "#257DBC", marginTop: 3 }}
                >
                    By clicking Sign up, I agree to the Terms and Privacy Policy
                </Typography>
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

export default Step5;
