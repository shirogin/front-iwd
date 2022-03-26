import React from "react";

import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button, Box, Divider } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GoogleIcon from "@mui/icons-material/Google";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { useSignInMutation } from "../app/backend";
import { prev, setData } from "../app/slices/installation";
import { setUser, removeUser } from "../app/slices/user";

import { Link } from "react-router-dom";

import BookImg from "../images/book.svg";
import RuleImg from "../images/rule.svg";

const styles = {
    root: {
        height: "100vh",
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

function Signin() {
    const [signIn, { isLoading }] = useSignInMutation();
    const { data } = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();

    return (
        <Box sx={styles.root}>
            <img
                src={RuleImg}
                style={{ position: "absolute", zIndex: 2, right: 0, top: 50 }}
                alt="rule image"
            />
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
                    Sign in into your existing account
                </Typography>
                {/* <Typography paragraph>
                    This will help us to know our students more
                </Typography> */}
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
                        onClick={() => {
                            if (data.email && data.password) {
                                signIn({ body: data }).then((res) => {
                                    if (res.data) dispatch(setUser(res.data));
                                    else dispatch(removeUser(res.data));
                                    console.log(res);
                                });
                            }
                        }}
                        disabled={isLoading}
                        variant="contained"
                        sx={styles.btn}
                    >
                        Sign in
                    </Button>
                </Box>
                <Typography paragraph>
                    don't have an account yet?
                    <Link style={styles.link} to="/installation">
                        register
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Signin;
