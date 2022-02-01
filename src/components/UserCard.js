import React from "react";
import {useDispatch} from 'react-redux';
import {fetchUserData  } from "../features/user/userSlice";
import { resetUpdates } from "../features/udates/updatesSlice";

function UserCard({login, avatar_url,type,html_url,url}){
  const dispath = useDispatch();

  const handleClick = ()=>{
    dispath(resetUpdates());
    dispath(fetchUserData(url))
  }

  return(
    <article className="mycard user-card" data-id={login} onClick={handleClick}>
      <img src={avatar_url} alt="avatar" className="user-card__img"/>
        <ul className="user-card__list">
          <li className="user-card__item" key={login}>{login}</li>
          <li className="user-card__item" key={type}>Type: {type}</li>
          <li className="user-card__item" key={html_url}><a href={html_url} target="blank">Profile</a></li>
        </ul>
    </article>
  );
}

export default UserCard;