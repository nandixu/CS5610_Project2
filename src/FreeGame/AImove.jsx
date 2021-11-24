import React, { Component, Fragment, useState } from 'react';
import './freeGameStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { AIStrike } from '../action';
const width = 10



export function AImove () {
    const Userstate = useSelector(state => state.Userstate)
    const dispatch = useDispatch()

    let AIattackX = Math.floor(Math.random() * width)
    let AIattackY = Math.floor(Math.random() * width)

    dispatch(AIStrike(AIattackX, AIattackY))
    
    console.log("AI attacked " + AIattackX + " " + AIattackY)
}