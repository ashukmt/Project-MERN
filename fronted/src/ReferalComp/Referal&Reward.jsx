import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import RewardCard from './RewardCard'
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

function ReferalReward() {
  const[fname,setFname]=useState("")
  const[email,setEmail]=useState("")
  const[phoneNumber,setPhnumber]=useState("")
  const[rcode,setRcode]=useState("")
    const [refform,setRefform]=useState({
        F_name:fname,
        Email:email,
        Ph_number:phoneNumber,
        R_Code:rcode
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)

    const PhoneNumber="+917379249116"
console.log(fname)
    

    const handleSubmit=async()=>{
        //  try {
            
        //  } catch (error) {
            
        //  }
        const message = "https://masaischool.com";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }


  return (
    <div className='py-16' style={{background:"#f2f6ff"}}>
      <div className="mb-20"> 
    <h1 className="text-center font-[700] md:text-[55px] leading-20 text-[30px]">
    Refer and be Rewarded
      </h1>
      <h1 className="text-center font-[600] md:text-[30px] leading-40 tracking-wider text-[15px]">
      Redeem earned coins for the product of your choice.
      </h1>
    </div>
    <div className='grid grid-cols-1 w-3/4 mx-auto md:grid-cols-3 gap-14'>
    {
        Reward?.map((Rewrd,i)=>{
            return <RewardCard {...Rewrd} key={i}/>
        })
      }
    
    </div>
    <div className='flex justify-center pt-10'>
    <Button
  color="white"
  py={6}
  px={6}
  rounded="8px"
  fontSize="16px"
  fontWeight="500"
  _hover={{ bg: "red.400" }}
  onClick={onOpen}
  bg="#ed0331"
>
  INVITE YOUR FRIENDS
</Button>

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
          <DrawerHeader style={{ fontSize: '2rem', fontWeight: '600' }}>
  Create your account
</DrawerHeader>


          <DrawerBody>
          <FormControl isRequired>
  <FormLabel>Full Name</FormLabel>
  <Input placeholder='Enter full name' name='F_name'
   onChange={(e)=>setFname(e.target.value)}
    />
  <FormLabel>Email address</FormLabel>
  <Input placeholder='Enter email address' name='Email'
   onChange={(e)=>setEmail(e.target.value)}
    />
  <FormLabel>Phone Number</FormLabel>
  <Input placeholder='Enter your whatsapp number' name='Ph_number' 
  onChange={(e)=>setPhnumber(e.target.value)}

  />
  <FormLabel>Referral Code (Optional)</FormLabel>
  <Input placeholder='Enter referral Code' name='R_Code'
   onChange={(e)=>setRcode(e.target.value)}
    />
  <Button
            mt={4}
            colorScheme='teal'
            w={'full'}
            type='submit'
            onClick={handleSubmit}
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

export default ReferalReward
