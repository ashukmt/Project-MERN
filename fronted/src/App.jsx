import { useEffect } from "react";

import AllRoutes from "./allRoutes";
import Footer from "./components/Footer";
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
      <Footer/>
    </>
  );
}

export default App;
