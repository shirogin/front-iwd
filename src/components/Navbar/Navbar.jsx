import "./Navbar.css";
import { Link } from "react-router-dom";
import { Beenhere as BeenhereIcon } from "@mui/icons-material";
const Navbar = () => {
    return (
        <ul className="Navbar-dashboard">
            <li>
                <Link to="/dashboard/">
                    <BeenhereIcon />
                </Link>
            </li>
        </ul>
    );
};
export default Navbar;
