import React from 'react';
import './App.css';
import './css/reset.css';
import './css/style.css';
import UsersList from './components/UsersList';
import UserInformation from './components/UserInformation';
import MainHeader from './components/MainHeader';

function App() {
  return (
      <div className="app">
        <MainHeader/>
        <UsersList itemsPerPage = {12}/>
        <UserInformation/>
      </div>
  );
}

export default App;
