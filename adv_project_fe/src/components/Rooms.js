import React from 'react';
import Styled from "styled-components";

function Rooms() {
  return (
    <>
    <h1>Rooms</h1>
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
    </>
  );
}

const StyledContainer = Styled.div`
    display: grid;
    border: 1px solid black;
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: 50px 50px 50px 50px;
`
const StyledRooms = Styled.div`

`

export default Rooms;