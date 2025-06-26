import type {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";
import React from "react";
import {fetchItems} from "../store/ItemsSlice.ts";

export default function FinishButton() {
    
    const dispatch = useDispatch<AppDispatch>();
    
    function finishOrder(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        dispatch(fetchItems());
    }
    
    return (
        <div className="finish-container">
            <button className="finish-order-btn" onClick={finishOrder}>סיים הזמנה</button>
        </div>
    )
}