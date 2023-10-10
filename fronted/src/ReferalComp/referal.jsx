import React from 'react';
import Referal1 from './Referal1';
import ReferalReward from './Referal&Reward';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Accordionist from './Accordionist';

const Referal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <>
      <div className="w-full" style={{ background: 'linear-gradient(90deg, rgb(251, 183, 21) 50%, rgb(244, 244, 244) 60%)' }}>
        <div className="relative max-w-[1440px] mx-auto px-[16px] lg:pr-0 flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col justify-center h-full absolute left-0 md:left-[auto] py-[24px] max-w-[70%] md:py-[62px] pl-[16px] lg:pl-[80px] md:max-w-[700px] text-left">
            <h1 className="font-[700] text-[48px] leading-[62px] font-poppins">Refer once, earn <span style={{ textShadow: 'rgb(254, 224, 163) 0px 4px' }}>twice!</span></h1>
            <p className="font-[400] text-[24px] leading-[34px] font-sans text-[#3B3435] mt-[12px]">Exciting rewards await you and your friends.</p>
            <Button type="button" className="active:ring-0 bg-red-500 hover:bg-red-600 rounded-[8px] text-white font-[600] text-[18px] leading-[24px] font-sans tracking-[1.25px] uppercase p-[12px] bled:cursor-not-allowed max-w-fit mt-[20px] inline-block" onClick={onOpen}>refer now</Button>
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
                <DrawerHeader className='text-200'>Create your account</DrawerHeader>

                <DrawerBody>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder='Enter full name' />
                    <FormLabel>Email address</FormLabel>
                    <Input placeholder='Enter email address' />
                    <FormLabel>Phone Number</FormLabel>
                    <Input placeholder='Enter your whatsapp number' />
                    <FormLabel>Referral Code (Optional)</FormLabel>
                    <Input placeholder='Enter referral Code' />
                    <Button
                      mt={4}
                      colorScheme='teal'
                      w={'full'}
                      type='submit'
                    >
                      Submit
                    </Button>
                  </FormControl>
                </DrawerBody>

       
              </DrawerContent>
            </Drawer>
          
        </div>
        <div className="flex justify-end w-full pointer-events-none">
          <img src="https://www.masaischool.com/images/referral/Referral.png" alt="Referral" className="hidden md:block mx-auto w-full max-h-[500px]" />
          <img src="https://www.masaischool.com/images/referral/Referral2.png" alt="Referral2" className="h-full md:hidden max-h-full mx-auto w-full max-h-[500px]" />
        </div>
      </div>
    </div >
    <Referal1/>
    <ReferalReward/>
    <Accordionist/>
    </>
  );
}

export default Referal;
