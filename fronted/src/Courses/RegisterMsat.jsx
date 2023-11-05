import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Tag, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Dropzone from 'react-dropzone'

const RegisterMsat = ({ open }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Modal isOpen={open} onOpen={onOpen} onClose={onClose} size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name' />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name' />
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
                        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                            {({ getRootProps, getInputProps }) => (
                                <section className="border border-red-400">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RegisterMsat
