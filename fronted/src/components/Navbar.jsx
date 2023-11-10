import React from "react";
import "../Style/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as SL } from "react-scroll"
import { Drawer, Modal, useDisclosure } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import { ScrollLink } from "react-scroll";

function Navbar() {
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isSignupOpen, onOpen: onSignupOpen, onClose: onSignupClose } = useDisclosure();
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
  return (
    <div className="main">
      <div>
        <Link to={"/"}>
          <img
            src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
            alt="masai images"
          />
        </Link>
      </div>
      <div className="middle">
        {edit?.map((el) => (
          el.type ? <Link className="link" to={el.path}>
            {el.title}
          </Link>
            : location.pathname === '/' ? <SL
              className='link'
              to={el.path}
              smooth={true}
              duration={500}
              offset={-30}>
              {el.title}
            </SL>
              : <Link className="link" to='/'><SL>{el.title}</SL></Link>
        ))}
      </div>
      <div className="last">
        <button
          onClick={() => {
            Navigate("/Referal");
          }}
        >
          <Link to={"/Refer"}>REFER & EARN</Link>
        </button>

        <button onClick={() => onSignupOpen()}>SIGN UP</button>
      </div>

      <Drawer size={"md"} isOpen={isLoginOpen} onOpen={onLoginOpen} onClose={onLoginClose}>
        <Login onOpen={onSignupOpen} onClose={onLoginClose} />
      </Drawer>
      <Drawer size={"md"} isOpen={isSignupOpen} onOpen={onSignupOpen} onClose={onSignupClose}>
        <Signup onOpen={onLoginOpen} onClose={onSignupClose} />
      </Drawer>
    </div>
  );
}

export default Navbar;
