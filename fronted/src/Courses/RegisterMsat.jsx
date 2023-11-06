import { Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Tag, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { MdFileUpload } from 'react-icons/md';

const RegisterMsat = ({ register, setRegister }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [uploadedImage, setUploadedImage] = useState(null)
    useEffect(() => {
        if (register) onOpen()
    }, [register])
    return (
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={()=>{onClose(); setRegister(false)}} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color={'white'} bg={'red.400'} className='text-center text-[29px] rounded-md rounded-b-0 font-bold'>Registration</ModalHeader>
                <ModalCloseButton className='mt-2 text-white' onClick={onClose} />
                <ModalBody pb={6} p={9}>
                    <FormControl>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Full name' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Verification Id</FormLabel>
                        <Select>
                            <option value=''>--select--</option>
                            <option value='adhaar'>Adhaar Card</option>
                            <option value='voter'>Voter Card</option>
                        </Select>
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Upload Here</FormLabel>
                        {!uploadedImage &&
                            <Dropzone onDrop={acceptedFiles => setUploadedImage(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <section className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed outline-dotted outline-2 outline-gap-2 border-gray-900/25 px-6 py-10 text-center">
                                        <div {...getRootProps()} className='text-center items-center'>
                                            <input {...getInputProps()} />
                                            <MdFileUpload className='h-20 w-20 m-auto' />
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
                        <Button className='mt-3 text-center' variant={'solid'} colorScheme='red'>Submit Details</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RegisterMsat
