import React from 'react'
import { Box, Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,useDisclosure } from '@chakra-ui/react'

import { Input,Card,Stack,Heading,Text,CardBody,Divider,CardFooter,ButtonGroup } from "@chakra-ui/react"
import { Image,Badge } from '@chakra-ui/react'

const EventCard = ({e}) => {
  return (
    <div>
       <Card maxW='sm' marginBottom='2rem' marginTop='2rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'> 
  <CardBody>
    <h1 style={{textAlign:'center', marginTop:'1rem' , marginBottom:'1rem'}}><b>Banner</b></h1>
    <Image
      src={e.img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      marginBottom='1.5rem'
    />
    <h1 style={{textAlign:'center', marginTop:'1rem' , marginBottom:'1rem'}}><b>Instructor Image</b></h1>
    <Image 
    src={e.instructor_img}
    alt={e.instructor_img} 
    borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{e.title}</Heading>
      <Text>
       <b>position : </b> {e.position}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       <b>Duration : </b>{e.duration} 
      </Text>
      <Text>
        <b>people: </b>{e.people}
      </Text>
      <Text>
        <b>start_time : </b>{e.start_time}
      </Text>
      <Text>
        <b>end_time : </b>{e.end_time}
      </Text>
      <Text>
        <b>date : </b>{e.date}
      </Text>
      <Text>
        <b>month : </b>{e.month}
      </Text>
      <Text>
        <b>videoLink : </b> <a href={e.video} target='blank'>Click</a>
      </Text>
      <Text>
        <b>speaker : </b>{e.speaker}
      </Text>
      <Text>
        <b>instructor_desc : </b>{e.instructor_desc}
      </Text>
      
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
       Edit
      </Button>
      <Button variant='solid' colorScheme='blue'>
       Remove
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default EventCard
