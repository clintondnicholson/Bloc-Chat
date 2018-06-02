import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  };
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
     const room = snapshot.val();
     room.key = snapshot.key;
     this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  formUpdate(e) {
    this.setState({ newRoomName:e.target.value })
    console.log(this.state.newRoomName)
  }

  createRoom() {
    this.roomsRef.push({ name: this.state.newRoomName});
  }

  render() {
    const roomList = this.state.rooms.map((room) =>
      <li key={room.key}>{room.name}</li>
    )
    return (
      <div>
        <ul className="list-unstyled">{roomList}</ul>
        <section>
          <input type="text" onChange={ (e) => this.formUpdate(e) }></input>
          <button type="submit" onClick={ () =>this.createRoom() }>Submit</button>
        </section>
      </div>
    );
  }

}
export default RoomList;
