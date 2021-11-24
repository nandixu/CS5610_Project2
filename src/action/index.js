export const InitializeNewSeaAI = () => {
    return{
        type: "InitializeNewSeaAI"
    }
}

export const InitializeAIShips = () => {
    return{
        type: "InitializeAIShips"
    }
}

export const InitializeNewSeaUser = () => {
    return{
        type: "InitializeNewSeaUser"
    }
}

export const ShowSea = () => {
    return{
        type: "ShowSea"
    }
}

export const Strike = (x, y) => {
    return{
        type: "Strike",
        x: x,
        y: y
    }
}

export const AIStrike = (x, y) => {
    return{
        type: "AIStrike",
        x: x,
        y: y
    }
}

export const Hit = () => {
    return{
        type: "Hit"
    }
}

export const Increment = () => {
    return{
        type: "Increment"
    }
}

export const setOn = () => {
    return{
        type: "setOn"
    }
}

export const setHide = () => {
    return{
        type: "setHide"
    }
}