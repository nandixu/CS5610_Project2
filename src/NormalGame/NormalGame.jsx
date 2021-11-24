import React, { Component } from 'react';
import "./normalGameStyle.css"

function NormalGame() {
    return(
        <div>
            <button id="singlePlayerButton">Generate AI fleet</button>
            <span>Generate AI fleet first</span>

            <div className="container">
                <div className="grid grid-user"></div>
                <div className="grid grid-computer"></div>
            </div>

            <div className="hidden-info">
                <button id="start">Start!</button>
                <button id="rotate">Rotate Your Ships</button>
                <h3 id="whose-go">Your Go</h3>
                <h3 id="info"></h3>
            </div>

            <div className="ship-harbor">
                <div> This is your ship harbor:</div>
                <div className="ship destroyer-container" draggable="true">
                    <div id="destroyer-0"></div>
                    <div id="destroyer-1"></div>
                </div>
                <div className="ship submarine-container" draggable="true">
                    <div id="submarine-0"></div>
                    <div id="submarine-1"></div>
                    <div id="submarine-2"></div>
                </div>
                <div className="ship cruiser-container" draggable="true">
                    <div id="cruiser-0"></div>
                    <div id="cruiser-1"></div>
                    <div id="cruiser-2"></div>
                </div>
                <div className="ship battleship-container" draggable="true">
                    <div id="battleship-0"></div>
                    <div id="battleship-1"></div>
                    <div id="battleship-2"></div>
                    <div id="battleship-3"></div>
                </div>
                <div className="ship carrier-container" draggable="true">
                    <div id="carrier-0"></div>
                    <div id="carrier-1"></div>
                    <div id="carrier-2"></div>
                    <div id="carrier-3"></div>
                    <div id="carrier-4"></div>
                </div>

                <div class="BoardContainer">
                    <div className='hitIndicator'></div>
                    <div> Hit</div>
                    <div className='missIndicator'></div>
                    <div> Miss</div>
                </div>

                <div className="notice">
                    <b>Notice</b>: If the drag and move function is not working, 
                    please go to <b>src/NormalGame</b> folder, <b>click NormalGame.html to begin</b>.
                    The normal game part is written in pure JS to utilize drag and drop
                    function, and it is a static website to demonstrate the ability of 
                    using eventListeners, writting the game logic and frontend with 
                    html, css, and JavaScript.

                </div>
            </div>
        </div>
    )
}

export default NormalGame