import {MenuItem, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {addItem} from "../store/ItemsSlice.ts";
import type {AppDispatch} from "../store/store.ts";
import type {StateType} from "../interfaces/StateType.ts";



export default function AddItem() {
    
    const [item, setItem] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [itemError, setItemError] = useState<boolean>(false);
    const [categoryError, setCategoryError] = useState<boolean>(false);
    
    const categories = useSelector((state: StateType) => state.categories);
    const dispatch = useDispatch<AppDispatch>();
    
    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setItemError(!item);
        setCategoryError(!category);
        if (item && category) {
            dispatch(addItem({item, category}))
        }
    }
    
    return (
        <form className='add-item' onSubmit={submitHandler}>
            
            <TextField
                placeholder="מוצר"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                sx={{
                    minWidth: '200px',
                    direction: 'rtl',
                }}
                error={itemError}
                helperText={itemError ? "יש להזין מוצר" : "הזן מוצר"}
            />
            
            <TextField
                select
                placeholder="קטגוריה"
                sx={{
                    minWidth: '200px',
                    direction: 'rtl',
                }}
                value={category}
                error={categoryError}
                helperText={categoryError ? "יש לבחור קטגוריה" : "בחר קטגוריה"}
            >
                {categories.map((category) => (
                    <MenuItem 
                        key={category}
                        value={category}
                        sx={{ direction: 'rtl', textAlign: 'right' }}
                        onClick={() => setCategory(category)}
                    >
                        {category}
                    </MenuItem>
                ))}
            </TextField>
            
            <button>הוספה</button>
        </form>
    )
}
