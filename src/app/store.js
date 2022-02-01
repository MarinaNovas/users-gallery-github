import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import userReducer from "../features/user/userSlice";
import updatesReducer from "../features/udates/updatesSlice";


export default configureStore({
  reducer:{
    users: usersReducer,
    user:userReducer,
    updates:updatesReducer
  }
});