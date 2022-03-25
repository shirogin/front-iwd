
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { next,prev } from "../app/slices/installation";

const Dashboard = () => {
    const installation = useAppSelector((state) => state.installation) ,
        dispatch = useAppDispatch()
    return <div>
        <h1>{installation.step}</h1>
        <button onClick={()=>{dispatch(next())}}>next</button>
    </div>;
};
export default Dashboard;
