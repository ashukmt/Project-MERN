import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, addUser } from "../redux/userReducer/action";
import { RESET_USER } from "../redux/userReducer/actionType";

const Login = ({ onClose, onOpen }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const toast = useToast();
 
  const [user, setUser] = useState({
    email: "",
    password: "",
    gauth:false
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = user;

    if (!email.includes('@') || !email.includes('.com') ) {
      toast({
        title: "Enter valid email",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (password === "" || password.length < 10) {
      toast({
        title: "Enter valid password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    dispatch(LoginUser(user));
  };

  useEffect(() => {
    if (status == "200" || status=='201') {
      toast({
        title: "Login successfull",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onClose();
    } else if (status == "409") {
      toast({
        title: "Email Does Not Exist!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else if (status == "410") {
      toast({
        title: "Incorrect Password!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch({ type: RESET_USER, payload: "" });
  }, [status]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = result.user;
    let obj={
      email,
      username:displayName,
      profilePic:photoURL,
      gauth:true
    }
    dispatch(LoginUser(obj))
  };

  return (
    <>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader
          borderBottomWidth="1px"
          className="text-center h-[100px] font-bold"
        >
          <Text className="font-bold text-[25px]">Login</Text>
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px" className="items-center mt-10">
            <Box>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="email"
                id="emailid"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Please enter user email id"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="password"
                id="emailid"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Please enter user password"
              />
            </Box>

            <Button
              className="w-[77%] "
              colorScheme="red"
              size={"lg"}
              onClick={handleSubmit}
            >
              Submit
            </Button>

            <div className="mt-5 flex justify-center gap-2">
              <FcGoogle
                onClick={handleGoogleLogin}
                className="w-24 h-[35px] -ml-12 cursor-pointer"
              />
              <Center height="40px" className="pr-7">
                <Divider orientation="vertical" borderColor={"black"} />
              </Center>
              <Button
                className=""
                variant={"outline"}
                onClick={() => {
                  onClose();
                  onOpen();
                }}
                colorScheme={"blue"}
              >
                Signup{" "}
              </Button>
            </div>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </>
  );
};

export default Login;
