import { GET_USER, POST_USER } from "./actionType"

const getUser = (id)=>async(dispatch)=>{

    try{
      const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
      dispatch({
        type:GET_USER,payload:user.data
      })
    }
    catch(err){
        console.log(err)
    }
}

const addUser = (user)=>async(dispatch)=>{

    try{
      const add_user = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/addUser`,{...user})
      dispatch({
        type:POST_USER,
      })
    }
    catch(err){
        console.log(err)
    }
}