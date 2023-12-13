import React from "react";
import './notification.scss';
import '../../index.scss';



function Notification({texte, image}){
  return (
   <div className="notificationWrapper">
      <img className="imgNotif" src={image} alt="notif img" />
      <span className="notifText">{texte}</span>
   </div>
  );
}

export default Notification;
