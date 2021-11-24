import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Strike, Hit, AIStrike } from '../action';
import "./freeGameStyle.css"

export function Square(props) {
    const width = 10
    const AIstate = props.AIstate
    const isUserBoard = props.isUserBoard
    const [localState, setLocalState] = useState(props.localState)
    const freeGameMode = useSelector(state => state.freeGameMode)
    const userState = useSelector(state => state.Userstate)
    const x = props.x
    const y = props.y

    const dispatch = useDispatch()

    function AImove () {
        let AIattackX = Math.floor(Math.random() * width)
        let AIattackY = Math.floor(Math.random() * width)
        dispatch(AIStrike(AIattackX,AIattackY))
        console.log("AI attacked " + AIattackX + " " + AIattackY)
        console.log(userState)
    }

    function clicked () {
        if (isUserBoard === true) {
            return
        }else{
            if (AIstate[x][y] === 'sea') {
                setLocalState(localState => 'miss')
            }else{
                dispatch(Hit())
                setLocalState(localState => 'hit')
            }
            props.onClick()
            if (freeGameMode === 'hide'){
                AImove()
            }
        }
    }


    return (
        <div 
        id = 'square'
        onClick={clicked}
        className = {localState}
        ></div>
    )
}