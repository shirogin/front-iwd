import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setProgress } from "../../app/slices/dashboard";
import Courses from "../Courses/Courses";
import Subjects from "../Subjects/Subjects";
import Data from "../../status/Semester.json";
import "./Progress.css";
const Progress = () => {
    const dashboard = useAppSelector((state) => state.dashboard),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch(),
        modules = Data[user.studyLevel][dashboard.progress.trimester].modules;

    return (
        <div className="Progress">
            {dashboard.progress.module === null ? (
                <>
                    <h2>
                        Your current Trimester{" "}
                        {dashboard.progress.trimester + 1}
                    </h2>
                    <div className="row">
                        {Object.keys(modules).map((el, i) => (
                            <Subjects
                                key={"S" + el}
                                image={modules[el].image}
                                name={modules[el].name}
                                progress={Math.floor(
                                    (modules[el].elements.filter(
                                        (el) =>
                                            user.history[
                                                user.studyLevel
                                            ].indexOf(el.id) >= 0
                                    ).length /
                                        modules[el].elements.length) *
                                        100
                                )}
                                click={() => {
                                    dispatch(
                                        setProgress({
                                            ...dashboard.progress,
                                            module: el,
                                        })
                                    );
                                }}
                            />
                        ))}
                    </div>
                    <h2>Check other Trimesters</h2>
                    <div className="row">
                        {Data[user.studyLevel].map((el, i) => (
                            <Subjects
                                key={"T" + i}
                                image=""
                                name={"Trimester " + el.id}
                                click={() => {
                                    dispatch(
                                        setProgress({
                                            ...dashboard.progress,
                                            trimester: i,
                                            module: null,
                                        })
                                    );
                                }}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <Courses
                    elements={modules[dashboard.progress.module].elements}
                />
            )}
        </div>
    );
};
export default Progress;
