import React from 'react';
import './App.css';
import UsersList from './features/users/UsersList';
import UserInformation from './components/UserInformation';

function App() {
  return (
      <div className="app">
        <header>
          <h1>Users Github</h1>
        </header>
        <UsersList itemsPerPage = {12}/>
        <UserInformation/>
      </div>
  );
}

export default App;
