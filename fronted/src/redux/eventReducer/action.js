import axios from "axios";
import { GETEVENT, LOADING, NOT_LOADING } from "./ActionType";
import { useCallback } from "react";

export const fetchingMyRegisterData = (id) => async(dispatch) =>{
    dispatch({type:LOADING})
    try {
      const myData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/event/registerevents/${id}`
      );
      dispatch({type:GETEVENT,payload:myData.data});
    } catch (err) {
      console.log(err);
    }
    dispatch({type:NOT_LOADING})
  };