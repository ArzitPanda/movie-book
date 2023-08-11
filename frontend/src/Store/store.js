import { configureStore } from "@reduxjs/toolkit";
import  AuthSlice  from "./Auth/Slice";



export const store  =configureStore({
    reducer:{
       auth:AuthSlice 
    }
})