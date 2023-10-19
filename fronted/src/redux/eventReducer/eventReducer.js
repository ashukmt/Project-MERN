import { GETEVENT } from "./ActionType" 

const iniState = {
    eventData: []
}

export const eventReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        
        case GETEVENT: return {...state,eventData:payload}
        default:
            return state
    }
}
