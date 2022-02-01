import { createSlice } from "@reduxjs/toolkit";


export const updatesSlice = createSlice({
  name:'updates',
  initialState:[],
  reducers:{
    setUpdates:(state,action)=>{
      state.push(action.payload);
    },
    resetUpdates:(state)=>{
      state.splice(0,state.length);
    }
  }
});

export const fetchUserUpdates = (url)=>{
  console.log(url);
  return async (dispatch, getState)=>{
    try{
      const response = await fetch(url);
      const result = await response.json();
      result.forEach(item=>dispatch(setUpdates(item)));
    }catch(err){
      alert(err);
    }
  }
}

export const {setUpdates, resetUpdates} = updatesSlice.actions;

export default updatesSlice.reducer;