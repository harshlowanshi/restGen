import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import service from "./restService";

const restDataSlice = createSlice({
    name:"restData",
    initialState:{
        restDatas:{},
        isLoading:false,
        isSuccess:false,
        isError:false,
    },
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(addRestData.pending,(state,action)=>{
            state.isLoading=true
            state.isSuccess=false
            state.isError=false
        })
        .addCase(addRestData.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.restDatas=action.payload
            state.isError=false
        })
        .addCase(addRestData.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
        })
    }
})

export default restDataSlice.reducer

export const addRestData = createAsyncThunk("ADD/REST/DATA",async(restData)=>{
    try {
        return await service.restAdd(restData)
    } catch (error) {
        console.log(error)
        
    }
})

