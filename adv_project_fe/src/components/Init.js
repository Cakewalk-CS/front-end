import React, { useState, useEffect } from 'react';
import Styled from "styled-components";

import axiosWithAuth from './axiosWithAuth';

import './room.css'

const Init = (props) => {
    console.log('init', props.moveData)
    return (
        <>
            <div className='description'>
                <p>{props.moveData.error_msg}</p>
                <h3>You are at {props.moveData.title}</h3>
                <h3>Description: {props.moveData.description}</h3>

            </div>
        </>
    )
}

export default Init;

