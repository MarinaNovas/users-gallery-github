import React from "react";
import { useSelector } from "react-redux";
import UpdateCard from "./UpdateCard";

function UsersUdates(){
  const updates = useSelector(state=>state.updates);
  return(
    <div className="updates-wrapper">
      {
        updates.length && updates.map(update=>(
          //UpdateCard({name,html_url,description,language,updated_at})
          <UpdateCard
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