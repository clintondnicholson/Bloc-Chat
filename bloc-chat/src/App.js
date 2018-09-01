import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';
import { User } from './components/User.js';

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
  constructor(props) {
    super(props);
    this.state = {activeRoom: "", user: null};
    this.activeRoom = this.activeRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

activeRoom(room) {
  this.setState({ activeRoom: room })
}

setUser(user) {
  this.setState({ user: user });
}

  render() {
    const showMessages = this.state.activeRoom;
    const currentUser = this.state.user === null ? "Guest" : this.state.user.displayName;

    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select A Room"}</h1>
        <User firebase={firebase} setUser={this.setUser} welcome={currentUser} />
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={this.state.user.displayName} />
        : null
        }
      </div>
    );
  }
}

export default App;
