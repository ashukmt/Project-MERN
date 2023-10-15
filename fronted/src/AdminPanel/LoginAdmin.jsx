import React from 'react'
import { Box, Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,useDisclosure } from '@chakra-ui/react'
import image from './Assets/Background.jpg'
import img from './Assets/Forground.png'
import { Input } from "@chakra-ui/react"
import { Image,Badge } from '@chakra-ui/react'
import { useState } from 'react'
import Cources from './pages/Cources'
const REACT_APP_BASEURL=process.env.REACT_APP_BASEURL;
const LoginAdmin = () => {
const [loginData,setLoginData]=useState({});
const [error,setError]=useState(false);
const { isOpen, onOpen, onClose } = useDisclosure()
  var sectionStyle = {
    width: "100%",
    height:"35rem",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${image})`,
    paddingTop:"5rem"
  };

 async function handleSubmit() {
  try {
    onOpen();
      console.log(REACT_APP_BASEURL)
    setError(false);
  } catch (error) {
    
    setError(true);
  }
  }

  function handleLogin(e) {
    setError(false);
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }

  return (
    <div style={ sectionStyle }>

   
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' height="20rem" margin="auto" padding="1.5rem" backgroundImage={`url(${img})`}
    backgroundPosition= 'center'
    backgroundSize= 'cover'
    backgroundRepeat= 'no-repeat'
    boxShadow ="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    borderColor="transparent"
    >
       <h1 style={{textAlign:"center",fontSize:"1.2rem" ,color:"aliceblue"}}>Admin Login</h1>
     <form action="" style={{margin:"auto"}}>
     <Input name='userName' onChange={handleLogin} placeholder="Username"  type='email' color="white" fontWeight="600" marginTop="2rem" marginBottom="1.5rem" />
    <Input name='password' onChange={handleLogin} placeholder='Password' color="white" fontWeight="600" marginBottom="2rem"/> 
    <Button
    size="md"
    height="1.5rem"
    width="max-content"
    color="white"
    display="block"
    background="transparent"
   
    margin="auto"
    onClick={handleSubmit}
    >Submit</Button>
     </form>
    </Box>
    {<ReturnFocus isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>}
    </div>
  )
}

function ReturnFocus({ isOpen, onOpen, onClose }) {
  
  const finalRef = React.useRef(null)

  return (
    <>
      

      
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center">
           Wrong credentials are entered or error occured <br/>
           please try again !
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Cources/>
    </>
  )
}

export default LoginAdmin
