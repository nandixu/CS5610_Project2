import React, { Component, useState, useEffect } from 'react';
import { BoardContainer } from './BoardContainer';
import { useSelector, useDispatch } from 'react-redux'
import { Increment, InitializeNewSeaAI, InitializeNewSeaUser, InitializeAIShips, ShowSea } from "../action";
import { ControlPanel } from './ControlPanel';
import "./freeGameStyle.css"

function FreeGameApp() {

  const AIstate = useSelector(state => state.AIstate);
  const UserState = useSelector(state => state.Userstate);
  const UserScore = useSelector(state => state.UserScore);
  const dispatch = useDispatch();

  console.log("Real AI state is " + AIstate)
  console.log("Real User state is " + UserState)

  return (
    <div className={'center'}>
      <BoardContainer></BoardContainer>
      <div className="BoardContainer">
      {/* <ShipHarbor></ShipHarbor> */}
      <ControlPanel></ControlPanel>
      </div>
    </div>
  );
}

export default FreeGameApp;