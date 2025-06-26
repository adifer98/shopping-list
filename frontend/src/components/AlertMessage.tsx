import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {StateType} from "../interfaces/StateType.ts";
import type {AppDispatch} from "../store/store.ts";
import {closeAlert} from "../store/ItemsSlice.ts";


export default function AlertMessage() {

    const savedSuccessfully = useSelector((state: StateType) => state.savedSuccessfully);
    const dispatch = useDispatch<AppDispatch>();
    
    function handleCloseAlert() {
        dispatch(closeAlert());
    }
    
    if (savedSuccessfully === null) {
        return;
    }

    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleCloseAlert}>
            <Alert
                onClose={handleCloseAlert}
                severity={savedSuccessfully ? "success" : "error"}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {savedSuccessfully ? "ההזמנה נשלחה בהצלחה 🎉" : "שגיאה בשליחה..."}
            </Alert>
        </Snackbar>
    )
}