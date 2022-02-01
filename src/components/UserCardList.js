import React from "react";
import UserCard from "./UserCard";
import { nanoid } from '@reduxjs/toolkit'

function UserCardList({currentItems}) {

  return (
    <div className="user-card-list">
      {
       currentItems && currentItems.map(user => (
          <UserCard
            key={nanoid()}
            login={user.login}
            avatar_url={user.avatar_url}
            type={user.type}
            html_url={user.html_url}
            url={user.url}
          />
        ))
      }
    </div>
  );
}

export default UserCardList;