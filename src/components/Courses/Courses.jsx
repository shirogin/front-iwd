import { Grid, Button } from "@mui/material";
import "./Courses.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingIcon from "@mui/icons-material/Pending";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setProgress } from "../../app/slices/dashboard";
import { setUser } from "../../app/slices/user";
import { useState } from "react";
const Multi = ({ question, choices = [], correctAnswer = 0, setskipable }) => {
    const [choice, setChoice] = useState(null);
    return (
        <>
            <h3>{question}</h3>
            {choices.map((el, i) => (
                <Button
                    key={"but" + i}
                    variant="contained"
                    color={
                        choice === i
                            ? choice === correctAnswer
                                ? "primary"
                                : "warning"
                            : "grey"
                    }
                    size="large"
                    onClick={() =>
                        setChoice(() => {
                            setskipable((el) => true);
                            return i;
                        })
                    }
                    className="Multi"
                >
                    {el}
                </Button>
            ))}
        </>
    );
};
const Video = ({ videoLink, description }) => {
    return (
        <>
            <iframe
                className="frame"
                width="100%"
                height="400"
                src={videoLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <p>{description}</p>
        </>
    );
};
const Elements = ({ title, done = false, current = false }) => {
    return (
        <div
            className={
                "element " +
                (done ? "doneElement " : "") +
                (current ? "currentElement " : "")
            }
        >
            {done ? (
                <CheckCircleOutlineIcon />
            ) : current ? (
                <PendingIcon />
            ) : (
                <MoreHorizIcon />
            )}
            {title}
        </div>
    );
};
const Courses = ({ elements }) => {
    const dashboard = useAppSelector((state) => state.dashboard),
        user = useAppSelector((state) => state.user),
        dispatch = useAppDispatch();
    const element = elements.find(
        (el) => user.history[user.studyLevel].indexOf(el.id) < 0
    );
    console.log(element);
    const [skipable, setskipable] = useState(["video"].includes(element.type));
    var lastDone = -1;
    return (
        <>
            <div className="row">
                <Grid
                    container
                    item
                    xs={8}
                    className="Video"
                    direction="column"
                >
                    <h1>{element.title} </h1>
                    {(() => {
                        switch (element.type) {
                            case "video":
                                return (
                                    <Video
                                        videoLink={element.video}
                                        description={element.description}
                                    />
                                );
                            case "multiple choices":
                                return (
                                    <Multi
                                        setskipable={setskipable}
                                        question={element.question}
                                        choices={element.answers}
                                        correctAnswer={element.correct}
                                    />
                                );
                        }
                    })()}
                    <div
                        className="row"
                        style={{ width: "100%", marginBottom: "5em" }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="grey"
                            style={{ marginRight: "auto" }}
                            onClick={() => {
                                dispatch(
                                    setProgress({
                                        ...dashboard.progress,
                                        module: null,
                                    })
                                );
                            }}
                        >
                            Go back
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            color="secondary"
                            disabled={!skipable}
                            onClick={() => {
                                console.log(element, elements);
                                var history = JSON.parse(
                                        JSON.stringify(user.history)
                                    ),
                                    elementS =
                                        elements[
                                            elements.findIndex(
                                                (el) => element.id == el.id
                                            ) + 1
                                        ];

                                history[user.studyLevel].push(element.id);
                                dispatch(
                                    setProgress({
                                        ...dashboard.progress,
                                        module: elementS
                                            ? dashboard.progress.module
                                            : null,
                                    })
                                );
                                dispatch(
                                    setUser({
                                        ...user,
                                        history,
                                    })
                                );
                            }}
                        >
                            Understood
                        </Button>
                    </div>
                </Grid>
                <Grid container item xs={4} className="progressList ">
                    <div className="progressBar">
                        <h2>Your progress</h2>
                        <div className="SLoader">
                            <div
                                className="bar"
                                style={{ width: 50 + "%" }}
                            ></div>
                        </div>
                    </div>
                    <div className="progressBar">
                        <h2>{elements.length} Lessons</h2>
                        {elements.map((el, i) => {
                            var done =
                                user.history[user.studyLevel].indexOf(el.id) >=
                                0;
                            if (done) lastDone = i;
                            return (
                                <Elements
                                    key={"El" + i}
                                    done={done}
                                    current={!done && lastDone == i - 1}
                                    title={el.title}
                                />
                            );
                        })}
                    </div>
                </Grid>
            </div>
        </>
    );
};
export default Courses;
