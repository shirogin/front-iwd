import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useLogOutMutation } from "./app/backend";

import Logout from "./components/logout";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { Suspense, lazy, useEffect } from "react";

const Home = lazy(() => import("./pages/Home")),
    Installation = lazy(() => import("./pages/Installation")),
    Dashboard = lazy(() => import("./pages/Dashboard/Dashboard")),
    Progress = lazy(() => import("./components/Progress/Progress"));
function Loader() {
    return <div>dee</div>;
}

function Router() {
    const [logout] = useLogOutMutation(),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();
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
                    <Route path="installation" element={<Installation />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="progress" element={<Progress />} />
                        <Route path="search" element={<Progress />} />
                        <Route path="bucket" element={<Progress />} />
                        <Route path="settings" element={<Progress />} />
                    </Route>
                    <Route
                        path="logout"
                        element={
                            <Logout
                                user={user}
                                dispatch={dispatch}
                                logout={logout}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
