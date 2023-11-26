import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


function AccordioCard({Que,Ans}) {
  return (
    <Box width={{ base: "100%", md: "80%" }} margin="auto">
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left" py={2} fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
            {Que}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {Ans}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
</Box>
  )
}

export default AccordioCard
