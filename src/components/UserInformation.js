import React from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import { fetchUserUpdates, resetUpdates } from "../features/udates/updatesSlice";
import UserUpdates from "./UserUpdates";


function UserInformation(){
  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!Object.keys(user).length) return;

    dispatch(fetchUserUpdates(`${user.repos_url}?per_page=12`));
  },[user,dispatch]);
  return(
    <section className="user-info">
      <header className="user-info__header">
        <h2>{user.login}</h2>
      </header>
      <div className="user-info__content">
        <div className="background"></div>
        <div className="user-info__person">
          <img src={user.avatar_url} alt="avatar" />
          <h3>{user.name}</h3>
          <h3><a href={user.html_url}>Github</a></h3>
        </div>
        <div className="user-info__updates">
          <h2>
            Recent repository updates
          </h2>
          <UserUpdates/>
        </div>
      </div>
    </section>
  );
}

export default UserInformation;