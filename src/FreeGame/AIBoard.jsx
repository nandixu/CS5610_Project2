import React, { Component, Fragment, useState } from 'react';
import "./freeGameStyle.css";
import { Square } from './Square';
import { useSelector, useDispatch } from 'react-redux'
import { InitializeNewSeaAI, InitializeNewSeaUser, Strike } from '../action';

export function AIBoard() {
    const width = 10;
    const AIBoardCompo = []
    
    //Initialize the AIBoardState
    const AIstate = useSelector(state => state.AIstate)
    const dispatch = useDispatch();

    //Ships infos

    //Generate Ships

    //Insert Into AIBoardCompo
    for (let i=0; i<width; i++) {
        let row = AIstate[i]
        for (let j=0; j<width; j++) {
            AIBoardCompo.push(
                <Square
                    key = {[i ,j]}
                    localState = {AIstate[i][j]}
                    AIstate = {AIstate}
                    onClick = {() => dispatch(Strike(i, j))}
                    isUserBoard = {false}
                    x = {i}
                    y = {j}
                >

                </Square>
            )
        }
    }

    return (
        <div className="BoardIndicator">
            <div> This is AI's board</div>
            <div className="AIBoard">
            {AIBoardCompo}
            </div>
        </div>
    )
}