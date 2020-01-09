import React, { useState, useEffect } from 'react';
import Styled from "styled-components";
import Move from './move'
import Init from './Init'
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios'

import './room.css'
// define a new console
// var console=(function(oldCons){
//     return {
//         log: function(text){
//             oldCons.log(JSON.stringify(text))
//             // Your code
//         },
//         info: function (text) {
//             oldCons.info(text);
//             // Your code
//         },
//         warn: function (text) {
//             oldCons.warn(text);
//             // Your code
//         },
//         error: function (text) {
//             oldCons.error(text);
//             // Your code
//         }
//     };
// }(window.console));

//Then redefine the old console
// window.console = console;
let areas = ''
function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [finishedGrid, setFinishedGrid] = useState([]);
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
            console.log(errors)
        })

    }, [])
    // grid is  an object of the form grid[y] = 'string that is in the row seperated by spaces for columns'
    var grid = [['.']];
    /*
    . . 5 3 .
    . . 4 2 .
    . . . 1 .
    */
    var rooms_done = [0]
    function exploreRoom(roomid, grid_loc, all_rooms) {
        let room = all_rooms.filter(each => each.id === roomid)[0]
        console.log(grid_loc)
        // console.log(room)
        // south
        if (grid_loc[0] === -1) {
            let new_arr = Array(grid[0].length).fill('.')
            grid.unshift(new_arr)
            grid_loc[0] = 0
        }
        //west
        if (grid_loc[1] === -1) {
            grid.forEach(row => {
                row.unshift('.')
            });
            grid_loc[1] = 0
        }
        //north
        if (grid_loc[0] + 1 > grid.length) {
            let new_arr = Array(grid[0].length).fill('.')
            grid.push(new_arr)
        }
        //east
        if (grid_loc[1] + 1 > grid[0].length) {
            grid.forEach(row => {
                row.push('.')
            });
        }

        let row_num = grid_loc[0]
        let column_num = grid_loc[1]
        grid[row_num][column_num] = room.id
        rooms_done.push(room.id)
        // console.log(rooms_done)
        // console.log(grid)
        // console.log(room)
        if (!rooms_done.includes(room.n_to)) {
            exploreRoom(room.n_to, [grid_loc[0] + 1, grid_loc[1]], all_rooms)
        }
        if (!rooms_done.includes(room.s_to)) {
            exploreRoom(room.s_to, [grid_loc[0] + 1, grid_loc[1]], all_rooms)
        }
        if (!rooms_done.includes(room.e_to)) {
            exploreRoom(room.e_to, [grid_loc[0], grid_loc[1] - 1], all_rooms)
        }
        if (!rooms_done.includes(room.w_to)) {
            exploreRoom(room.w_to, [grid_loc[0], grid_loc[1] + 1], all_rooms)
        }
        return new Promise((resolve, reject) => {
            resolve('Delerious with joy')
        });
    }

    finishedGrid.forEach(row => {
        areas = areas + row.join(' ') + '\n'
    })

    return (
        <>
            <h1>ROOMS</h1>
            <div className='container'>
                <div className='game'>

                    {rooms.map(room => {
                        return <div className={room.id === moveData.room_id ? `box active box-${room.id}` : `box box-${room.id}`} key={room.id}> {room.id} </div>
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

// const StyledContainer = Styled.div`
//     display: grid;
//     border: 1px solid black;
//     grid-template-columns: 50px 50px 50px 50px;
//     grid-template-rows: 50px 50px 50px 50px;
//     grid-template-areas: '. 1';
//     .Outside{
//         background: pink;
//     }
// `
// const StyledRooms = Styled.div`
//     background: black;
// `

export default Rooms;