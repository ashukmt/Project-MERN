import React from 'react'
import { Heading, Text, Button, Card, CardHeader, CardBody, CardFooter, List, ListItem, ListIcon, Image, Flex, Divider, Box } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
const CourseComp = ({ title, image, opportunities, duration, color }) => {
    return (
        <Card minWidth={'30%'} borderRadius={'20px'} className="sm:flex-1 sm:min-w-[410px] w-full bg-white max-w-[410px] mx-auto md:m-0 relative flex flex-col rounded-3xl border border-[#f1f1f1]" boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px">
            <CardHeader bg={color} borderRadius={'20px 20px 0 0'}>
                <Flex className='h-[230px] flex-shrink-0 rounded-t-[12px] flex items-center justify-center'>
                    <Image className="max-h-[140px] h-full max-w-[140px] w-full object-contain rounded-t-[12px]" src={image} />
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