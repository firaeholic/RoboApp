import { robots } from "./robots"

const initialState = {
    robots: robots
}

function robotsReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ROBOT':
            return {...state, robots: [...state.robots, action.data]}
        default:
            return state
    }
}


export default robotsReducer

