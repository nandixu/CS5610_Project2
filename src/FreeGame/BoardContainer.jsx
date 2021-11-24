import React, { Component, Fragment } from 'react';
import { AIBoard } from './AIBoard';
import "./freeGameStyle.css"


export function BoardContainer() {
    return (
        <div className="BoardContainer">
            {/* <UserBoard></UserBoard> */}
            <AIBoard></AIBoard>
        </div>
    )
}