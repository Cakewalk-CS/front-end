import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import axios from 'axios'
import Styled from "styled-components";

class Rooms extends Component {
  constructor(){
    super();
    this.state = {
      rooms: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:3000/api/adv/rooms')
    .then(res => {
      this.setState({ rooms: res.data})
    })
    .catch(error=>{
      console.log(error, "THIS IS AN ERROR")
    });
  }
// https://text-adv-game.herokuapp.com/api/adv/rooms
  render(){
  return (
    <div>
    <h1>ALL ROOMS</h1>
    <StyledContainer>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
        <StyledRooms></StyledRooms>
    </StyledContainer>
    <div>
      {this.state.rooms.map(currentRoom => (
        <p key={currentRoom.id}>{currentRoom.room_name}</p>
      ))}
      </div>
    </div>
  );
}}

const StyledContainer = Styled.div`
    display: grid;
    border: 1px solid black;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
`
const StyledRooms = Styled.div`

`

export default Rooms;