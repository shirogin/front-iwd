import "./Navbar.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import {
    Beenhere as BeenhereIcon,
    Chat as ChatIcon,
    MoveToInbox as MoveToInboxIcon,
    Settings as SettingsIcon,
} from "@mui/icons-material";
const NavElement = ({ Element, link }) => {
    return (
        <li>
            <Link className="Nav-element" to={link}>
                {Element}
            </Link>
        </li>
    );
};
const Navbar = () => {
    return (
        <div className="Navbar-dashboard">
            <img src={logo} />
            <ul>
                <NavElement
                    Element={<BeenhereIcon color="secondary" />}
                    link="/dashboard/"
                />
                <NavElement
                    Element={<MoveToInboxIcon color="secondary" />}
                    link="/dashboard/bucket"
                />
                <NavElement
                    Element={<ChatIcon color="secondary" />}
                    link="/dashboard/chat"
                />
                <NavElement
                    Element={<SettingsIcon color="secondary" />}
                    link="/dashboard/settings"
                />
            </ul>
        </div>
    );
};
export default Navbar;
