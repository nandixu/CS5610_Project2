import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./buttonStyle.css"

function ButtonContainer() {
    return (
        <div className = "buttonContainer">

            <Link to='/normalgame'>
            <a className="button3">Play Normal Game</a>
            </Link>

            <Link to ='/freegame'>
            <a className="button3">Play Free Game</a>
            </Link>

            <Link to='/gamerule'>
                <a className="button3">Game Rule</a>
            </Link>
        </div>
    )
}

export default ButtonContainer;