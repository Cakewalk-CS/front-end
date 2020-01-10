import React, { useState, useEffect } from 'react';
import Styled from "styled-components";


import axiosWithAuth from './axiosWithAuth';

import './room.css'

const Move = (props) => {
    const [direction, setDirection] = useState('')

    // document.addEventListener('keypress', function (event) {
    //     const key = event.key; // "a", "1", "Shift", etc.
    //     console.log(key)
    //     // if (key === 'ArrowUp') {
    //     //     setDirection('n');
    //     // }
    //     // if (key === 'ArrowDown') {
    //     //     setDirection('s');
    //     // }
    //     // if (key === 'ArrowRight') {
    //     //     setDirection('e');
    //     // }
    //     // if (key === 'ArrowLeft') {
    //     //     setDirection('w');
    //     // }
    //     // axiosWithAuth().post("https://text-adv-game.herokuapp.com/api/adv/move", { "direction": direction }).then(res => {
    //     //     console.log(res.data);
    //     //     props.setMoveData(res.data);
    //     // }).catch(err => {
    //     //     console.log(err);
    //     // });

    // });

    const handleSubmit = e => {
        setDirection(e.target.value);
        axiosWithAuth().post("https://text-adv-game.herokuapp.com/api/adv/move", { "direction": e.target.value }).then(res => {
            console.log(res.data);
            props.setMoveData(res.data);
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <div>
            <button value="w" onClick={handleSubmit} className="west"></button>
            <button value="e" onClick={handleSubmit} className="east"></button>
            <button value="n" onClick={handleSubmit} className="north"></button>
            <button value="s" onClick={handleSubmit} className="south"></button>
        </div >
    );
}

export default Move;

