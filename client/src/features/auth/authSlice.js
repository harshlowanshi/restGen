import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./authService";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:{},
        isLoading:false,
        isSuccess:false,
        isError:false,
        message:"",
    },
    reducers:{},
    extraReducers:(builder)=>{}
})

export default authSlice.reducer


export  const registerUser=createAsyncThunk("AUTH/USER/REGITER",async(formData,thunkAPI)=>{
try {
    return await service.register(formData)
} catch (error) {
console.log(error)
}
})