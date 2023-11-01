import { Heading, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
const AlreadyDone = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [close, setClose] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            setClose(false)
            onClose()
            navigate('/')
        }, 5000)
    }, [])
    return (
        <div className='h-[100vh] w-[100vw] bg-white'>
            <Modal closeOnOverlayClick={false} isCentered={true} size={'xl'} isOpen={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalBody className='text-center p-5' p='10'>
                        <img className='m-auto mb-2' src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f973.gif" alt="party face" width={'90px'} height={'90px'} />
                        <Heading fontSize={'30px'}>
                            Thank you for attempting the
                            Assesment
                        </Heading>
                        <Text className='mt-3'>
                            You are one step closer to becoming a <span style={{ fontWeight: 'bold' }}>part of Masai School. </span><br />
                            You have already attempted for the Day, try again tommorrow!
                        </Text>
                        <Text className='mt-7'>
                            You are being redirected to home...
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AlreadyDone
