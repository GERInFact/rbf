import React from "react";
import Card from "./Card";
import { IUser } from "../containers/App";

import "./cardList.css";

const CardList = ({ users }: { users: Array<IUser> }): JSX.Element => {
  return users.length ? (
    <div className="cards">
      {users.map((u: IUser, i: number) => {
        return <Card key={i} id={u.id} name={u.name} email={u.email} />;
      })}
    </div>
  ) : (
      <h2>Nothing found!</h2>
    );
};

export default CardList;
