import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [listUserData,setListUserData] =  useState([{"name":"Alex sander", "old":10,"id":1}])
  const addNewUserHandler = (newUser) =>{
     setListUserData( preUser => {
      return [newUser,...preUser];
     });
  }

  const deleteUserHandler = (id) =>{
    setListUserData( users => {
     return users.filter(u => u.id !== id);
    });
 }
  return (
   <div>
  <AddUser  onAddNewUser={addNewUserHandler}/>
  <UserList deleteUser={deleteUserHandler} users={listUserData} />
   </div>
  );
}

export default App;
