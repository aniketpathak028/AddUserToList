import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge, user_id: Math.random() }]
    });
  }

  return (
    <React.Fragment>
    <div>{`THE TIME IS: ${setInterval(() => new Date()), 1000 }`}</div>
    
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
