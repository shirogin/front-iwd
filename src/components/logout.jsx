import { Navigate } from "react-router-dom";
import { Notify } from "../app/slices/notifications";
import { removeUser } from "../app/slices/user";

export default function Logout({
    user,
    dispatch,
    logout,
}) {
    if (user)
        logout()
            .then((res) => {
                if (res.hasOwnProperty("data")) {
                    Notify(dispatch, {
                        title: "Logged out",
                        description: "You logged out of AGC Website",
                        type: "success",
                    });
                    dispatch(removeUser());
                } else
                    Notify(dispatch, {
                        title: "You are already logged out",
                        description: "You logged out of AGC Website",
                        type: "error",
                    });
            })
            .catch(console.error);
    return <Navigate to="/" />;
}
