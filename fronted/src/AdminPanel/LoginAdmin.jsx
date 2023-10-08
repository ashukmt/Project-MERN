import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import image from './Assets/Background.jpg'
import img from './Assets/Forground.png'
import { Input } from "@chakra-ui/react"
import { Image,Badge } from '@chakra-ui/react'
const LoginAdmin = () => {
  var sectionStyle = {
    width: "100%",
    height:"35rem",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${image})`,
    paddingTop:"5rem"
  };

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
     <Input placeholder="Username"  type='email' color="white" fontWeight="600" marginTop="2rem" marginBottom="1.5rem" />
    <Input placeholder='Password' color="white" fontWeight="600" marginBottom="2rem"/> 
    <Button
    size="md"
    height="1.5rem"
    width="max-content"
    color="white"
    display="block"
    background="transparent"
   
    margin="auto"
    >Submit</Button>
     </form>

    </Box>
    </div>
  )
}


export default LoginAdmin
