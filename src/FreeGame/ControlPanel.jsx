import React, { Component, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FreeGameButton } from './FreeGameButton';
import { setOn, setHide } from '../action';
import './freeGameStyle.css'

import { NormalGameButton } from './NormalGameButton';

export function ControlPanel() {
    const UserScore = useSelector(state => state.UserScore)
    const freeGameMode = useSelector(state => state.freeGameMode)
    const [normalGameStart, setNormalGameStart] = useState('off')
    const dispatch = useDispatch()

    const controlPanelCompo = [];

    function InitializeFreeGame() {
        alert("Free Game Starts!")
        dispatch(setOn())
        setNormalGameStart('hide')
    }

    function InitializeNormalGame() {
        alert("Normal Game Starts!")
        setNormalGameStart('on')
        dispatch(setHide())
    }

    controlPanelCompo.push(
    <FreeGameButton
        key = {'startFreeGame'}
        onClick = {InitializeFreeGame}
        gameMode = {freeGameMode}
    ></FreeGameButton>
    )

    controlPanelCompo.push(
        <NormalGameButton
        key = {'startNormalGame'}
        onClick = {InitializeNormalGame}
        gameMode = {normalGameStart}
        ></NormalGameButton>
    )

    controlPanelCompo.push(
        <div className='indicatorContainer' key="indicators">
            <div className='hitIndicator'></div>
            <div> Hit</div>
            <div className='missIndicator'></div>
            <div> Miss</div>
        </div>

    )

    return (
        <div className='controlPanel'>
            <div><b>This is your Control Panel</b></div>
            <div>Your Score is: {UserScore}</div>
            <div>Reach 170 scores to win!</div>
            {controlPanelCompo}
        </div>
    )
}
