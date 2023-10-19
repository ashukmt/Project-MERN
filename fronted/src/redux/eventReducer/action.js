import axios from "axios";
import { GETEVENT } from "./ActionType";

export const fetchingMyRegisterData = (id) => async(dispatch) =>{

    try {
      const myData = await axios.get(
        `http://localhost:8080/event/registerevents/${id}`
      );
      dispatch({type:GETEVENT,payload:myData.data});
    } catch (err) {
      console.log(err);
    }
  };