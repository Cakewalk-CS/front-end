import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import axios from 'axios'

class Rooms extends Component {
  constructor(){
    super();
    this.state = {
      rooms: []
    };
  }

  componentDidMount(){
    axios.get('https://text-adv-game.herokuapp.com/api/adv/rooms')
    .then(res => {
      this.setState({ rooms: res.data})
    })
    .catch(error=>{
      console.log(error, "THIS IS AN ERROR")
    });
  }

  render(){
  return (
    <div>
    <h1>ALL ROOMS</h1>
    <div>
      {this.state.rooms.map(currentRoom => (
        <p key={currentRoom.id}>{currentRoom.room_name}</p>
      ))}
      </div>
    </div>
  );
}}

export default Rooms;