import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Outlet } from "react-router-dom";
import { setData } from "../../app/slices/dashboard";
import Navbar from "../../components/Navbar/Navbar";
import Progress from "../../components/Progress/Progress";
import WelcomeBar from "../../components/WelcomeBar/WelcomeBar";
import "./Dashboard.css";
import { Container } from "@mui/material";
const Dashboard = () => {
    const dashboard = useAppSelector((state) => state.dashboard),
        dispatch = useAppDispatch();

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
