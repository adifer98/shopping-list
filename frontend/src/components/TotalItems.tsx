import {useSelector} from "react-redux";
import type {StateType} from "../interfaces/StateType.ts";

export default function TotalItems() {
    const totalItems: number = useSelector((state: StateType) => state.totalItems);
    const isLoading = useSelector((state: StateType) => state.loading)
    
    return (
        <div className="total-items">
            <p>סך המוצרים בסל: {!isLoading && <span className="total-count">{totalItems}</span>}</p>
        </div> 
    )
    
}