import React, { useState } from "react";

import Card from "../UI/Card";
import addUserCss from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterAge, setEnterAge] = useState("");
  // const [isValid,setIsValid] = useState(true);
  const [error,setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enterName.trim().length === 0 ||
      enterAge.trim().length === 0  
    ) {
        setError({
          "title":"Input blank",
          "content":"You can't input blank values"
        });
      return;
    }
    if (enterAge < 1) {
        setError({
          "title":"Input wrong value",
          "content":"You input wrong value please check again !!!"
        });
      return;
    }
    let newUser = {
      name: enterName,
      old: enterAge,
      id: Math.random().toString()
    };
    props.onAddNewUser(newUser);
    resetData();
  };

  const nameChangeHandler = (event) => {
    setEnterName(event.target.value);
  };

  const enterAgeChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const resetData = () => {
    setEnterName("");
    setEnterAge("");
  };

  const onCloseModal = () =>{
    setError(null);
  }

  return (
    <div>
      <Card cssClass={addUserCss.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" onChange={nameChangeHandler} value={enterName} type="text" />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={enterAge} onChange={enterAgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
        {error!==null &&  <ErrorModal onCloseModal={onCloseModal} title={error.title} content={error.content} />}
       
      </Card>
    </div>
  );
};

export default AddUser;
