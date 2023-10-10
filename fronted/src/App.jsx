import { useEffect } from "react";
import AllRoutes from "./allRoutes";
import Navbar from "./components/Navbar";
import { getCourse } from "./redux/courseReducer/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getCourse())
  },[])
  return (
    <>
      <Navbar/>
      <AllRoutes />
    </>
  );
}

export default App;
