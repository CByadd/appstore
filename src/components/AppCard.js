// AppCard.js
import React from "react";
import './styles/AppCard.css';

const AppCard = ({ app, onDownload }) => {
  return (
    <div className="apx" onClick={() => onDownload(app)}>
      <img src={app.icon} alt="icon" onClick={() => onDownload(app)}/>
      <h3 className="tit">{app.name}</h3>
     <div className="text">
     <p>{app.size}</p>
      <p> {app.genre}</p>
    
     </div>
      <button onClick={() => onDownload(app)}>Download</button>
     
    </div>
  );
};

export default AppCard;
