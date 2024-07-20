import React from 'react';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <CreateUser />
      <hr />
      <UpdateUser />
      <hr />
      <DeleteUser />
      <hr />
      <UserList />
    </div>
  );
}

export default App;
