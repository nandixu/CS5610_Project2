import React, { Component, Fragment, useState, useEffect } from 'react';
import './freeGameStyle.css'
import { Square } from './Square';
import { useSelector, useDispatch } from 'react-redux'
import { AIStrike } from '../action';
const width = 10

export function UserBoard(props) {
    const UserBoardCompo = []

    const Userstate = useSelector(state => state.Userstate)

    const [AIattackCount, setAIattackCount] = useState(0)


    //Insert Into UserBoardCompo
    for (let i=0; i<width; i++) {
        let row = Userstate[i]
        for (let j=0; j<width; j++) {
            UserBoardCompo.push(
                <Square
                    key = {[i ,j]}
                    localState = {Userstate[i][j]}
                    Userstate = {Userstate}
                    isUserBoard = {true}
                    x = {i}
                    y = {j}
                >
                </Square>
            )
        }
    }


    return (
        <div className="BoardIndicator">
            <div>This is your Board</div>
            <div className="userBoard">
            {UserBoardCompo}
            </div>
        </div>
    )
}
