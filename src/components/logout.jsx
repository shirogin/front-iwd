import { Navigate } from "react-router-dom";
import { Notify } from "../app/slices/notifications";
import { removeUser } from "../app/slices/user";
import { useLogOutMutation } from "../app/backend";
import { useAppSelector, useAppDispatch } from "../app/hooks";

export default function Logout() {
    const [logout, { isLoading }] = useLogOutMutation(),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();
    if (user && !isLoading)
        logout()
            .then((res) => {
                if (res.hasOwnProperty("data")) {
                    Notify(dispatch, {
                        title: "Logged out",
                        description: "You logged out of the Website",
                        type: "success",
                    });
                    dispatch(removeUser());
                } else
                    Notify(dispatch, {
                        title: "You are already logged out",
                        description: "You logged out of the Website",
                        type: "error",
                    });
            })
            .catch(console.error);
    return <Navigate to="/" />;
}
