import React, { Component } from 'react';
import battleship from './battleship.jpg'
import './style.css'

export function WelcomePic () {
    return(
        <div>
            <img src={battleship} className="battlePic center" alt="battleship"></img>
            <h1 className="welcome">Welcome to the BattleShip Game</h1>
        </div>
    )
}