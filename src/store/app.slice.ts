import { createSlice } from "@reduxjs/toolkit";


interface IAppState{
    theme: "light" | "dark"
}


const initialState : IAppState = {
theme: "dark"
}

export const appSlice=createSlice({
    name: "app",
    initialState,
    reducers:{
        changeTheme:(state)=>{
            state.theme=state.theme==="dark"?"light":"dark"
        }
    }
});

export const {changeTheme} = appSlice.actions;        