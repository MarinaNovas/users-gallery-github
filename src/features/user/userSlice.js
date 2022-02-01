import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'user',
  initialState:{},
  reducers:{
    setUser:(state,action)=>{
      Object.assign(state,action.payload)
    }
  }
});

export const fetchUserData = user_url =>{
  return async(dispatch,getState)=>{
    try{
      const response = await fetch(user_url);
      const result = await response.json();
      dispatch(setUser(result));
    }catch(err){
      alert(err);
    }
  }
}
export const {setUser} = userSlice.actions;
export default userSlice.reducer;

