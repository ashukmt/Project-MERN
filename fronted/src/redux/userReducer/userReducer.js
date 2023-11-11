import { EDIT_USER, GET_USER, POST_USER } from "./actionType"

const initialState = {
    user : {},
    loggedIn: false
}

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_USER : return {...state, user:payload}
        case EDIT_USER : return {...state, user:payload}
        case POST_USER : return {...state, user: payload}
        default : return state
    }
}

