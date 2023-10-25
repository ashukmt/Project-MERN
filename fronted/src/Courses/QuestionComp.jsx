import { Heading, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineQuestionCircle, AiOutlineReload } from "react-icons/ai";
const QuestionComp = ({section,ques}) => {
  let questions = useSelector(state => state.course.questions)
  questions = section === 1 ? questions?.filter((ques)=>ques.category==='aptitude') : questions?.filter((ques)=>ques.category==='coding')
  const question = questions[ques]
  const [ans,setAns] = useState(-1)
  return (
    <div className='px-7 pt-5'>
      <Heading>Q: {ques+1}</Heading>
      <Text className='semi-bold text-black text-lg pl-1 p-2 mt-2 font-semibold'>{question?.ques}?</Text>
      <RadioGroup colorScheme='red' onChange={setAns} value={ans} className='p-2 pl-6'>
        <Stack>
          {question?.options?.map((op,i) => (
            <Radio key={op} color={'red.200'} variant='solid' size='md' value={i}>
              <p className='py-1'>{op}</p>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <button onClick={()=>setAns(-1)} className='ml-5 mt-2 text-lg align-center p-2 text-gray-400 group'><AiOutlineReload className='group-hover:animate-half-spin inline-block mr-2 text-gray-400' /><Text className='inline-block mt-1'>Clear Answer</Text></button>
    </div>
  )
}

export default QuestionComp
