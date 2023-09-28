import React from 'react'
import { Heading, Text, Button, Card, CardHeader, CardBody, CardFooter, List, ListItem, ListIcon, Image, Flex, Divider, Box } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
const CourseComp = ({ title, image, opportunities, duration }) => {
    return (
        <Card minWidth={'30%'} className="sm:flex-1 sm:min-w-[410px] w-full bg-white max-w-[410px] mx-auto md:m-0 relative flex flex-col rounded-xl border border-[#f1f1f1]" box-shadow="rgba(215, 216, 222, 0.41) 0px 6px 34px 0px">
            <CardHeader>
                <Flex className='h-[230px] flex-shrink-0 rounded-t-[12px] flex items-center justify-center'>
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