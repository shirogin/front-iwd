import logo from "../images/logo.svg";
import "./Home.css";

import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <nav>
                <img src={logo} />
                <button onClick={() => navigate("/installation")}>
                    Sign up
                </button>
            </nav>
        </div>
    );
};
export default Home;
