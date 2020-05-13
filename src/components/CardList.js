import React from "react";
import Card from "./Card";

import "./cardList.css";

const CardList = (props) => {
  const { users } = props;
  return users.length ? (
    <div className="cards">
      {users.map((u, i) => {
        return <Card key={i} id={u.id} name={u.name} email={u.email} />;
      })}
    </div>
  ) : <h2>Loading...</h2>;
};

export default CardList;
