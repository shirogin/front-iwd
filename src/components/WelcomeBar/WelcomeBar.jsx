import { Container, Menu, Button, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./WelcomeBar.css";
const WelcomeBar = () => {
    const user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div className="welcomeNav">
            <h1>
                Welcome {user != null ?? user.firstName + " " + user.lastName}
            </h1>
            <Button
                id="lang-button"
                aria-controls={open ? "lang-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                color="secondary"
            >
                <AccountCircleIcon primary="dark" />
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
                    }}
                >
                    {user.firstName + " " + user.lastName}
                </MenuItem>

                <MenuItem component={Link} to="/logout">
                    logout
                </MenuItem>
            </Menu>
        </div>
    );
};
export default WelcomeBar;
