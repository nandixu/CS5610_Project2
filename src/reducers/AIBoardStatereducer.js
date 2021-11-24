import { act } from "react-dom/test-utils";
import { InitializeNewSeaAI } from "../action";

const AIStateReducer = (state = [], action) => {
    const width = 10

    let InitialState = []
    for (let i = 0; i< width; i++){
        let row = ['', '', '', '', '', '', '', '', '', '']
        for (let j = 0; j < width; j++){
            row[j] = 'sea'
        }
        InitialState.push(row)
    }

    //Ship Info
    const shipsArray = [
        {
            name: 'destroyer',
            directions: [
                [0, 1],
                [0, width]
            ],
            length: 2
        },
     
        {
            name: 'submarine',
            directions: [
                [0, 1, 2],
                [0, width, width*2]
            ],
            length: 3
        },
     
        {
             name: 'cruiser',
             directions: [
                 [0, 1, 2],
                 [0, width, width*2]
             ],
             length: 3
         },
     
         {
             name: 'battleship',
             directions: [
                 [0, 1, 2, 3],
                 [0, width, width*2, width*3]
             ],
             length: 4
         },
     
         {
             name: 'carrier',
             directions: [
                 [0, 1, 2, 3, 4],
                 [0, width, width*2, width*3, width*4]
             ],
             length: 5
         }
    ]

    //Generate Ships
    let initialCoordinatesPool = [
        [[1,0], [0,2], [0,5], [6,0], [9,4]],
        [[0,3], [2,2], [0,5], [6,0], [1,4]],
        [[8,8], [2,0], [0,5], [9,0], [5,5]],
        [[8,0], [4,0], [3,5], [9,1], [1,5]],
        [[7,7], [6,0], [3,7], [1,1], [0,4]],
    ]

    function generateShip(ship, initialStartCoordinate) {
        for(let i=0; i<ship.length; i++) {
            let x = initialStartCoordinate[0]
            let y = initialStartCoordinate[1] + i
            state[x][y] = ship.name
        }
    }

    //Strike Management
    // function strikeManagement(x, y){
    //     if (state[x][y] === 'sea'){
    //         state[x][y] = 'miss'
    //     }else{
    //         state[x][y] = 'hit'
    //     }
    // }


    switch(action.type) {
        case 'InitializeNewSeaAI':
            return state = InitialState;
        
        case 'InitializeAIShips':
            let num = Math.floor(Math.random() * initialCoordinatesPool.length)
            let initialStartCoordinate = initialCoordinatesPool[num]
            generateShip(shipsArray[0], initialStartCoordinate[0])
            generateShip(shipsArray[1], initialStartCoordinate[1])
            generateShip(shipsArray[2], initialStartCoordinate[2])
            generateShip(shipsArray[3], initialStartCoordinate[3])
            generateShip(shipsArray[4], initialStartCoordinate[4])
            console.log("AI Ships Initialization completed!")
            return state;
        
        case 'ShowSea':
            console.log(state)
            return state;

        case 'Strike':
            console.log(state[action.x][action.y])
            //state[action.x][action.y] = 'hit'
            console.log('You lauched a Strike!')
            console.log(state[action.x][action.y])
            return state;

        default:
            return state;
    }
};

export default AIStateReducer;