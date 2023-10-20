import { Button, Image, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsFillStopFill } from 'react-icons/bs'
import { animateScroll } from 'react-scroll'

const StartMsat = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()
        animateScroll.scrollToTop({ smooth: true })
    }, [])
    return (
        <div className='h-[100vh] w-[100vw] bg-white'>
            <Modal isOpen={isOpen} closeOnOverlayClick={false} motionPreset={"scale"} m={'0'} isCentered={true} size={'6xl'}>
                <ModalOverlay />
                <ModalContent h='95vh' className='rounded-2xl'>
                    <div>
                        <div>
                            <span className='flex items-center p-3 justify-between'>
                                <Image src="https://masaischool.com/images/msat/masai.svg" className="mx-auto ml-3.5 h-full w-[90px] md:w-[90px]" alt='masai logo' />
                                <Button color={'red'} bg='white' className='uppercase gap-2 border-red-500 text-red-500 border bg-white'><BsFillStopFill className='h-7' color='red'/> Finish Test</Button>
                            </span>
                            <hr style={{ height: '1px', background: 'grey' }} />
                        </div>
                        <div>
                            Laude ka test
                        </div>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default StartMsat
