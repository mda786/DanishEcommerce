import {createSlice} from "@reduxjs/toolkit"
import produce from "immer";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    }, 
    reducers:{
        addProduct:(state,action)=>
            produce(state, (draft) => {
                draft.quantity += 1;
                draft.products.push(action.payload);
                draft.total += action.payload.price*action.payload.quantity;
              }),
        
    }
})

export const{addProduct}=cartSlice.actions;
export default cartSlice.reducer;