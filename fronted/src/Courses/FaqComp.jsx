import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'

const FaqComp = () => {
    const questions = [
        {que:"What is the medium of instruction?",ans:"The medium of instruction at Masai is English. All lectures are delivered in English. As part of the curriculum, we also help you develop your written and verbal communication skills that help you become more employable."},
        {que:"Do you offer loaner laptops for prospective students?",ans:"Not at the moment."},
        {que:"Does college CGPA play any role in the program?",ans:"No, your college CGPA does not play any role in your entry to our courses."},
        {que:"Will I receive a degree or certificate when I graduate from Masai?",ans:"We do issue a certificate of completion upon graduation, and you also receive certification from the National Skill Development Corporation. But, Masai is not a degree institution and we do not grant Bachelors or Masters Degrees. The core focus at Masai is on skill development and holistic learning. With that in mind, we have not tied up with any education institution for certification. We believe skills > degrees."},
        {que:"What do I do if I don't have a Pan Card/Adhaar Card?",ans:"At the time of admission, having an Aadhaar is mandatory. PAN Card is not mandatory at the time of admission, but you will need to get a PAN number before you move to Unit 2 (Week 5)"},
        {que:"Do I have to take the first job I am offered?",ans:"No, we do not control where you choose to work. However, we do recommend not over-optimising your job search and getting a job as soon as possible. Once you reject an offer, you cannot go back to it if the position is filled. Terms and conditions apply."},
        {que:"Is attendance mandatory?",ans:"Yes, a minimum of 90% attendance is required to complete our courses. You also need to follow the guidelines mentioned in Masai's Code of Conduct Policy. Please go through this link to understand Code of Conduct policy**relaxations are provided to part time programs (working professionals and final year students)"},
        {que:"Where is Masai located?",ans:"The Masai head office is located in Bengaluru, India. Both our Software Development and Data Analytics courses are held live online in an interactive environment."},
        {que:"Does Masai help me get a job?",ans:"The Software Development & Data Analytics space is amongst the most in-demand and ever-growing sectors in India. Our in-house placements team is dedicated to launching your career. It works with over 4000+ placement partners like MPL, Dream11, Samsung, Instamojo, Paytm, Nobroker, ShareChat, Revvsales etc. Our team will help you prepare your resume, portfolio, build your digital profile, practice interviews and even help you when it comes to salary negotiation. However, at the end of the day, you are the one who would apply, give the interview and get the job."},
        {que:"The course hours don’t work for me. Can I attend classes in my own time?",ans:"No. You are required to attend classes in the defined time slot and are required to maintain 90% attendance for all our courses. If for any reason you are not able to attend your classes during your course, with prior permission, recorded lectures will be made available to you. However, please note, it won’t be as effective as attending live classes. **relaxations are provided to students in Fast Track Learning Programs (working professionals and final year students)."},
        {que:"What if I leave the course in between?",ans:"For both our courses Unit 1(Week 1-5): You have to pay us nothing to drop out of Unit 1 and if you think that Masai is not for you. Unit 2-4(Week 6-15): If you leave our course between these units, you are liable to pay a sum of INR 50,000/- Unit 5-6(Week 16-35): If you leave our course between the last 2 units, you have to pay the full PAP amount for the course. You can click here and visit our Fees & PAP page. Please note that dropout clauses are also applicable in a scenario where you breach the Masai Students' Code Of Conduct."},
        {que:"What is the course fee?",ans:"You can learn at INR 0 upfront fees with Masai. You only pay us after you you get placed over a certain CTC. To understand our Pay After Placement(PAP) model of course fee, you can click here and visit our Fees & PAP page"},
    ]
    return (
        <div className='mb-10'>
            <h1 className='text-center py-8 text-[35px] font-[700]'>Frequently asked questions</h1>
            <Accordion width={{ base: "100%", md: "80%" }} margin="auto" allowToggle>
                {questions?.map((q,i)=>(
                    <AccordionItem key={i}>
                        <h2>
                            <AccordionButton py='5'>
                                <Box as="span" flex="1" textAlign="left" fontSize={{ base: "14px", md: "16px" }} fontWeight="700">
                                    {q.que}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {q.ans}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FaqComp