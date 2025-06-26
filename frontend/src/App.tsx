
import AddItem from "./components/AddItem.tsx";
import {CircularProgress, Divider} from "@mui/material";
import TotalItems from "./components/TotalItems.tsx";
import ItemsTable from "./components/ItemsTable.tsx";
import FinishButton from "./components/FinishButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {StateType} from "./interfaces/StateType.ts";
import {fetchCategories, fetchItems} from "./store/ItemsSlice.ts";
import {useEffect} from "react";
import type {AppDispatch} from "./store/store.ts";

function App() {
    
    const isLoading : boolean = useSelector((state : StateType) => state.loading);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchItems());
    }, [dispatch])
    
    return (
        <div className='app-container'>
            <h1>רשימת קניות</h1>
            <TotalItems />
            <AddItem />
            <Divider />
            { isLoading && <CircularProgress size={40} /> }
            { !isLoading && (
                <>
                    <ItemsTable/>
                    <Divider />
                    <FinishButton />
                </>
            )}
        </div>
    )
}

export default App
