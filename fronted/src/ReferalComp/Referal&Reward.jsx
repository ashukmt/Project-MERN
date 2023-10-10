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
    const [refform,setRefform]=useState({
        F_name:"",
        Email:"",
        Ph_number:"",
        R_Code:""
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const Reward=useSelector(state=>state.Reward.Rewards)
    console.log(Reward)

    const Handlechange=(e)=>{
            e.preventdefault();
            const { value } = e.target;
            setRefform({
              ...refform,
              [e.target.name]: value,
            });
    }
    console.log(refform)

    const handleSubmit=async()=>{
         try {
            
         } catch (error) {
            
         }
    }


  return (
    <div className='py-16' style={{background:"#f2f6ff"}}>
      <div className="mb-20"> 
    <h1 className="text-center font-[700] md:text-[80px] leading-20 text-[30px]">
    Refer and be Rewarded
      </h1>
      <h1 className="text-center font-[600] md:text-[30px] leading-40 tracking-wider text-[15px]">
      Redeem earned coins for the product of your choice.
      </h1>
    </div>
    <div className='grid grid-cols-3 w-3/4 mx-auto  gap-14'>
    {
        Reward?.map((Rewrd,i)=>{
            return <RewardCard {...Rewrd} key={i}/>
        })
      }
    
    </div>
    <div className='flex justify-center pt-10'>
        <Button className='text-[#ffffff] py-6 px-6 rounded-2xl text-[25px] font-[400] hover:bg-red-400' onClick={onOpen} style={{background:"#ed0331"}}>INVITE YOUR FRIENDS</Button>
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
          <DrawerHeader style={{ fontSize: '4rem', fontWeight: '800' }}>
  Create your account
</DrawerHeader>


          <DrawerBody>
          <FormControl isRequired>
  <FormLabel>Full Name</FormLabel>
  <Input placeholder='Enter full name' name='F_name'
   onChange={Handlechange} />
  <FormLabel>Email address</FormLabel>
  <Input placeholder='Enter email address' name='Email'
   onChange={Handlechange}
    />
  <FormLabel>Phone Number</FormLabel>
  <Input placeholder='Enter your whatsapp number' name='Ph_number' 
  onChange={Handlechange} 


  />
  <FormLabel>Referral Code (Optional)</FormLabel>
  <Input placeholder='Enter referral Code' name='R_Code'
   onChange={Handlechange}
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
