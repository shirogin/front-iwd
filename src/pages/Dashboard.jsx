import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setData } from "../app/slices/dashboard";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "@mui/material";
const Dashboard = () => {
    const dashboard = useAppSelector((state) => state.dashboard),
        dispatch = useAppDispatch();

    return (
        <Container>
            <Navbar />
            <h1>{}</h1>
        </Container>
    );
};
export default Dashboard;
