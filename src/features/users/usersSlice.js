import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name:'users',
  initialState:[],
  reducers:{
    userAdded:(state,action)=>{
      state.push(action.payload);
    },
    setUsers:(state,action)=>{
      const usersList = action.payload;
      usersList.forEach(user => state.push(user));
    }
  }
});


export const {userAdded, setUsers} = usersSlice.actions;

export default usersSlice.reducer;