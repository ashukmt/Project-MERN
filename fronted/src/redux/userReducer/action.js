import axios from "axios"
import {
  EDIT_USER,
  GET_USER,
  POST_USER
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
    dispatch({
      type: POST_USER,
      payload: res.data.user
    })
  } catch (err) {
    console.log(err)
  }
}

export const editUser = (user) => async (dispatch) => {
  try {
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/editUser/${user._id}`, {
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