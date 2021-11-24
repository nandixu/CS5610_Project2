const testReducer = (state = [2, 2], action) => {
    switch(action.type) {
        case 'Increment':
            state[action.location] += 1
            return (
                state
            );
        case 'Decrement':
            return state - 1
        default:
            return state;
    }
};

export default testReducer;