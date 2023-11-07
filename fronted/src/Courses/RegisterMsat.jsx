import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlineLoading } from 'react-icons/ai';
import { MdFileUpload } from 'react-icons/md';
import { useNavigate } from 'react-router';
import { animateScroll } from 'react-scroll';

const RegisterMsat = ({ register, setRegister }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [uploadedImage, setUploadedImage] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => {
        onClose()
        setRegister(false)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate('/msat/confirm')
        }, 5000)
    }
    useEffect(() => {
        if (register) onOpen()
    }, [register])
    if (loading) return <Box position={'fixed'} zIndex={'100'} top='0' className='justify-center items-center text-center flex' h='100%' w='100%' bg='rgba(255,255,255,0.5)'>
        <AiOutlineLoading className='animate-spin h-[100px] w-[100px]'/>
    </Box>
    return (
        <Modal isOpen={isOpen} className='m-2' onOpen={onOpen} onClose={() => { onClose(); setRegister(false) }} size={{ base: 'sm', lg: 'md' }}>
            <ModalOverlay />
            <ModalContent className='m-5'>
                <ModalHeader color={'white'} bg={'#e76a6a'} fontSize={'2xl'} fontFamily={'cursive'} fontWeight={'bold'} className='text-center text-[35px] rounded-md rounded-b-0 rounded-b-none font-bold'>Registration</ModalHeader>
                <ModalCloseButton className='mt-2 text-white' onClick={onClose} />
                <ModalBody pb={6} p={9}>
                    <FormControl p='2' borderRadius={'10px'}>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Full name' />
                    </FormControl>

                    <FormControl mt={4}  p='2' borderRadius={'10px'}>
                        <FormLabel>Verification Id</FormLabel>
                        <Select>
                            <option value=''>--select--</option>
                            <option value='adhaar'>Adhaar Card</option>
                            <option value='voter'>Voter Card</option>
                        </Select>
                    </FormControl>

                    <FormControl mt={4}  p='3' borderRadius={'10px'}>
                        <FormLabel>Upload Here</FormLabel>
                        {!uploadedImage &&
                            <Dropzone onDrop={acceptedFiles => setUploadedImage(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <section className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 text-center">
                                        <div {...getRootProps()} className='text-center items-center'>
                                            <input {...getInputProps()} />
                                            <MdFileUpload className='h-20 w-20 m-auto' color='#e76a6a' />
                                            <p className='relative mt-2 flex w-64 cursor-pointer items-center justify-center text-md font-semibold leading-6 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500 text-red-600'>Choose file or Drag 'n' drop</p>
                                            <p> </p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        }
                        {uploadedImage && (
                            <Image src='' />
                        )}
                    </FormControl>
                    <div className='items-center w-full text-center'>
                        <Button className='mt-3 w-full text-[25px] text-center' onClick={handleSubmit} variant={'solid'} size={'lg'} colorScheme='red' bg='#e76a6a'>Submit Details</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RegisterMsat
