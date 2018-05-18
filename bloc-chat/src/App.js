import React, { Component } from 'react';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

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
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <div className="room-nav">
            <div className="col-12">
              <h1>Bloc Chat</h1>
            </div>
            <div className="col-12">
              <RoomList firebase={firebase}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
