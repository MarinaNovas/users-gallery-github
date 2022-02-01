import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push(action.payload);
    },
    setUsers: (state, action) => {
      const usersList = action.payload;
      usersList.forEach(user => state.push(user));
    }
  }
});

export const fetchUsers = url => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      dispatch(setUsers(result));
    } catch (err) {
      alert(err);
    }
  }
}
export const { userAdded, setUsers } = usersSlice.actions;

export default usersSlice.reducer;