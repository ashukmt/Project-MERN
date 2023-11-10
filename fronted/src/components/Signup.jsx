import React, { useEffect, useState } from "react";
import axios from "axios";
import {
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
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from "./FireBase";

const Signup = ({ onClose, onOpen }) => {

  const [user, setUser] = useState({});

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    // dispatch(setLOGIN(result.user))
    console.log(result.user)
    // toast({
    //   title: 'Logged in successfully.',
    //   // description: "We've created your account for you.",
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    // })
    onClose()
  }


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
              <FormLabel htmlFor="email">Name:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                id="name"
                placeholder="Please enter username"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                width={"350px"}
                size={"lg"}
                type="email"
                id="emailid"
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
                placeholder="Please enter user password"
              />
            </Box>

            <div className="mt-5 flex justify-center gap-2">
              <FcGoogle onClick={handleGoogleLogin} className="w-24 h-[35px] -ml-12 cursor-pointer" />
              <Center height="40px" className="pr-7">
                <Divider orientation="vertical" borderColor={"black"} />
              </Center>
              <Button className="" variant={"outline"} onClick={()=>{onClose(); onOpen();}} colorScheme={"blue"}>
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
