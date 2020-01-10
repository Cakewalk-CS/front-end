import title from "../SVG/title.svg"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import landingpage from "../SVG/Asset 2.svg"

const LandingPage = () => {
    return (
    <div>
        
       

        <img
        style={{width:"100%"}} 
        src={landingpage} 
        alt="Landing Page" />
    </div>
    )
}

export default LandingPage;