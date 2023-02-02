import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: [ {
        Name: "Ashish Yadav",
        Age: 24,
        Course: "MERN",
        Batch: "October",
      }],
      reducers:
      {
        editData : (state,action)=>{
            console.log("Edit: ");
            console.log(action.payload);
            state[action.payload.index] = action.payload.newObj;
            return(state)
        },
        addData : (state,action)=>{
            state.push(action.payload)
            console.log(action.payload)
            return(state)
        }
      }
})

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer