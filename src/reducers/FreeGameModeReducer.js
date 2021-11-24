const FreeGameModeReducer = (state = 'off', action) => {
    switch(action.type){
        case 'setOn':
            state = 'on'
            return state
        case 'setHide':
            state = 'hide'
            return state
        default:
            return state
    }
}

export default FreeGameModeReducer