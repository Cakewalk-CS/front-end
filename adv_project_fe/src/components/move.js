import React, { useState, useEffect } from 'react';
import Styled from "styled-components";

import axiosWithAuth from './axiosWithAuth';

import './room.css'

const Move = () => {
    const [direction, setDirection] = useState({ direction: '' })

    const handleChangeN = e => {
        e.preventDefault()
        const n = e.target.value == "n"
        if (e.target.value)
            setDirection({
                ...direction,
                [e.target.name]: e.target.value
            })
    }
    const handleSubmit = e => {
        e.preventDefault()
        setDirection({ ...direction, direction: e.target.value })
        console.log(e.target.value);
        // axiosWithAuth().post("https://text-adv-game.herokuapp.com/api/adv/move", direction);
    }


    return (
        <div>

            <button value="n" onClick={handleSubmit}>N</button>
            <button>E</button>
            <button>S</button>
            <button>W</button>
        </div >


    )
}

export default Move;

{/* <input
                            name='direction'
                            type='text'
                            placeholder='Make your move here'
                            value={direction.direction}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Submit your move</button> */}

