import logo from "../images/logo.svg";
import { Menu, Button, Typography, Box, MenuItem, Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { chooseLanguage } from "../app/slices/language";
import mainImage from "../images/main.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Home = () => {
    const lang = useAppSelector((state) => state.language),
        dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className="Home">
            <nav>
                <img src={logo} />
                <Button
                    id="lang-button"
                    aria-controls={open ? "lang-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    variant="contained"
                >
                    {lang}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => {
                        setAnchorEl(null);
                    }}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            setAnchorEl(null);
                            dispatch(chooseLanguage("Arabic"));
                        }}
                    >
                        Arabic
                    </MenuItem>
                </Menu>
            </nav>

            <Grid container spacing={2} className="Main">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            fontSize: {
                                xs: "0.7rem",
                                sm: "1rem",
                            },
                        }}
                    >
                        <h1>
                            Study. . .A<span>9</span>ra
                        </h1>
                    </Box>
                    <Box
                        sx={{
                            fontSize: {
                                xs: "0.7rem",
                                sm: "1rem",
                            },
                            width: {
                                xs: "100%",
                            },
                        }}
                    >
                        <h2>engage me and i shall learn</h2>
                        <p>
                            A9RA is a free platform that aim to help in the
                            improvement of the Algerian education by providing
                            accessible , interactable and smart courses with
                            progress tracking, and programs discussions.
                        </p>
                    </Box>
                    <Grid
                        container
                        item
                        xs={12}
                        sx={{
                            marginTop: "6em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            component={Link}
                            to="/installation"
                            variant="contained"
                            size="large"
                            className="main-button"
                        >
                            Get started
                        </Button>
                        <Button
                            component={Link}
                            to="/signin"
                            variant="outlined"
                            size="large"
                            color="secondary"
                            className="main-button"
                        >
                            Already have an account
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    container
                    item
                    xs={6}
                    direction="row"
                    justifyContent="center"
                    sx={{ display: { xs: "none", sm: "inherit" } }}
                >
                    <img src={mainImage} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Home;
