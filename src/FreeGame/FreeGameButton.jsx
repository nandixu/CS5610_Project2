import React, { Component } from 'react';
import "./freeGameStyle.css"

export function FreeGameButton (props) {

    let display = ""
    let gameMode = props.gameMode
    if (gameMode === 'off'){
        display = "freeGameButton"
    }else{
        display = "noDisplay"
    }

    return (
        <div
        onClick = {props.onClick}
        className = {display}
        >
            Start Free Game
        </div>
    )
}