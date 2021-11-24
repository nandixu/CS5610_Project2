import React, { Component } from 'react';
import "./gameRuleStyle.css"

function GameRule() {
    return(
        <div>
            <h1>Game Rule</h1>
            <div className='modeIntroContainer'>
                <div className='modeIntro'>
                    In normal game, you need to place your ships first and generate AI fleet, then click start to begin.
                    You will attack first and AI would attack after your move. The one who first sunk all opponent's
                    ship would win.
                </div>
                <div className='modeIntro'>
                    In free game, you do not need to place your ships, and AI would not attack. You can freely attack
                    AI's ship, and when all ships are sunk, you win.
                </div>
            </div>
        </div>
    )
}

export default GameRule;