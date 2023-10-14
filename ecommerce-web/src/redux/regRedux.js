import {createSlice} from "@reduxjs/toolkit"
const regSlice=createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        regStart:(state)=>{
            state.isFetching=true;
        },
        regSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        regFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        }
        
    }
})

export const{regStart,regSuccess,regFailure}=regSlice.actions;
export default regSlice.reducer;