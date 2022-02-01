import React from "react";


function UpdateCard({name,html_url,description,language,updated_at}){
  console.log((new Date(updated_at)).getDate());
  const newDate = new Date(updated_at);
  const date =  newDate.getDate()<10?`0${newDate.getDate()}`:newDate.getDate();
  const months = newDate.getMonth()<10?`0${newDate.getMonth()}`:newDate.getMonth();
  const year = newDate.getFullYear();
  return(
    <article className="mycard update-card">
      <a href={html_url} target="blank">{name}</a>
      <hr/>
      {description && <div style={{marginBottom:'10px'}}>{description}</div>}
      {language && <span><b>language:</b> {language}</span>}
      <span><b>Updated</b>: {`${date}-${months}-${year}`}</span>
    </article>
  )
}

export default UpdateCard;