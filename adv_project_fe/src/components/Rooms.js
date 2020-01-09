import React, { useState, useEffect } from 'react';
import Styled from "styled-components";
import Move from './Move'
import Init from './Init'
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios'

import './room.css'

function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [moveData, setMoveData] = useState({})

    useEffect(() => {
        const requestOne = axiosWithAuth().get("https://text-adv-game.herokuapp.com/api/adv/rooms");
        const requestTwo = axiosWithAuth().get("https://text-adv-game.herokuapp.com/api/adv/init");
        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {

            let sorted_rooms = responses[0].data.rooms.sort((a, b) => { return a.id - b.id });
            let zigZagSortedRooms;

            function zigZagSort() {
                let a = sorted_rooms.slice(0, 10);
                let b = sorted_rooms.slice(10, 20).reverse();
                let c = sorted_rooms.slice(20, 30);
                let d = sorted_rooms.slice(30, 40).reverse();
                let e = sorted_rooms.slice(40, 50);
                let f = sorted_rooms.slice(50, 60).reverse();
                let g = sorted_rooms.slice(60, 70);
                let h = sorted_rooms.slice(70, 80).reverse();
                let i = sorted_rooms.slice(80, 90);
                let j = sorted_rooms.slice(90, 100).reverse();

                zigZagSortedRooms = a.concat(b, c, d, e, f, g, h, i, j);

                return zigZagSortedRooms;
            }

            zigZagSort();

            setRooms(zigZagSortedRooms);

            let currentRoom = responses[1].data;
            setMoveData(currentRoom);
        })).catch(errors => {
            console.log(errors);
        });

    }, []);

    return (
        <>
            <div className='container'>
                <div className='game'>

                    {rooms.map(room => {
                        return <div className={room.id === moveData.room_id ? `box active box-${room.id}` : `box box-${room.id}`} key={room.id}>  </div>
                    })}
                </div>
                <div className='right-side'>
                    <Init moveData={moveData} />
                    <div className='input'>
                        <Move setMoveData={setMoveData} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Rooms;