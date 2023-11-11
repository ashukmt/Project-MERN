import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from "./FireBase";
import { LoginUser, addUser } from "../redux/userReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { RESET_USER } from "../redux/userReducer/actionType";

const Signup = ({ onClose, onOpen }) => {

  const dispatch = useDispatch()
  const status=useSelector(state=>state.user.status);
  const toast = useToast()
  console.log(status)

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [googlesignup, setGooglesignup] = useState(false);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // dispatch(setLOGIN(result.user))
    console.log(result.user);
    const { displayName, email, photoURL } = result.user;
    let obj={
      email,
      username:displayName,
      profilePic:photoURL,
      gauth:true
    }
    dispatch(addUser(obj))
    dispatch(LoginUser(obj))
    onClose()  
  };


  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const curr_user = useSelector(state=>state.user.user)
  const handleSubmit = async () => {
    const { username, email, password } = user
    if (username === "" || username.length<7) {
      toast({
        title: 'Enter Full Name',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    if (email === "" || email.length < 12) {
      toast({
        title: 'Enter valid email',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }


    if (!googlesignup && (password === "" || password.length < 10)) {
      toast({
        title: 'Enter valid password',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })

      return;
    }

    dispatch(addUser(user))
   
    
  }

  useEffect(() => {
    console.log(status)
 if(status=="200"){
  toast({
    title: 'Signup successfull',
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
 }
 else if(status=="409"){
  toast({
    title: 'Email Already Exist',
    status: 'error',
    duration: 3000,
    isClosable: true,
  })
 }
 dispatch({type:RESET_USER,payload:""})
  }, [status])


  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" className="text-center h-[100px] font-bold">
          <Text className="font-bold text-[25px]">
            Signup
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px" className="items-center mt-10">
            <Box>
              <FormLabel htmlFor="username">Name:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                id="name"
                name="username"
                value={user.username}
                placeholder="Please enter username"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="email"
                id="emailid"
                name="email"
                value={user.email}
                placeholder="Please enter user email id"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="password"
                id="password"
                name="password"
                value={user.password}
                placeholder="Please enter user password"
                onChange={handleChange}
              />
            </Box>

            <Button className="w-[77%] " colorScheme="red" size={"lg"} onClick={handleSubmit}>Submit</Button>
            <Box position='relative' className="mt-5">
              <Divider w='25vw' borderColor={'black'} />
              <AbsoluteCenter bg='white' px='6'>
                OR
              </AbsoluteCenter>
            </Box>
            <div className="mt-5 flex justify-center gap-2">
              <FcGoogle onClick={handleGoogleLogin} className="w-24 h-[35px] -ml-12 cursor-pointer" />
              <Center height="40px" className="pl-5">
                <Divider orientation="vertical" borderColor={"black"} />
              </Center>
              <Button className="ml-10" variant={"outline"} onClick={() => { onClose(); onOpen(); }} colorScheme={"blue"}>
                Login{" "}
              </Button>
            </div>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default Signup;
