import type {AppDispatch} from "../store/store.ts";
import {useDispatch} from "react-redux";
import React from "react";
import {useSelector} from "react-redux";
import type {StateType} from "../interfaces/StateType.ts";
import type {Item} from "../interfaces/Item.ts";
import {openAlert} from "../store/ItemsSlice.ts";


export default function FinishButton() {
    
    const items = useSelector((state: StateType) => state.items);
    const dispatch = useDispatch<AppDispatch>();
    
    
    function createBody() : Item[] {
        const body = [];
        for (const category of Object.keys(items)) {
            for (const [name, quantity] of Object.entries(items[category])) {
                body.push({
                    name, 
                    quantity,
                    category
                })
            } 
        }
        return body;
    }
    
    async function finishOrder(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const body = JSON.stringify(createBody());
        try {
            const response = await fetch("http://localhost:5010/api/shoppingitems", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body
            });

            if (!response.ok) {
                throw new Error("Failed to submit shopping list");
            }
            dispatch(openAlert(true));
        } catch (error) {
            dispatch(openAlert(false));
            console.error(error);
        }
    }
    
    return (
        <div className="finish-container">
            <button className="finish-order-btn" onClick={finishOrder}>סיים הזמנה</button>
        </div>
    )
}