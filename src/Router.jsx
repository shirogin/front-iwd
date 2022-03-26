import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/logout";
import { useAppSelector } from "./app/hooks";
import { Suspense, lazy, useEffect } from "react";

const Home = lazy(() => import("./pages/Home")),
    Installation = lazy(() => import("./pages/Installation")),
    Signin = lazy(() => import("./pages/Signin")),
    Dashboard = lazy(() => import("./pages/Dashboard/Dashboard")),
    Progress = lazy(() => import("./components/Progress/Progress"));
function Loader() {
    return <div>dee</div>;
}

function Router() {
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        const tag = window.location.href.match(/#\w+/);
        if (tag)
            window.document
                .querySelector(tag[0])
                ?.scrollIntoView({ behavior: "smooth" });
    });
    return (
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={user ? <Navigate to="/dashboard" /> : <Home />}
                    />
                    <Route
                        path="signin"
                        element={
                            user ? <Navigate to="/dashboard" /> : <Signin />
                        }
                    />
                    <Route
                        path="installation"
                        element={
                            user ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Installation />
                            )
                        }
                    />
                    <Route
                        path="dashboard"
                        element={
                            user ? <Dashboard /> : <Navigate to="/signin" />
                        }
                    >
                        <Route path="/dashboard/" element={<Progress />} />
                        <Route path="search" element={<Progress />} />
                        <Route path="bucket" element={<Progress />} />
                        <Route path="settings" element={<Progress />} />
                    </Route>
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
