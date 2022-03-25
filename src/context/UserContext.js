import { createContext, useState } from "react";
import axios from "axios";

const initial_state = JSON.parse(localStorage.getItem("User") || null);
let Context = createContext();

function ContextComponent({ children, ...value }) {
    const [user, setUser] = useState(initial_state);

    const signIn = async (body) => {
        try {
            let res = await axios.post("http://localhost:3001/signin", body);
            console.log(res);
            // localStorage.setItem("User", JSON.stringify(name));
            // setUser(name || null)
        } catch (err) {
            console.log(err);
        }
    };

    const signUp = async (body) => {
        try {
            console.log(body);
            let res = await axios.post("http://localhost:3001/signup", body);
            console.log(res);
            // localStorage.setItem("User", JSON.stringify(name));
            // setUser(name || null)
        } catch (err) {
            console.log(err.response);
        }
    };

    const signOut = async () => {
        try {
            let res = await axios.post("http://localhost:3001/logout");
            localStorage.removeItem("User");
            setUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Context.Provider value={{ signIn, signUp, signOut }}>
            {children}
        </Context.Provider>
    );
}

export { Context };
export default ContextComponent;
