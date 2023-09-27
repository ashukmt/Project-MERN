import React from 'react'
import { Heading, Text, Button, Card, CardHeader, CardBody, CardFooter, List, ListItem, ListIcon, Image, Flex, Divider, Box } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
const CourseComp = ({ title, image, opportunities, duration }) => {
    return (
        <Card p='2'>
            <CardHeader>
                <Flex justify={'center'} w='100%'>
                    <Image src={image} w='200px' />
                </Flex>
            </CardHeader>
            <CardBody textAlign={'left'}>
                <Box py='3'>
                    <Heading size='md' my='1'>{title}</Heading>
                    <Text>Become job-ready in {duration} weeks</Text>
                </Box>
                <Divider />
                <List p='2'>
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
                <Button colorScheme='red' w='100%'>View Details</Button>
            </CardFooter>
        </Card>
    )
}

export default CourseComp