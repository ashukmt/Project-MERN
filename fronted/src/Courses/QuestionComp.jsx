import { Heading, Radio, RadioGroup, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineReload } from "react-icons/ai";
const QuestionComp = ({ section, ques, setScore, score }) => {
  let questions = []
  questions = useSelector(state => state.course.questions)
  const [ans, setAns] = useState(0)
  const [selected, setSelected] = useState(false)
  questions = section === 1 ? questions?.filter((ques) => ques.category === 'aptitude') : questions?.filter((ques) => ques.category === 'coding')
  const question = questions[ques]
  useEffect(() => {
    console.log(ans,question,selected)
    if (selected) {
      ans == question?.ans ? setScore((prev) => ({ ...prev, [ques]: { point: 3, option: ans } })) : ans == 0 ? setScore((prev) => ({ ...prev, [ques]: { point: 0, option: ans } })) : setScore((prev) => ({ ...prev, [ques]: { point: -1, option: ans } }))
    }
    console.log(score)
  }, [ans])
  useEffect(() => {
    if (score[ques]){
      setSelected(true);
      setAns(`${score[ques].option}`);
    }else{
      setSelected(false)
      setAns(0);
    }
  }, [ques, section])
  if (questions && questions.length <= 0) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='lg'
    />
  }
  return (
    <div className='px-7 pt-5'>
      <Heading>Q: {ques + 1}</Heading>
      <Text className='semi-bold text-black text-lg pl-1 p-2 mt-2 font-semibold'>{question?.ques}?</Text>
      <RadioGroup colorScheme='red' value={ans} onChange={setAns} className='p-2 pl-6'>
        <Stack>
          {question?.options?.map((op, i) => (
            <Radio key={i} color={'red.200'} variant='solid' size='md' value={`${i + 1}`}>
              <p onClick={() => setSelected(true)} className='py-1'>{op}</p>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <button onClick={() => { setSelected(false); setAns('0'); setScore((prev) => ({ ...prev, [ques]: { point: 0, option: 0 } })) }} className='ml-5 mt-2 text-lg align-center p-2 text-gray-400 group'><AiOutlineReload className='group-hover:animate-half-spin inline-block mr-2 text-gray-400' /><Text className='inline-block mt-1'>Clear Answer</Text></button>
    </div>
  )
}

export default QuestionComp
