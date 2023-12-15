import axios from "axios"
import {
  EDIT_USER,
  GET_USER,
  LOGIN_USER,
  POST_USER,
  RESET_USER
} from "./actionType"

export const getUser = (id) => async (dispatch) => {

  try {
    const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
    dispatch({
      type: GET_USER,
      payload: user.data
    })
  } catch (err) {
    console.log(err)
  }
}

export const addUser = (user) => async (dispatch) => {

  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/addUser`, {
      ...user
    })
    console.log(res.status)
    dispatch({
      type: POST_USER,
      payload:res.status
    })
  } catch (err) {
    console.log(err)
    dispatch({
      type:RESET_USER,
      payload:err.response.status
    })
  }
}


// <------------ Login User ---------------------->
export const LoginUser = (user) => async (dispatch) => {

  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
      ...user
    })
    setCookie(res.data.user._id)
    dispatch({
      type: LOGIN_USER,
      payload: {currUser:res.data.user,statuscode:res.status}
    })
  } catch (err) {
    dispatch({
      type: RESET_USER,
      payload:err.response.status
    })

  }
}


export const setUser = (_id) => async (dispatch) => {

  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${_id}`)
    console.log(res)
    dispatch({
      type: LOGIN_USER,
      payload: {currUser:res.data[0],statuscode:res.status}
    })
  } catch (err) {
    dispatch({
      type: RESET_USER,
      payload:err.response.status
    })

  }
}

export const editUser = (user) => async (dispatch) => {
  try {
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/user/editUser/${user._id}`, {
      ...user
    })
    dispatch({
      type: EDIT_USER,
      payload: user
    })
  } catch (err) {
    console.log(err)
  }
}

export const setCookie = (cvalue) => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "user=" + cvalue + ";" + expires + ";path=/";
}

export const getCookie = () => {
  let name = "user=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}