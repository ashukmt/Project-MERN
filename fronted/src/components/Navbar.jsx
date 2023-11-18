import React, { useEffect, useState } from "react";
import "../Style/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as SL } from "react-scroll";
import { Avatar, Button, Drawer, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, useToast } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { LOADING, LOGOUT_USER, NOT_LOADING } from "../redux/userReducer/actionType";
import { getCookie, setUser } from "../redux/userReducer/action";

function Navbar() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const Navigate = useNavigate();
  const location = useLocation();
  const edit = [
    { path: "/courses", title: "COURSES", type: true },
    { path: "/events", title: "EVENTS", type: true },
    { path: "curriculum", title: "LEARN", type: false },
    { path: "news", title: "MASAI NEWS", type: false },
    { path: "success", title: "SUCCESS STORIES", type: false },
    { path: "hirefromus", title: "HIRE FROM US", type: false },
  ];
  const curr_user = useSelector((state) => state.user.user);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER })
    dispatch({type:LOADING})
    setTimeout(()=>{
      dispatch({type:NOT_LOADING})
      toast({
        status: 'error',
        title: 'Logged Out Successfully',
        duration: 3000
      })
    },3000)
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  const handleAccount = () => {
    toast({
      status: 'info',
      title: 'Feature Coming out soon',
      duration: 3000
    })
  }
  useEffect(()=>{
    let checkId = getCookie()
    if(checkId){
      dispatch(setUser(checkId))
    }
  },[])
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="main">
      <div className="flex">
        <nav className="stnav">
          <div className=" flex  ">
            <button
              data-collapse-toggle="navbar-hamburger"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-hamburger"
              aria-expanded={isNavbarOpen}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`w-full ${isNavbarOpen ? "" : "hidden"}`}
              id="navbar-hamburger"
            >
              <ul
                className="flex flex-col font-medium mt-[4rem]
          ml-[-33px] rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              >
                {edit?.map((el) =>
                  el.type ? (
                    <Link className="link" to={el.path}>
                      {el.title}
                    </Link>
                  ) : location.pathname === "/" ? (
                    <SL
                      className="link"
                      to={el.path}
                      smooth={true}
                      duration={500}
                      offset={-30}
                    >
                      {el.title}
                    </SL>
                  ) : (
                    <Link className="link" to="/">
                      {el.title}
                    </Link>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Link to={"/"}>
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
            alt="masai images"
          />
        </Link>
      </div>

      <div className="middle dt11">
        {edit?.map((el) =>
          el.type ? (
            <Link className="link" to={el.path}>
              {el.title}
            </Link>
          ) : location.pathname === "/" ? (
            <SL
              className="link"
              to={el.path}
              smooth={true}
              duration={500}
              offset={-30}
            >
              {el.title}
            </SL>
          ) : (
            <Link className="link" to="/">
              {el.title}
            </Link>
          )
        )}
      </div>
      <div></div>
      <div className="last">
        <button
          className="refd"
          onClick={() => {
            Navigate("/Referal");
          }}
        >
          <Link className="-pt-2" to={"/Refer"}>
            REFER & EARN
          </Link>
        </button>
        {curr_user?.username ? (
          <Menu placement="bottom">
            <MenuButton>
              <Avatar name={curr_user?.username} size={'sm'} className="-mt-1 p-0" src={curr_user?.profilePic} />
            </MenuButton>
            <MenuList className="text-center items-center" w='20px'>
              <MenuItem className="text-center uppercase items-center flex  ">
                <Button onClick={handleAccount} colorScheme="linkedin" _hover={{bg:'blue.100'}} variant={'outline'} className="m-auto uppercase font-extrabold border-slate-500 border w-full p-2 rounded-md text-center text-red-500 ">
                  Account
                </Button>
              </MenuItem>
              <MenuItem className="text-center uppercase items-center flex  ">
                <Button onClick={handleLogout} colorScheme="red" className="m-auto uppercase font-extrabold border-slate-500 border w-full p-2 rounded-md text-center text-red-500 ">
                  Log out
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button color='red' colorScheme="red" borderColor={'red'} variant={'outline'} className="refd mb-2" onClick={() => onSignupOpen()}>
            SIGN UP
          </Button>
          // <Avatar src={'https://lh3.googleusercontent.com/a/ACg8ocIhO2KX2Q6F0cic83NgAj538ZAUPEMwoOKSANL94sb-RtE=s96-c'} />
        )}
      </div>

      <Drawer
        size={"md"}
        isOpen={isLoginOpen}
        onOpen={onLoginOpen}
        onClose={onLoginClose}
      >
        <Login onOpen={onSignupOpen} onClose={onLoginClose} />
      </Drawer>
      <Drawer
        size={"md"}
        isOpen={isSignupOpen}
        onOpen={onSignupOpen}
        onClose={onSignupClose}
      >
        <Signup onOpen={onLoginOpen} onClose={onSignupClose} />
      </Drawer>
    </div>
  );
}

export default Navbar;
