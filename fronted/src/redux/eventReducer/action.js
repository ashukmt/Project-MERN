import axios from "axios";
import { GETEVENT } from "./ActionType";
import { useCallback } from "react";

export const fetchingMyRegisterData = (id) => async(dispatch) =>{

    try {
      const myData = await axios.get(
        `http://localhost:8080/event/registerevents/${id}`
      );
      console.log(myData);
      dispatch({type:GETEVENT,payload:myData.data});
    } catch (err) {
      console.log(err);
    }
  };