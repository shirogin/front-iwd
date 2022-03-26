import { Grid, Button } from "@mui/material";
import "./Courses.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PendingIcon from "@mui/icons-material/Pending";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Elements = ({ done = false, current = false }) => {
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
            Lesson three
        </div>
    );
};
const Courses = () => {
    return (
        <>
            <h1>Complexed Number </h1>
            <div className="row">
                <Grid container item xs={8} className="Video">
                    <iframe
                        className="frame"
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/wxsaiWMzLnU"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsa doloremque aperiam, consequuntur nobis ex
                        repellat porro neque pariatur! Mollitia eius adipisci
                        distinctio. Veniam pariatur non adipisci nihil quibusdam
                        iste repellendus saepe, similique officiis reiciendis
                        possimus consequuntur, esse nisi repellat provident ipsa
                        soluta quasi exercitationem nam quaerat vel voluptatum
                        maxime! Necessitatibus.
                    </p>
                    <div
                        className="row"
                        style={{ width: "100%", marginBottom: "5em" }}
                    >
                        <Button
                            size="large"
                            variant="contained"
                            color="grey"
                            style={{ marginRight: "auto" }}
                        >
                            Go back
                        </Button>
                        <Button
                            size="large"
                            variant="contained"
                            color="primary"
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
                        <h2>28 Lessons (2 hours)</h2>
                        <Elements done />
                        <Elements current />
                        <Elements />
                        <Elements />
                        <Elements />
                        <Elements />
                    </div>
                </Grid>
            </div>
        </>
    );
};
export default Courses;
