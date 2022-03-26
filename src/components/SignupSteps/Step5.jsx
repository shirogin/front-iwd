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
        margin: "5px 15px",
    },
    phoneBtn: {
        width: {
            sm: "40%",
            xs: "50%",
        },
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
        width: {
            sm: "40%",
            xs: "50%",
        },
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
                    bottom: 0,
                    "& img": {
                        width: {
                            sm: "200px",
                            xs: "100px",
                        },
                    },
                }}
            >
                <img src={RuleImg} alt="rule image" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 2,
                    left: 0,
                    bottom: 120,
                    display: {
                        sm: "inherit",
                        xs: "none",
                    },
                    "& img": {
                        width: "200px",
                    },
                }}
            >
                <img src={BookImg} alt="book image" />
            </Box>
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "3rem" },
                    }}
                >
                    Create an account to check on all your corses
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        sm: "50%",
                        xs: "80%",
                    },
                    display: "flex",
                    flexDirection: {
                        sm: "column",
                        xs: "column-reverse",
                    },
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
                            width: {
                                sm: "40%",
                                xs: "100%",
                            },
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
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={data.password}
                        sx={{ marginTop: "1em" }}
                        onChange={(e) =>
                            dispatch(
                                setData({ ...data, password: e.target.value })
                            )
                        }
                    />
                </Box>
            </Box>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column-reverse",
                            sm: "row",
                        },
                        justifyContent: "center",
                        alignItems: "center",
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
                    sx={{
                        fontSize: "0.8rem",
                        color: "#257DBC",
                        marginTop: 3,
                        display: { xs: "none", sm: "inherit" },
                    }}
                >
                    By clicking Sign up, I agree to the Terms and Privacy Policy
                </Typography>
                <Typography
                    paragraph
                    sx={{
                        display: { xs: "none", sm: "inherit" },
                    }}
                >
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
