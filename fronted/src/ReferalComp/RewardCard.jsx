import React, { useState } from 'react';
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
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

function RewardCard({ Coin_Req, Gift_name, Gift_url }) {
  const [fname, setFname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhnumber] = useState("")
  const [rcode, setRcode] = useState("")
  const [claibtn, setClaimbtn] = useState(100)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = React.useRef()


  const Navigate = useNavigate();
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
          onClick={onOpen}
          isDisabled={Coin_Req !== claibtn}
        >CLAIM FOR {Coin_Req} COIN</Button>


        <Drawer
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
        </Drawer>


      </div>
    </div>
  )
}

export default RewardCard;
