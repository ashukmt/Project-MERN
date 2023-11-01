import axios from "axios"
import { GET_REWARDS,ERROR,LOAD, GET_FAQS } from "./actionType"

export const getReward = () => async(dispatch)=> {
    try{
        dispatch({type:LOAD})
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/rewards`)
        dispatch({type:GET_REWARDS,payload:res.data})
    }catch(error){
        console.log(error)
        dispatch({type:ERROR})
    }
}

export const getFaq = () => async(dispatch)=> {
    try{
        dispatch({type:LOAD})
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/faqR`)
        dispatch({type:GET_FAQS,payload:res.data})
    }catch(error){
        console.log(error)
        dispatch({type:ERROR})
    }
}

