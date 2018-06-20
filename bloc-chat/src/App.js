import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList'

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

    this.state = {
     activeRoom: "",
    }
    this.activateRoom = this.activateRoom.bind(this);
  }

   activateRoom(room){
     console.log(room);
     this.setState({ activeRoom: room });
   }

  render() {
    const showMessage = this.state.activeRoom;
    return (
      <div className="row">
        <div className="col-3 room-nav">
          <div className="col-12">
            <h1>Bloc Chat</h1>
          </div>
          <div className="col-12">
            <RoomList
              firebase={firebase}
              activeRoom={this.state.activeRoom}
              activateRoom={this.activateRoom.bind(this)}
            />
          </div>
        </div>
        <div className="col-9">
         {showMessage ?
          <MessageList
            firebase={firebase}
            activeRoom={this.state.activeRoom.key}
          /> : null
         }
        </div>
      </div>
    );
  }
}

export default App;
