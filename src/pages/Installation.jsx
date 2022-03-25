import { useAppSelector, useAppDispatch } from "../app/hooks";
import { next, prev, setData } from "../app/slices/installation";
import MobileStepper from "@mui/material/MobileStepper";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Step0 from "../components/SignupSteps/Step0";
import Step1 from "../components/SignupSteps/Step1";
import Step2 from "../components/SignupSteps/Step2";
import Step3 from "../components/SignupSteps/Step3";
import Step4 from "../components/SignupSteps/Step4";
import Step5 from "../components/SignupSteps/Step5";

const steps = [
    <Step0 />,
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
];

const stepsLabels = ["Name", "Gender", "Level 1", "Level 2", "Age", "Goal"];

const styles = {
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
    },
    progressbar: {
        display: "flex",
        justifyContent: "center",
        width: "80%",
        background: "transparent",
        "& .MuiLinearProgress-root": { backgroundColor: "#E3E3E3" },
        "& .MuiLinearProgress-bar": { backgroundColor: "#56BCA6" },
        marginTop: 3,
    },
};

const Installation = () => {
    const installation = useAppSelector((state) => state.installation);
    const dispatch = useAppDispatch();
    console.log(installation);
    return (
        <div style={styles.root}>
            <MobileStepper
                variant="progress"
                steps={6}
                position="static"
                activeStep={installation.step}
                sx={styles.progressbar}
            />
            {/* <Stepper activeStep={installation.step} alternativeLabel>
                {stepsLabels.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}
            {steps[installation.step]}
        </div>
    );
};
export default Installation;
