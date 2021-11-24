const UserScoreReducer = (state = 0, action) => { 

    switch(action.type) {
        case 'Hit':
            if (state === 160){
                alert("You win!")
                return state + 10
            }else{
                return state + 10
            }
        default:
            return state
    }
}

export default UserScoreReducer