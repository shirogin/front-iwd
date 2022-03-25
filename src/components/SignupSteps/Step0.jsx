import { Button, Box, Paper } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { next, prev, setData } from "../../app/slices/installation";

function Step0() {
    const dispatch = useAppDispatch();
    return (
        <div>
            Step 0
            <Button onClick={() => dispatch(prev())} color="grey">
                Back
            </Button>
            <Button onClick={() => dispatch(next())}>Next</Button>
        </div>
    );
}

export default Step0;
