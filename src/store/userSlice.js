import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        booking:[],
        loggedIn:false,
        userData:{
            fullName:'User',
            email:'example@@abc.com',
            phone:'705172632'
        }
    },
    reducers:{
        addBooking:(state,action)=>{
            state.booking.push( action.payload)
        },
        removeBooking:(state,action)=>{
            state.booking.splice(action.payload,1)
        },
        isLoggedIn:(state,action)=>{
            state.loggedIn=action.payload
        },
        addUserData:(state,action)=>{
            state.userData = action.payload
        },
        editName:(state,action)=>{
            state.userData=
            {...state.userData,
                fullName:action.payload.fullName,
                
            }
        },
        editEmail:(state,action)=>{
            state.userData={
                ...state.userData,
                email:action.payload.email,
            }
            
        },
        editPhone:(state,action)=>{
            state.userData={
                ...state.userData,
                phone:action.payload.phone
            }

    }
}
})

export default userSlice.reducer
export const {isLoggedIn,editEmail,editName,editPhone,addUserData,addBooking,removeBooking} = userSlice.actions