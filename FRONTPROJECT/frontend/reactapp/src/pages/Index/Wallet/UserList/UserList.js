import React from "react";
import User from "../User/User";
import "./UserList.css";
const UserList = (props) => {
  const { users } = props;
  console.log(users);
  return (
    <div className="user__list">
      <div className="container">
        <div className="row">
          {users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;