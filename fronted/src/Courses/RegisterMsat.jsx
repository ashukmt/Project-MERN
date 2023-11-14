import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiSolidSpreadsheet, BiSolidUserCircle } from 'react-icons/bi';
import { BsCardImage, BsCloudArrowUpFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { editUser } from '../redux/userReducer/action';

const RegisterMsat = ({ register, setRegister }) => {
    const [formObj, setFormObj] = useState({ name: '', verification_id: '', doc_image: '' })
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [uploadedImage, setUploadedImage] = useState(null);
    const [preview, setPreview] = useState(null)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (uploadedImage && uploadedImage[0]) {
            const imgUrl = URL.createObjectURL(uploadedImage[0]);
            setPreview(imgUrl)
            setFormObj({ ...formObj, doc_image: imgUrl })
        }else{
            setFormObj({...formObj, doc_image: ''})
        }
    }, [uploadedImage])
    const toast = useToast()
    const handleForm = () => {
        for (let x in formObj) {
            if (!formObj[x]) {
                toast({
                    title: "Fill all the details",
                    description: `${x[0].toLocaleUpperCase()+x.substring(1).toLocaleLowerCase()} not filled`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
                return false;
            }
        }
        toast({
            title: "Registration Successfull",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        return true;
    }
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user)
    const handleSubmit = () => {
        if (!handleForm()) return;
        dispatch(editUser({ ...user, registered: true }));
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
        <AiOutlineLoading className='animate-spin h-[100px] w-[100px]' />
    </Box>
    return (
        <Modal isOpen={isOpen} className='m-2' closeOnOverlayClick={false} onOpen={onOpen} onClose={() => { onClose(); setRegister(false) }} size={{ base: 'sm', lg: 'md' }}>
            <ModalOverlay />
            <ModalContent className='m-5'>
                <ModalHeader color={'white'} bg={'#e76a6a'} fontSize={'2xl'} fontFamily={'cursive'} fontWeight={'bold'} className='text-center text-[35px] rounded-md rounded-b-0 rounded-b-none font-bold'>Registration <img height={'50px'} width={'50px'} className='inline-block' src='https://em-content.zobj.net/source/microsoft-teams/337/rocket_1f680.png' alt='spaceship' /></ModalHeader>
                <ModalCloseButton className='mt-2 text-white' onClick={onClose} />
                <ModalBody pb={6} p={9}>
                    <FormControl p='1' borderRadius={'10px'}>
                        <FormLabel className='items-center'><BiSolidUserCircle color='#e76a6a' className='inline-block h-5 w-5 -mt-1' /> Full Name on ID</FormLabel>
                        <Input placeholder='Full name' onChange={(e) => { setFormObj({ ...formObj, name: e.target.value }) }} />
                    </FormControl>

                    <FormControl mt={4} p='1' borderRadius={'10px'}>
                        <FormLabel className='items-center'><BiSolidSpreadsheet color='#e76a6a' className='inline-block -mt-1 h-5 w-5' /> Verification Id</FormLabel>
                        <Select onChange={(e) => { setFormObj({ ...formObj, verification_id: e.target.value }) }}>
                            <option value=''>--select--</option>
                            <option value='adhaar'>Adhaar Card</option>
                            <option value='voter'>Voter Card</option>
                        </Select>
                    </FormControl>

                    <FormControl mt={4} p='2' borderRadius={'10px'}>
                        <FormLabel className='items-center'><BsCardImage color='#e76a6a' className='inline-block h-5 w-5 -mt-1' /> Upload Here</FormLabel>
                        {!uploadedImage &&
                            <Dropzone onDrop={acceptedFiles => setUploadedImage(acceptedFiles)}>
                                {({ getRootProps, getInputProps }) => (
                                    <section className="mt-2 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 text-center">
                                        <div {...getRootProps()} className='text-center items-center'>
                                            <input {...getInputProps()} />
                                            <BsCloudArrowUpFill className='h-20 w-20 m-auto' color='rgb(220 138 138)' />
                                            <p className='relative mt-2 flex w-64 cursor-pointer items-center justify-center text-md font-semibold leading-6 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500 text-red-600'>Choose file or Drag 'n' drop</p>
                                            <p> </p>
                                        </div>
                                    </section>
                                )}
                            </Dropzone>
                        }
                        {uploadedImage && (
                            <div className='flex justify-center'>
                                <Image w='150px' h='150px' src={preview} alt='preview' />
                                <MdCancel className='cursor-pointer w-6 h-6 -ml-5' onClick={() => { setUploadedImage(null); setPreview(null); }} />
                            </div>
                        )}
                    </FormControl>
                    <div className='items-center w-full text-center'>
                        <Button className='mt-3 w-full text-[25px] text-center' isLoading={loading} onClick={handleSubmit} variant={'solid'} size={'lg'} colorScheme='red' bg='#e76a6a'>Submit Details</Button>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RegisterMsat
