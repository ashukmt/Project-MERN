import { Heading, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const ThankYouScreen = ({close}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Modal closeOnOverlayClick={false} isCentered={true} size={'xl'} isOpen={!close}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody className='text-center p-5' p='10'>
                    <img className='m-auto mb-2' src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f973.gif" alt="party face" width={'90px'} height={'90px'} />
                    <Heading fontSize={'30px'}>
                        Thank you for attempting the
                        Assesment
                    </Heading>
                    <Text className='mt-3'>
                        You are one step closer to becoming a <span style={{fontWeight:'bold'}}>part of Masai School. </span><br/>
                        Please wait while we get your scores
                    </Text>
                    <Text className='mt-7'>
                        Wait a few seconds...
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ThankYouScreen
