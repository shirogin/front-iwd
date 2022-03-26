import "./Bucket.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setProgress } from "../../app/slices/dashboard";
import { setUser } from "../../app/slices/user";
import CloseIcon from "@mui/icons-material/Close";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import NotStartedIcon from "@mui/icons-material/NotStarted";
const Downloading = ({ module, progress, paused }) => {
    return (
        <div className="downloadingElem">
            <span>{module}</span>
            <div className="slider">
                <div className="bar" style={{ width: progress + "%" }}></div>
            </div>
            {paused ? <NotStartedIcon /> : <PauseCircleFilledIcon />}
            <StopCircleIcon />
        </div>
    );
};
const Installed = ({ module, progress }) => {
    return (
        <div className="InstalledElem">
            <span>{module}</span>
            <div className="slider">
                <div className="bar" style={{ width: progress + "%" }}></div>
            </div>
        </div>
    );
};
const Bucket = () => {
    const dashboard = useAppSelector((state) => state.dashboard),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();
    return (
        <div className="Bucket">
            <h1>Packs Buckts</h1>
            <p>here you can see all the downloaded and downloading lessons</p>
            <div>
                <h3>Downloading / Installing</h3>
                <p>There is no pack in the waiting list</p>
                <Downloading module={"Math"} progress={50} />
                <Downloading module={"Science"} progress={20} paused />
            </div>
            <div className="installed">
                <h3>Installed</h3>
                <p>There is no pack yet</p>
                <div></div>
            </div>
            <div className="install">
                <h3>Install Offline</h3>
            </div>
        </div>
    );
};
export default Bucket;
