import axios from "axios"
import { GET_REWARDS,ERROR,LOAD, GET_FAQS, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_ERROR } from "./actiontype"

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

export const PostData=(payload)=>async(Dispatch)=>{
    try {
        Dispatch({type:ADD_ADDRESS_REQUEST})
       
        Dispatch({type:ADD_ADDRESS_SUCCESS})
    } catch (error) {
        console.log(error)
       Dispatch({type:ADD_ADDRESS_ERROR})
    }
  }
