import React, { useState, useEffect } from 'react';
import Styled from "styled-components";
import Move from './move'
import Init from './Init'
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


    useEffect(() => {
        axiosWithAuth().get("https://text-adv-game.herokuapp.com/api/adv/rooms")
            .then(res => {
                let rooms = res.data.rooms;
                let sorted_rooms = rooms.sort((a, b) => { return a.id - b.id });
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

                console.log('All:', zigZagSort());

                /* 
                1  2  3  4  5  6  7  8  9  10
                20 19 18 17 16 15 14 13 12 11
                21 22 23 24 25 26 27 28 29 30
                40 39 38 37 36 35 34 33 32 31 
                */
                setRooms(zigZagSortedRooms)
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

    return (
        <>
            <h1>ROOMS</h1>
            <div className='container'>
                <div className='game'>
                    {rooms.map(room => {
                        return <div className='box' key={room.id}> {room.id} </div>
                    })}
                </div>
                <div className='right-side'>
                    {/* <div className='description'>Description</div> */}
                    <Init />
                    <div className='input'>

                        <Move />
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