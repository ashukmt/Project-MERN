import { GET_USER, POST_USER } from "./actionType"

const initialState = {
    user : {}
}

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_USER : return {...state,user:payload}
        case POST_USER : return {...state}
        default : return state
    }
}

