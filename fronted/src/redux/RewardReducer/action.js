import axios from "axios"
import { GET_REWARDS,ERROR,LOAD, GET_FAQS, ADD_ADDRESS_REQUEST, ADD_ADDRESS_SUCCESS, ADD_ADDRESS_ERROR, GETUSER, LOADING, NOT_LOADING } from "./actiontype"

export const getReward = () => async(dispatch)=> {
    dispatch({type:LOADING})
    try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/rewards`)
        dispatch({type:GET_REWARDS,payload:res.data})
    }catch(error){
        console.log(error)
        dispatch({type:ERROR})
    }
    dispatch({type:NOT_LOADING})
}

export const getFaq = () => async(dispatch)=> {
    // dispatch({type:LOADING})
    try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/faqR`)
        dispatch({type:GET_FAQS,payload:res.data})
    }catch(error){
        console.log(error)
        dispatch({type:ERROR})
    }
    // dispatch({type:NOT_LOADING})
}

export const PostData=(payload)=>async(dispatch)=>{
    try {
      console.log(payload)
        dispatch({type:ADD_ADDRESS_REQUEST,payload:payload})
    
    } catch (error) {
        console.log(error)
       dispatch({type:ADD_ADDRESS_ERROR})
    }
  }

  export const getUser = () => async(dispatch)=> {
    try{
        dispatch({type:LOAD})
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user`)
        dispatch({type:GETUSER,payload:res.data})
    }catch(error){
        console.log(error)
        dispatch({type:ERROR})
    }
}