import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";

import WelcomeBar from "../../components/WelcomeBar/WelcomeBar";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div id="Dashboard">
            <Navbar />
            <WelcomeBar />
            <div className="Dashboard-Container">
                <Outlet />
            </div>
        </div>
    );
};
export default Dashboard;
