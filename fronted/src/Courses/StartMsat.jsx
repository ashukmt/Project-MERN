import { Box, Button, Center, Divider, Flex, HStack, Heading, Image, Modal, ModalContent, ModalOverlay, Radio, RadioGroup, Spacer, Text, Tooltip, useDisclosure, useRadioGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsFillStopFill } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'
import QuestionComp from './QuestionComp'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../redux/courseReducer/action'
import SmallTimer from './SmallTimer'
import { HiOutlineReply } from "react-icons/hi";
import ThankYouScreen from './ThankYouScreen'
import { editUser } from '../redux/userReducer/action'
import AlreadyDone from './AlreadyDone'

const StartMsat = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    useEffect(() => {
        onOpen()
        animateScroll.scrollToTop({ smooth: true })
        dispatch(getQuestions())
    }, [])
    const [section, setSection] = useState(1);
    const [question, setQuestion] = useState(0);
    const [score1, setScore1] = useState({});
    const [score2, setScore2] = useState({});
    const [marks, setMarks] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [correct, setCorrect] = useState(0);

    const setTotal = () => {
        let t = 0, c=0, i=0;
        for (let x in score1) {
            console.log(score1[x])
            t += Number(score1[x].point)
            if (score1[x].point == -1) {
                i++
            }
            else if (score1[x].point == 3) {
                c++
            }
        }
        for (let x in score2) {
            t += Number(score2[x].point)
            if (score2[x].point == -1) {
                i++
            }
            if (score2[x].point == 3) {
                c++;
            }
        }
        setMarks(t)
        setIncorrect(i)
        setCorrect(c)
    }
    const [processing, setProcessing] = useState(false)
    const [ended, setEnded] = useState(false);
    const submitTest = () => {
        setTimeout(() => {
            setProcessing(false)
            setEnded(true)
        }, 7000)
        onClose()
        setTotal()
        setProcessing(true)
        dispatch(editUser({...user,msatDay:new Date(),msatScore:marks, coin: user.coin+100}))
    }
    if(user.msatDay == new Date().getDate()) return <>
        <AlreadyDone/>
    </>
    return (
        <>
            <div className='h-[100vh] w-[100vw] bg-white'>
                <Modal isOpen={isOpen} closeOnOverlayClick={false} motionPreset={"scale"} m={'0'} isCentered={true} size={'6xl'} autoFocus={false}>
                    <ModalOverlay />
                    <ModalContent h='95vh' borderRadius={'3xl'} >
                        <div className='flex h-full'>
                            <Flex flexDirection={'column'} className='w-4/6'>
                                <span className='flex items-center p-3 justify-between'>
                                    <Image src="https://masaischool.com/images/msat/masai.svg" className="mx-auto ml-3.5 h-full w-[90px] md:w-[90px]" alt='masai logo' />
                                    <Button _hover={{ bg: 'white.500' }} color={'red'} bg='white' onClick={() => submitTest()} className='uppercase gap-2 border-red-500 text-red-500 border bg-white hover:bg-white'><BsFillStopFill className='h-7' color='red' /> Finish Test</Button>
                                </span>
                                <Divider borderColor={'gray'} />
                                <QuestionComp score={section == 1 ? score1 : score2} section={section} ques={question} setScore={section === 1 ? setScore1 : setScore2} />
                                <Spacer />
                                <Divider borderColor={'gray'} />
                                <div className='bottom-0 h-5 pt-7 pb-2 pl-10 mb-7 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <Tooltip label="Seeking help in a quiz is like trying to outsource your own brain – you might get answers, but you'll miss out on the thrill of the quest." placement='right-start' closeOnClick={false}>
                                            <button className='gap-1 uppercase text-sm flex items-center rounded-md transition hover:bg-gray-400 p-2 hover:text-white hover:font-semibold cursor-not-allowed'>
                                                <AiOutlineQuestionCircle className='h-[20px] w-[20px]' _hover={{ color: '#fff' }} color={section === 1 ? '#5f5f5f' : 'green'} />
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
                                        <Button isDisabled={question > 5} onClick={() => setQuestion(question + 1)} bg='gray.200' _hover={{ bg: 'gray.300' }} color='blue.600'>SKIP</Button>
                                        <Button isDisabled={question > 5} onClick={() => setQuestion(question + 1)} bg={'blue.600'} _hover={{ bg: 'blue.400' }} color='white'>NEXT</Button>
                                    </div>
                                </div>
                            </Flex>
                            <Divider orientation='vertical' h='full' borderColor='gray' />
                            <Flex flexDirection={'column'} className='w-2/6 pt-5'>
                                <div className='h-[44px] p-5 pt-0 items-center'>
                                    <SmallTimer submitTest={submitTest} />
                                </div>
                                <Divider borderColor='gray' />
                                <div className='p-5'>
                                    <h3 className='font-bold text-xl'>Section {section === 1 ? '1 - Aptitude' : '2 - Coding'}</h3>
                                    <div className='mt-4 grid grid-cols-5 gap-6 justify-center'>
                                        {[...new Array(7)].map((ele, i) => (
                                            <Box key={i} onClick={() => setQuestion(i)} bg={question === i ? 'green.200' : 'slate.100'} className='cursor-pointer text-center bg-blue-100 shadow-sm items-center border border-slate-500 outline-blue-300 font-bold px-[15px] hover:outline py-[5px] rounded-md'>{i + 1}</Box>
                                        ))}
                                    </div>
                                </div>
                                <Spacer />
                                <Divider borderColor={'gray'} />
                                <div className='bottom-0 h-5 flex flex-col pt-[8px] pb-7 pl-10 mb-7 text-sm'>
                                    <div className='cursor-pointer text-sm font-bold items-center mb-1' onClick={section === 1 ? () => { setSection(2); setQuestion(0) } : () => { setSection(1); setQuestion(0) }}>
                                        <HiOutlineReply color={section === 1 ? 'red' : 'green'} className='inline-block mr-2' transform={section === 1 ? 'scale(-1,1)' : ''} />
                                        {section === 1
                                            ? 'Next Section - Coding'
                                            : 'Prev Section - Aptitude'
                                        }
                                    </div>
                                    <div className='flex'>Number of questions : <p className='font-bold ml-1 mr-3'> 7</p> Time : <p className='font-bold'>10 min</p></div>
                                </div>
                            </Flex>
                        </div>
                    </ModalContent >
                </Modal >
                {
                    processing && <ThankYouScreen close={ended} />
                }
                {ended &&
                    <div className='w-[50%] m-auto p-10 flex justify-center mt-[150px] border border-slate-700 rounded-md'>
                        <div className='w-[30%]'>
                            {marks >= 15
                                ? <img src="https://lordicon.com/icons/wired/flat/1103-confetti.gif" alt="confetti" width={'200px'} height={'100px'} />
                                : <img src='https://media.tenor.com/dKZRyUaeO0oAAAAC/better-luck-next-time-good-luck.gif' alt='blnt' width={'200px'} height={'100px'} />}
                        </div>
                        <div className='text-center w-[70%]'>
                            <Heading >Score Details</Heading>
                            <Text>Here are your score details</Text>
                            <Box className='mt-3 items-center justify-center '>
                                <Flex className='items-center gap-2 justify-center'>
                                    <Box className='outline bg-blue-200 outline-blue-500 rounded-md p-1 text-lg font-semibold  text-slate-700'>Attempted : {Object.values(score1).length + Object.values(score2).length}/14</Box>
                                    <Box className='outline bg-blue-200 outline-blue-500 rounded-md p-1 text-lg font-semibold  text-slate-700'>Score : {marks}</Box>
                                </Flex>
                                <Flex className='mt-3 gap-3 justify-center'>
                                    <Box className='outline bg-green-200 outline-green-500 rounded-md p-1 text-lg font-semibold text-slate-700'>Correct : {correct}</Box>
                                    <Box className='outline bg-red-200 outline-red-500 rounded-md p-1 text-lg font-semibold text-slate-700'>Incorrect : {incorrect}</Box>
                                </Flex>
                            </Box>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default StartMsat
