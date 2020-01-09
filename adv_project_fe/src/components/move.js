import React, { useState, useEffect } from 'react';
import Styled from "styled-components";

import axiosWithAuth from './axiosWithAuth';

import './room.css'

const Move = (props) => {
    const [direction, setDirection] = useState('')

    const handleChangeN = e => {
        e.preventDefault()
        const n = e.target.value == "n"
        console.log(n)
        if (e.target.value)
            setDirection({
                ...direction,
                [e.target.name]: e.target.value
            })
    }

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
            <button value="n" onClick={handleSubmit}>N</button>
            <button value="e" onClick={handleSubmit}>E</button>
            <button value="s" onClick={handleSubmit}>S</button>
            <button value="w" onClick={handleSubmit}>W</button>
        </div >
    );
}

export default Move;

