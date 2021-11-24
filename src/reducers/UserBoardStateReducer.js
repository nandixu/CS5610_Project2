import { InitializeNewSeaUser } from "../action";

const UserStateReducer = (state = [], action) => {
    const width = 10

    let InitialState = []
    for (let i = 0; i< width; i++){
        let row = ['', '', '', '', '', '', '', '', '', '']
        for (let j = 0; j < width; j++){
            row[j] = 'sea'
        }
        InitialState.push(row)
    }

    switch(action.type) {
        case 'InitializeNewSeaUser':
            state = InitialState
            console.log("INS is called")
            console.log("user State is " + state)
            return state;
        
        case 'AIStrike':
            state[action.x][action.y] = "hit"
            return state;
        
        case 'ShowSea':
            console.log(state)
            return state;

        default:
            return state;
    }
};

export default UserStateReducer;