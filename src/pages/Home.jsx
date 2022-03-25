import logo from "../images/logo.svg";
import { Menu, Button, MenuItem, Container, Grid } from "@mui/material";
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
                <img src={logo} />{" "}
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
                        dispatch(chooseLanguage("Arabic"));
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
                    <MenuItem
                        onClick={() => {
                            setAnchorEl(null);
                            dispatch(chooseLanguage("French"));
                        }}
                    >
                        French
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            setAnchorEl(null);
                            dispatch(chooseLanguage("English"));
                        }}
                    >
                        English
                    </MenuItem>
                </Menu>
            </nav>

            <Grid container spacing={2} className="Main">
                <Grid item xs={6}>
                    <h1>
                        Study. . .A<span>9</span>ra
                    </h1>
                    <h2>engage me and i shall learn</h2>
                    <p>
                        3ab9ri replaces lecture videos with hands-on,
                        interactive problem solving. It’s a better (and more
                        fun) way to learn.
                    </p>
                    <Grid container item xs={12} sx={{ marginTop: "6em" }}>
                        <Button
                            component={Link}
                            to="/installed"
                            id="lang-button"
                            variant="contained"
                            size="large"
                            className="main-button"
                        >
                            Get started
                        </Button>
                        <Button
                            component={Link}
                            to="/signin"
                            id="lang-button"
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
                >
                    <img src={mainImage} />
                </Grid>
            </Grid>
        </div>
    );
};
export default Home;
