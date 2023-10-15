import React from 'react'
import { Box, Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,useDisclosure } from '@chakra-ui/react'

import { Input,Card,Stack,Heading,Text,CardBody,Divider,CardFooter,ButtonGroup } from "@chakra-ui/react"
import { Image,Badge } from '@chakra-ui/react'
const CourseCard = ({e}) => {
  return (
    <div>
      <Card maxW='sm' marginBottom='2rem' marginTop='2rem' boxShadow= 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'> 
  <CardBody>
    <Image
      src={e.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{e.title}</Heading>
      <Text>
       <b>Opportunities : </b> {e.opportunities}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
       <b>Duration : </b>{e.duration} Weeks
      </Text>
      <Text>
        <b>Role : </b>{e.role}
      </Text>
      <Text>
        <b>Color : </b>{e.color}
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

export default CourseCard
