import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { animateScroll } from 'react-scroll'

const MsatConfirm = () => {
    const navigate = useNavigate()
    useEffect(() => {
        animateScroll.scrollToTop()
    }, [])
    return (
        <div className='flex justify-center items-center gap-20 m-10 flex-col lg:flex-row'>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src='https://geps.org/wp-content/uploads/2020/01/Preparing-1030x685.jpg'
                        alt='prepare image'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3' className='text-center'>
                        <Heading size='md'>Not Ready yet</Heading>
                        <Heading size='md' color='red.400'>Prepare for Msat</Heading>
                        <a className='underline text-blue-500' target='_blank' href='https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions'>
                            Top DSA Questions Combined here
                        </a>
                        <a className='underline text-blue-500' target='_blank' href='https://www.geeksforgeeks.org/aptitude-questions-and-answers/'>
                            Top Aptitude Questions Combined here
                        </a>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='md'>
                <CardBody p='5'>
                    <Image
                        src='https://ggsc.s3.amazonaws.com/images/uploads/Succeed_by_helping_others_Fb.jpg'
                        alt='prepare image'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading className='text-[35px] text-center' size='md' >Feel you are Ready</Heading>
                        <Button size={'lg'} colorScheme='red' onClick={()=>navigate('/msat/test')}>Start MSAT</Button>
                    </Stack>
                </CardBody>
            </Card>
        </div>
    )
}

export default MsatConfirm
