import { Box, Button, Center, Divider, Flex, Image, Modal, ModalContent, ModalOverlay, Radio, RadioGroup, Spacer, Text, Tooltip, useDisclosure, useRadioGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsFillStopFill } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'
import QuestionComp from './QuestionComp'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { getQuestions } from '../redux/courseReducer/action'
import SmallTimer from './SmallTimer'
import { HiOutlineReply } from "react-icons/hi";

const StartMsat = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    useEffect(() => {
        onOpen()
        animateScroll.scrollToTop({ smooth: true })
        dispatch(getQuestions())
    }, [])

    const [section, setSection] = useState(1);
    const [question, setQuestion] = useState(0);
    console.log(question)
    return (
        <div className='h-[100vh] w-[100vw] bg-white'>
            <Modal isOpen={isOpen} closeOnOverlayClick={false} motionPreset={"scale"} m={'0'} isCentered={true} size={'6xl'} autoFocus={false}>
                <ModalOverlay />
                <ModalContent h='95vh' borderRadius={'3xl'} >
                    <div className='flex h-full'>
                        <Flex flexDirection={'column'} className='w-4/6'>
                            <span className='flex items-center p-3 justify-between'>
                                <Image src="https://masaischool.com/images/msat/masai.svg" className="mx-auto ml-3.5 h-full w-[90px] md:w-[90px]" alt='masai logo' />
                                <Button _hover={{ bg: 'white.500' }} color={'red'} bg='white' onClick={() => onClose()} className='uppercase gap-2 border-red-500 text-red-500 border bg-white hover:bg-white'><BsFillStopFill className='h-7' color='red' /> Finish Test</Button>
                            </span>
                            <Divider borderColor={'gray'} />
                            <QuestionComp section={section} ques={question}/>
                            <Spacer />
                            <Divider borderColor={'gray'} />
                            <div className='bottom-0 h-5 pt-7 pb-2 pl-10 mb-7 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <Tooltip label="Seeking help in a quiz is like trying to outsource your own brain – you might get answers, but you'll miss out on the thrill of the quest." placement='right-start' closeOnClick={false}>
                                        <button className='gap-1 uppercase text-sm flex items-center rounded-md transition hover:bg-gray-400 p-2 hover:text-white hover:font-semibold cursor-not-allowed'>
                                            <AiOutlineQuestionCircle className='h-[20px] w-[20px]' _hover={{ color: '#fff' }} color={section === 1 ? '#5f5f5f' : 'green'} boxSize='1.5em' />
                                            Help
                                        </button>
                                    </Tooltip>
                                    <Center height='40px' className='px-3'>
                                        <Divider orientation='vertical' borderColor={'gray'} />
                                    </Center>
                                    <div className='mr-2 flex text-gray-800 text-sm'>
                                        <Text className='mr-2'>Correct Answer : </Text>
                                        <Text className='font-semibold' color={'green'}>+3</Text>
                                    </div>
                                    <div className='mr-2 flex text-gray-800 text-sm'>
                                        <Text className='mr-2'>Wrong Answer : </Text>
                                        <Text className='font-semibold' color={'red'}>-1</Text>
                                    </div>
                                </div>
                                <div className='flex gap-2 pr-3 text-white'>
                                    <Button isDisabled={question>5} onClick={()=>setQuestion(question+1)} bg='gray.200' _hover={{ bg: 'gray.300' }} color='blue.600'>SKIP</Button>
                                    <Button isDisabled={question>5} onClick={()=>setQuestion(question+1)} bg={'blue.600'} _hover={{ bg: 'blue.400' }} color='white'>NEXT</Button>
                                </div>
                            </div>
                        </Flex>
                        <Divider orientation='vertical' h='full' borderColor='gray' />
                        <Flex flexDirection={'column'} className='w-2/6 pt-5'>
                            <div className='h-[44px] p-5'>
                                <SmallTimer />
                            </div>
                            <Divider borderColor='gray' />
                            <div className='p-5'>
                                <h3 className='font-bold text-xl'>Section {section===1 ? '1 - Aptitude' : '2 - Coding'}</h3>
                                <div className='mt-4 grid grid-cols-5 gap-6 justify-center'>
                                    {[...new Array(7)].map((ele,i)=>(
                                        <Box key={i} onClick={() => setQuestion(i)} bg={question === i ? 'green.200' : 'slate.100'} className='cursor-pointer text-center bg-blue-100 shadow-sm items-center border border-slate-500 outline-blue-300 font-bold px-[15px] hover:outline py-[5px] rounded-md'>{i + 1}</Box>
                                    ))}
                                </div>
                            </div>
                            <Spacer />
                            <Divider borderColor={'gray'} />
                            <div className='bottom-0 h-5 flex flex-col pt-[8px] pb-7 pl-10 mb-7 text-sm'>
                                <div className='cursor-pointer text-sm font-bold items-center mb-1' onClick={section===1 ? ()=>{setSection(2); setQuestion(0)}: ()=>{setSection(1); setQuestion(0)}}>
                                    <HiOutlineReply color={section===1?'red':'green'} className='inline-block mr-2' transform={section===1?'scale(-1,1)':''} />
                                    {section === 1
                                        ? 'Next Section - Coding'
                                        : 'Prev Section - Aptitude'
                                    }
                                </div>
                                <div className='flex'>Number of questions : <p className='font-bold ml-1 mr-3'> 5</p> Time : <p className='font-bold'>10 min</p></div>
                            </div>
                        </Flex>
                    </div>
                </ModalContent >
            </Modal >
        </div >
    )
}

export default StartMsat
