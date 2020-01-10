import title from "../SVG/title.svg"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import landingpage from "../SVG/Asset 2.svg"
import styled from "styled-components";

const LandingDiv = styled.div`
background-color: #1c2630;
`

const LandingPage = () => {
    return (
    <LandingDiv>
        <img
        style={{width:"100%"}} 
        src={landingpage} 
        alt="Landing Page" />
    </LandingDiv>
    )
}

export default LandingPage;