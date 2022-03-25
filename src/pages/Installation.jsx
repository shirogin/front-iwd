import { useAppSelector, useAppDispatch } from "../app/hooks";
import { next, prev, setData } from "../app/slices/installation";
import Button from "@mui/material/Button";

const Installation = () => {
    const installation = useAppSelector((state) => state.installation),
        dispatch = useAppDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(prev());
                }}
            >
                prev
            </button>
            <div></div>
            <Button variant="text">Text</Button>
            <h1>{installation.step}</h1>
            <button
                onClick={() => {
                    dispatch(next());
                }}
            >
                next
            </button>
        </div>
    );
};
export default Installation;
