import { createSlice } from "@reduxjs/toolkit";


const initialUserState = {
    name :null,
    email:null,
    photo:null
}

const userSlice = createSlice({
    name:"user",
    initialState:initialUserState,
    reducers:{
        
        setSignIn(state, action){
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo
        },

        setSignOut(state){

            state.name = null;
            state.email = null;
            state.photo = null
        }
    },

    
    
})

export default userSlice;

export const{setSignIn,setSignOut} = userSlice.actions;

