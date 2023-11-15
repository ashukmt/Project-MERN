import { ERROR, GET_REWARDS, LOAD,GET_FAQS, ADD_ADDRESS_REQUEST } from "./actiontype"


const iniState = {
  Rewards: [],
  FAQs:[],
  Address:{},
  isLoading: false,
  isError: false
}

export const rewardReducer = (state = iniState, {
  type,
  payload
}) => {
  switch (type) {
      case GET_REWARDS: return {...state,isLoading:false,Rewards:payload}
  case GET_FAQS: return {...state,isLoading:false,FAQs:payload}
  case ADD_ADDRESS_REQUEST: return {...state,isLoading:false,Address:payload}
      default:
          return state
  }
}

