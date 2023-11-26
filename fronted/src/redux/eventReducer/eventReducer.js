import { GETEVENT, LOADING, NOT_LOADING } from "./ActionType" 

const iniState = {
    eventData: [],
    isLoading: false
}

export const eventReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        
        case GETEVENT: return {...state,eventData:payload}
        case LOADING: return {...state,isLoading:true}
        case NOT_LOADING: return {...state,isLoading:false}
        default:
            return state
    }
}
