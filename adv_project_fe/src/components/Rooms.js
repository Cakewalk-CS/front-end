import React, { useState, useEffect } from 'react';
import Styled from "styled-components";

import axiosWithAuth from './axiosWithAuth';

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
    const [rooms, setRooms] = useState([])
    const [finishedGrid, setFinishedGrid] = useState([])
    const [direction, setDirection] = useState({ direction: '' })
    useEffect(() => {
        axiosWithAuth().get("https://text-adv-game.herokuapp.com/api/adv/rooms")
            .then(res => {
                let rooms = res.data.rooms
                let sorted_rooms = rooms.sort((a, b) => { return a.id - b.id })
                let new_arr = []

                function zigZagSort() {
                    let oneThroughTen = sorted_rooms.slice(0, 10)
                    let elevenThroughTwenty = sorted_rooms.slice(11, 20).reverse();


                    return oneThroughTen;
                }

                console.log('First ten:', zigZagSort());

                /* 
                1  2  3  4  5  6  7  8  9  10
                20 19 18 17 16 15 14 13 12 11
                21 22 23 24 25 26 27 28 29 30
                40 39 38 37 36 35 34 33 32 31 
                */
                setRooms(sorted_rooms)
                // exploreRoom(res.data.rooms[0].id, [0, 0], res.data.rooms).then(res => {
                //     // console.log(grid)
                //     setFinishedGrid(grid)
                // })
            })
            .catch(err => console.log(err));
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
    const handleChange = e => {
        e.preventDefault()
        if (e.target.value)
            setDirection({
                ...direction,
                [e.target.name]: e.target.value
            })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log(direction)
        // axiosWithAuth().post("https://text-adv-game.herokuapp.com/api/adv/move", direction)
    }
    return (
        <>
            <h1>ROOMS</h1>
            <div className='container'>
                <div className='game'>
                    {rooms.map(room => {
                        return <div className='box'> {room.id} </div>
                    })}
                </div>
                <div className='right-side'>
                    <div className='description'>Description</div>
                    <div className='input'>
                        <input
                            name='direction'
                            type='text'
                            placeholder='Make your move here'
                            value={direction.direction}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}>Submit your move</button>
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