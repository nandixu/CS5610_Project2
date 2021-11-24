import React, { Component } from 'react';
import "./freeGameStyle.css"

export function NormalGameButton (props) {
    let display = ""
    let gameMode = props.gameMode
    if (gameMode === 'off'){
        display = "normalGameButton"
    }else{
        display = "noDisplay"
    }

    return (
        <div
        onClick = {props.onClick}
        className = {display}
        >
            Start Normal Game
        </div>
    )
}