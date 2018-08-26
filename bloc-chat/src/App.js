import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SignIn from './components/SignIn';

var config = {
    apiKey: "AIzaSyAAqeA3yLrF4V1GsLSj4lsEaoeuJV5Gkhs",
    authDomain: "blocchat-256b8.firebaseapp.com",
    databaseURL: "https://blocchat-256b8.firebaseio.com",
    projectId: "blocchat-256b8",
    storageBucket: "blocchat-256b8.appspot.com",
    messagingSenderId: "822376129653"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props){
    super(props);
    this.state = { activeRoom: "", user: null}
    this.activateRoom = this.activateRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

   activateRoom(room){
     this.setState({ activeRoom: room });
   }

   setUser(user) {
    this.setState({ user: user });
   }

render() {
    const showMessage = this.state.activeRoom;
    return (
      <div className="row">
        <div className="col-3 room-nav">
          <div className="container">
            <h1>Bloc Chat</h1>
            <h2>{this.state.activeRoom.title || "Select A Room"}</h2>
            <SignIn
              firebase={firebase}
              setUser={this.setUser}
            />
          </div>
          <div className="col-9">
            <RoomList
              firebase={firebase}
              activeRoom={showMessage}
              activateRoom={this.activateRoom.bind(this)}
            />
          </div>
        </div>
        <div className="col-9">
         {showMessage ?
          <MessageList
            firebase={firebase}
            activeRoom={showMessage}
          /> : null
         }
        </div>
      </div>
    );
  }
}

export default App;
