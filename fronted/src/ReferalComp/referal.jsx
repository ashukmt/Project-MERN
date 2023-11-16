import React, { useState } from "react";
import Referal1 from "./Referal1";
import ReferalReward from "./Referal&Reward";
import axios from "axios"
import { Link, animateScroll } from "react-scroll";
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
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import Accordionist from "./Accordionist";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

function Referal() {
  const[fname,setFname]=useState("")
  const[email,setEmail]=useState("")
  const[phoneNumber,setPhnumber]=useState("")
  const[rcode,setRcode]=useState("")
  const [showAlert, setShowAlert] = useState(false);
  const [register, setRegister] = useState(false);
  const curr_user = useSelector(state => state.user.user)
   

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast=useToast()


  const PhoneNumber="+917379249116"
  console.log(fname)

 console.log("object")

  const handleSubmit=async()=>{
   var refform={
      F_name:fname,
      Email:email,
      Ph_number:phoneNumber,
      R_Code:rcode
  }

  if (refform.F_name === "" || refform.Email === "" || refform.Ph_number === "") {
    toast({
      title: "All inpute fill are required",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    
  }

else
     try {
        console.log("Hii")
      const PostData = await axios.post("http://localhost:8080/sharelink/sharereferal", { ...refform });
     console.log(PostData.status)
      if (PostData.status == "200") {
        const message = `https://masaiClone.com/${7796}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      } else if (PostData.status == "409") {
        alert("User already registered with this Number");
        console.log("User already registered with this Number")
      } else {
        console.log("Unexpected response:", PostData);
      }
        var refform={
          F_name:"",
          Email:"",
          Ph_number:"",
          R_Code:""
      }
       
     } catch (error) {
        console.log(error)
     }
  
}



  return (
    <>
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, rgb(251, 183, 21) 50%, rgb(244, 244, 244) 60%)",
        }}
      >
        <div className="relative max-w-[1440px] mx-auto px-[16px] lg:pr-0 flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col justify-center h-full absolute left-0 md:left-[auto] py-[24px] max-w-[70%] md:py-[62px] pl-[16px] lg:pl-[80px] md:max-w-[700px] text-left">
            <h1 className="font-[700] text-[48px] leading-[62px] font-poppins">
              Refer once, earn{" "}
              <span style={{ textShadow: "rgb(254, 224, 163) 0px 4px" }}>
                twice!
              </span>
            </h1>
            <p className="font-[400] text-[24px] leading-[34px] font-sans text-[#3B3435] mt-[12px]">
              Exciting rewards await you and your friends.
            </p>
            <Button
              type="button"
              bg="red.500"
              _hover={{ bg: "red.600" }}
              rounded="6px"
              color="white"
              fontWeight="200"
              fontSize="14px"
              lineHeight="24px"
              fontFamily="sans-serif"
              letterSpacing="1.25px"
              textTransform="uppercase"
              padding="10px"
              cursor="pointer"
              maxW="fit-content"
              mt="20px"
              display="inline-block"
              // onClick={onOpen}

              onClick={()=>{
                if (!curr_user.email) {
            toast({
                title: "Please Login First",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            animateScroll.scrollToTop({ smooth: true })
        } 
          else if (curr_user.registered) {
                toast({
                    title: "You have registered already.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                // navigate('/msat/confirm')
                onOpen()
        }
              }}

            >
              refer now
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              size="md"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader style={{ fontSize:"25px", fontWeight: '600' }}>
                  Referring To
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

          {showAlert && (
        <Alert status="success" variant="subtle" onClose={() => setShowAlert(false)}>
        <AlertIcon />
   All input filed required
        </Alert>
      )}



</FormControl>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
          <div className="flex justify-end w-full pointer-events-none">
            <img
              src="https://www.masaischool.com/images/referral/Referral.png"
              alt="Referral"
              className="hidden md:block mx-auto w-full max-h-[500px]"
            />
            <img
              src="https://www.masaischool.com/images/referral/Referral2.png"
              alt="Referral2"
              className="h-full md:hidden max-h-full mx-auto w-full max-h-[500px]"
            />
          </div>
        </div>
      </div>
      <Referal1 />
      <ReferalReward />
      <div className="flex justify-center bg-[#cfeedf]">
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
      <AiOutlineInfoCircle style={{ marginRight: '8px', color: '#00cc6d', fontSize: '30px',fontWeight:'800' }} />

  <h1 className="py-4 text-[25px] font-[700]">
    Want to refer students for our Prepleaf courses?
    <span className="text-[#3470e4]" style={{ marginLeft: '8px' }}>
      Click Here
    </span>
  </h1>
</span>
        
      </div>
      <Accordionist />
    </>
  );
}

export default Referal;
