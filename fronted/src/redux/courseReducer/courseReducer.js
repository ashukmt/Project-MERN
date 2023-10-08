import { ERROR, GET_COURSES, LOAD } from "./actionType"

const iniState = {
    courses: [],
    isLoading: false,
    isError: false
}

export const courseReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        case LOAD: return {...state,isLoading:true}
        case ERROR: return {...state,isError:true}
        case GET_COURSES: return {...state,isLoading:false,courses:payload}
        default:
            return state
    }
}