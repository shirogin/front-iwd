import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setProgress } from "../../app/slices/dashboard";

import Subjects from "../Subjects/Subjects";
import "./Progress.css";
const Progress = () => {
    const subjects = [
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238772/lwd/math_1_vcsids.png",
                name: "Mathematics",
                progress: 0,
            },
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238765/lwd/physics_1_liwtlc.png",
                name: "Physics",
                progress: 20,
            },
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238764/lwd/dictionary_1_jplzzz.png",
                name: "English",
                progress: 40,
            },
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238772/lwd/math_1_vcsids.png",
                name: "History",
                progress: 60,
            },
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238765/lwd/physics_1_liwtlc.png",
                name: "Science",
                progress: 80,
            },
            {
                image: "https://res.cloudinary.com/shirogin/image/upload/v1648238764/lwd/dictionary_1_jplzzz.png",
                name: "Islamic",
                progress: 100,
            },
        ],
        dashboard = useAppSelector((state) => state.dashboard),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();

    return (
        <div className="Progress">
            <h2>Your current Trimester {dashboard.progress.trimester + 1}</h2>
            <div className="row">
                {subjects.map((el, i) => (
                    <Subjects
                        image={el.image}
                        name={el.name}
                        progress={el.progress}
                        click={() => {
                            dispatch(setProgress({ ...dashboard, module: i }));
                        }}
                    />
                ))}
            </div>
            <h2>Check other Trimesters</h2>
            <div className="row">
                {[1, 2, 3].map((el, i) => (
                    <Subjects
                        image=""
                        name={"Trimester " + el}
                        click={() => {
                            dispatch(
                                setProgress({ ...dashboard, trimester: i })
                            );
                        }}
                    />
                ))}
            </div>
        </div>
    );
};
export default Progress;
