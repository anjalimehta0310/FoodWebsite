import { createSlice } from "@reduxjs/toolkit";


const cardSlice=createSlice({
    name:'cart',
    initialState:{
        item:[],

    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.item.pop();
        },
        clearCart:(state)=>{
            state.item=[];
        }
    }
})

export const {addItem,removeItem,clearCart}=cardSlice.actions;
export default cardSlice.reducer ;