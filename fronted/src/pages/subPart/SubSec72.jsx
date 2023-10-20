import React from 'react'
import {Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react"
import SubSec721 from './SubSec721'

function SubSec72() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <div onClick={onOpen}>
      <SubSec721/>
    </div>

    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        
        <ModalCloseButton />
        <ModalBody>
        <div className='p-3'>
        Masai does a great job of attracting ambitious folk and it shows in the hunger with which the grads chase their own improvement and career advancement. The curriculum is shaped such that its graduates come into the job with with an understanding of workplace and technology practices that is simply missing from freshers hired from colleges. They continuously look for feedback for their curriculum and ensure that it is up to date with the pulse of the ecosystem. All of these have translated into a very smooth hiring experience for us with Masai. Our experience with Masai so far has led me to believe that its graduates would be good fits in startup culture.
        </div>
        <div className='font-bold p-4'>
        Arya Adarsha Gautam
        </div>
        <div>
        CTO and Co-Founder -Pagarbook
        </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default SubSec72

