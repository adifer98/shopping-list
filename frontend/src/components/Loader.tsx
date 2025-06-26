import {CircularProgress} from "@mui/material";

export default function Loader() {
    return (
        <div className="loader-container">
            <CircularProgress size={65} />
        </div>
    )
}