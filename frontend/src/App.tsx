
import AddItem from "./components/AddItem.tsx";
import {Divider} from "@mui/material";
import TotalItems from "./components/TotalItems.tsx";
import ItemsTable from "./components/ItemsTable.tsx";
import FinishButton from "./components/FinishButton.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {StateType} from "./interfaces/StateType.ts";
import {fetchCategories, fetchItems} from "./store/ItemsSlice.ts";
import {useEffect, useRef} from "react";
import type {AppDispatch} from "./store/store.ts";
import Loader from "./components/Loader.tsx";
import AlertMessage from "./components/AlertMessage.tsx";

function App() {
    
    const isLoading : boolean = useSelector((state : StateType) => state.loading);
    const dispatch = useDispatch<AppDispatch>();

    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const fetchData = async () => {
            await dispatch(fetchCategories());
            await dispatch(fetchItems());
        };

        fetchData();
    }, [dispatch]);;


    return (
        <div className='app-container'>
            <h1>רשימת קניות</h1>
            <TotalItems />
            <AddItem />
            <Divider />
            { isLoading && <Loader /> }
            { !isLoading && (
                <>
                    <ItemsTable/>
                    <Divider />
                    <FinishButton />
                </>
            )}
            
            <AlertMessage />
        </div>
    )
}

export default App
