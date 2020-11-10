// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import Order from './Order'
import users from './data'

class App extends React.Component {
  render() {
    

    return (
      <div className="App">
        { users.map((userInfos, index) => <UserProfile user={userInfos} />)  }
      </div>
    );
  }
}

export default App;