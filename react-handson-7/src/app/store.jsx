import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/Slice";
export default configureStore({
    reducer:{
        dataKey : dataReducer
    }
})
