import React from "react";
import { useSelector } from "react-redux";
import UpdateCard from "./UpdateCard";
import { nanoid } from '@reduxjs/toolkit'

function UsersUdates(){
  const updates = useSelector(state=>state.updates);
  return(
    <div className="updates-wrapper">
      {
        updates.length && updates.map(update=>(
          <UpdateCard
            key={nanoid()}
            name={update.name}
            html_url={update.html_url}
            description={update.description}
            language={update.language}
            updated_at={update.updated_at}
          />
        ))
      }
    </div>
  );
}

export default UsersUdates;