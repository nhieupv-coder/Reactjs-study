import React from "react";
import Card from "../UI/Card";
import userListCss from "./UserList.module.css";


const UserList = (props) => {

  return (
    <Card cssClass={userListCss.users}>
      <ul>
        {props.users.map((user) => (
          <li onClick={() =>props.deleteUser(user.id)}>
            {user.name} - {user.old} (years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
