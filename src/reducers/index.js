import AIStateReducer from "./AIBoardStatereducer";
import UserStateReducer from "./UserBoardStateReducer";
import testReducer from "./testReducer";
import UserScoreReducer from "./UserScore";
import FreeGameModeReducer from "./FreeGameModeReducer";

import { combineReducers } from 'redux';


const allReducers = combineReducers({
    AIstate: AIStateReducer,
    Userstate: UserStateReducer,
    UserScore: UserScoreReducer,

    freeGameMode: FreeGameModeReducer,

    test: testReducer
})

export default allReducers;