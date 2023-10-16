import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";

const Alumini = () => {
    const aluminiDetails = [
        { dp: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aalind_Sharma_8089cc7216.jpeg", name: "Aalind Sharma", company: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Vyapar_2x_d341726335.png", quote: "Even after graduating with a CS degree l had doubts about my technical skills before joining Masai. But with their intensive program, Masai School helped me to improve...", bg:"rgb(238, 255, 247)" },
        { dp: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Mohammad_Hassan_20660ddb04.jpg", name: "Mohammad Hassan", company: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg", quote: "My dad said there could be hidden charges. But, I have completed my PAP in 12 months so I can say that Masai School is completely transparent.", bg:"rgb(247, 247, 255)" },
        { dp: "https://masai-website-images.s3.ap-south-1.amazonaws.com/Aayushi_527cd1c2a3.jpg", name: "Aayushi Shah", company: "https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg", quote: "I got placed within 2 days after graduation! I’m happy I am part of the Masai family, not because they helped me but because of their mission to help other lost yet...", bg:"rgb(246, 237, 231)" }
    ]
    return (
        <div className='mt-18 mb-5 max-w-[1280px] mx-auto'>
            <h1 className='text-[40px] text-center font-bold'>Hear From our alumni</h1>
            <div style={{desktopCols: "repeat(auto-fit,296px)",mobileCols: "repeat(1,1fr)"}} className="hidden px-[16px] lg:grid justify-center grid-cols-3 md:grid-cols-3 gap-[16px] mt-[32px]">
                {aluminiDetails?.map((al, i) => (
                    <div className="mx-auto h-full md:max-w-[296px] flex flex-col rounded-[32px] relative">
                        <div class="h-[296px]">
                            <img src={al.dp} alt={al.name} class="h-full z-[-1] object-cover object-top relative rounded-[32px] w-[100%]" style={{ opacity: 1, transition: "opacity 1200ms ease-out 0s" }} />
                        </div>
                        <div className="min-h-[252px] flex-1 flex flex-col gap-[8px] relative mt-[-50px] rounded-[32px] py-[24px] px-[16px]" style={{background: al.bg}}>
                            <div className="h-full flex gap-[5px]">
                                <RiDoubleQuotesL size={'lg'} className='align-top'/>
                                <div className='flex flex-col'>
                                    <p className="!font-[400] text-[14px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 max-h-[132px] textOverflow !text-[#544D4F]">{al.quote}</p>
                                    <div className="mt-auto flex flex-col flex-1 items-start justify-end">
                                        <p className="!font-[400] text-[16px] leading-[24px] font-sans transition-[background-color,border-color,color,fill,stroke,opacity,box-shadow,transform] duration-200 undefined">{al.name}</p>
                                        <img src={al.company} alt="company" class="mt-[4px] h-[24px]" style={{ opacity: 1, transition: "opacity 1200ms ease-out 0s" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Alumini
