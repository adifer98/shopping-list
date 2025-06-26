import {useSelector} from "react-redux";
import type {StateType} from "../interfaces/StateType.ts";

export default function TotalItems() {
    const totalItems: number = useSelector((state: StateType) => state.totalItems);
    
    return (
        <div className="total-items">
            <p>סך המוצרים בסל: <span className="total-count">{totalItems}</span></p>
        </div> 
    )
    
}