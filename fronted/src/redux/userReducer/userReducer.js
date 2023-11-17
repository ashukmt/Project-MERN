import { EDIT_USER, GET_USER, LOGIN_USER, LOGOUT_USER, POST_USER, RESET_USER } from "./actionType"

const initialState = {
    user : {},
    loggedIn: false,
    status:""
}

export const userReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_USER : return {...state, user:payload}
        case EDIT_USER : return {...state, user:payload}
        case POST_USER : return {...state,status:payload}
        case LOGIN_USER: return {...state,user:payload.currUser,status:payload.statuscode,loggedIn:true}
        case LOGOUT_USER :return{...state,user:{},loggedIn:false}
        case RESET_USER :return{...state,status:payload}
        default : return state
    }
}

