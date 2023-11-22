import axios from "axios";
import { GETEVENT } from "./ActionType";
import { useCallback } from "react";

export const fetchingMyRegisterData = (id) => async(dispatch) =>{

    try {
      const myData = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/event/registerevents/${id}`
      );
      console.log(myData);
      dispatch({type:GETEVENT,payload:myData.data});
    } catch (err) {
      console.log(err);
    }
  };