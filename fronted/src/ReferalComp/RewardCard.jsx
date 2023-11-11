import React, { useState } from 'react';
import { Box, Flex, Heading, Image, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, AlertIcon, Alert, AlertTitle, AlertDescription } from "@chakra-ui/react";
import Leaderboard from './Leaderboard';
import { Navigate, useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { PostData } from '../redux/RewardReducer/action';


function RewardCard({ Coin_Req, Gift_name, Gift_url }) {

  const Navigate = useNavigate();
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhnumber] = useState("")
  const [rcode, setRcode] = useState("")
  const [imgurl, setImgurl] = useState("")
  const [claibtn, setClaimbtn] = useState(3000)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [bagEmpty,setBagEmpty]=useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const today = new Date();
const twoDaysFromNow = new Date(today);
twoDaysFromNow.setDate(today.getDate() + 3);
var DateA = `${twoDaysFromNow.getFullYear()}-${(twoDaysFromNow.getMonth() + 1)
  .toString()
  .padStart(2, '0')}-${twoDaysFromNow.getDate().toString().padStart(2, '0')}`;
console.log(DateA)

  const [addObj,setAddObj]=useState({
    Phnumber:"",
    Email:"",
    Address:"",
    Empty:bagEmpty,
    Imgurl:Gift_url,
    DeliveryDate:DateA
  })
 

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const Dispatch = useDispatch();


  const HandleChange=(e)=>{
    e.preventDefault();
    setAddObj({...addObj,[e.target.name]:e.target.value})
    
  }
  console.log(addObj)


  return (
    <div className='border-solid items-center rounded-xl justify-center' style={{ background: "#f3f2f2", boxshadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>
      <div className='flex justify-center pt-8 px-4'>
        <img src={Gift_url} alt={Gift_name} width={900} />
      </div>
      <div className='flex items-center justify-between mt-1 mx-4'> {/* Align Coin_Req and coin image side by side */}
        <h1 className='text-center font-[700] md:text-[20px] leading-20 text-[16px]'>{Gift_name}</h1>
        <div className='flex items-center py-2'>
          <span className=' md:text-[18px] leading-20 text-[14px]'>{Coin_Req}</span>
          <img
            alt="coins"
            className='pl-[4px]'
            src="https://www.masaischool.com/images/referral/coin.svg"
            loading="lazy"
          />
        </div>
      </div>
      <div className='pl-4 mb-6'>
        <Button className='px-2 py-2 rounded-[4px] text-center  md:text-[14px] font-[500] leading-20 text-[12px] text-[#d28187] hover:bg-red-200' style={{ border: "1px solid black" }}
          onClick={() => {
            setImgurl(Gift_url);
            onOpen();
          }}
          isDisabled={Coin_Req !== claibtn}

        >CLAIM FOR {Coin_Req} COIN</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Claim Your Reward</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Box boxSize='' style={{width:"80%", margin:"auto", marginBottom:"20px"}}>
  <Image src={Gift_url} alt='Dan Abramov' />
</Box>

              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <Input type='number' name='Phnumber' ref={initialRef} placeholder='Mobile Number' onChange={HandleChange} required />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' name='Email' ref={initialRef} placeholder='Email' onChange={HandleChange} required />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input type="text" name='Address' placeholder='Enter Your Address' onChange={HandleChange} required />
              </FormControl>
            </ModalBody>

            <ModalFooter>
          
      <Button
        colorScheme="blue"
        mr={3}
        onClick={() => {
          if (addObj.Phnumber === "" || addObj.Email === "" || addObj.Address === "") {
            // Toggle the alert's visibility
            setShowAlert(true);

            // You can also include additional logic here
            
          }
          else{
            Dispatch(PostData(addObj));
            Navigate("/Profile");
            onClose();
          }
        }}
      >
        Redeem
      </Button>

      {showAlert && (
        <Alert status="success" variant="subtle" onClose={() => setShowAlert(false)}>
        <AlertIcon />
   All input filed required
        </Alert>
      )}
  
            </ModalFooter>
          </ModalContent>
        </Modal>


        {/* <Drawer
          isOpen={isOpen}
          placement='right'
          size="lg"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader style={{ fontSize: "25px", fontWeight: '600' }}>
              Referral Program
            </DrawerHeader>


            <DrawerBody>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder='Enter full name' name='F_name'
                  onChange={(e) => setFname(e.target.value)}
                />
                <FormLabel>Email address</FormLabel>
                <Input placeholder='Enter email address' name='Email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder='Enter your whatsapp number' name='Ph_number'
                  onChange={(e) => setPhnumber(e.target.value)}

                />
                <FormLabel>Referral Code (Optional)</FormLabel>
                <Input placeholder='Enter referral Code' name='R_Code'
                  onChange={(e) => setRcode(e.target.value)}
                />
                <Button
                  mt={4}
                  colorScheme='teal'
                  w={'full'}
                  type='submit'

                // onClick={handleSubmit}
                >
                  Submit
                </Button>
              </FormControl>
            </DrawerBody>


          </DrawerContent>
        </Drawer> */}


      </div>
    </div>
  )
}

export default RewardCard;
