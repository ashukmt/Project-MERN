import React from 'react'
import { Heading, Text, Button, Card, CardHeader, CardBody, CardFooter, List, ListItem, ListIcon, Image } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
const CourseComp = ({title,image,opportunities,duration}) => {
    return (
        <Card p='2'>
            <CardHeader>
                <Image src={image} w='200px' />
            </CardHeader>
            <CardBody>
                <Heading size='md'>{title}</Heading>
                <Text>Become job-ready in {duration} weeks</Text>
                <List>
                    <ListItem>
                       <ListIcon as={MdCheckCircle} color='green.500' />
                       <Text className='font-bold inline-block'>Opportunites : </Text>
                       {" "}{opportunities}
                    </ListItem>
                    <ListItem>
                       <ListIcon as={MdCheckCircle} color='green.500' />
                       100% live learning with expert instructors.
                    </ListItem>
                    <ListItem>
                       <ListIcon as={MdCheckCircle} color='green.500' />
                       Pay After Placement
                    </ListItem>
                </List>
            </CardBody>
            <CardFooter>
                <Button>View here</Button>
            </CardFooter>
        </Card>
    )
}

export default CourseComp