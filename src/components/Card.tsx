import React from "react";
import "./card.css";
import {IUser} from "../containers/App";

const Card = ({id, name, email}: IUser) : JSX.Element => {
  return (
    <div className="card">
      <div className="card_img-container">
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt="A random robot face"
          className="img-container_img"
        />
      </div>
      <div className="card_info">
        <h3 className="info_name">{name || "Tester"}</h3>
        <p className="info_email">{email || "test@test.com"}</p>
      </div>
    </div>
  );
};

export default Card;
