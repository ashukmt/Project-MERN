const iniState = {
    courses: [{
            title: "Full Stack Web Development",
            opportunities: "Full Stack Developer, Software Engineer & much more.",
            duration: 30,
            color:'rgb(183, 184, 229)',
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/full_stack1_329d6b5595.png"
        },
        {
            title: "Backend Development",
            opportunities: "Backend Web Developer, API developer & much more.",
            duration: 35,
            color:'rgb(229, 201, 183)',
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/backend_ea129d404e.png"
        },
        {
            title: "Data Analytics",
            opportunities: "Data Engineer, Data Analyst, Machine Learning Engineer & much more.",
            duration: 25,
            color:'rgb(183, 222, 230)',
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/data_07ee77a2da.png"
        },
        {
            title: "Mobile Development",
            opportunities: "Mobile App Developer & much more.",
            duration: 30,
            color:"rgb(183, 230, 207)",
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_ab8f5bdbf6.png"
        },
        {
            title: "Become a Software Testing & Automation",
            opportunities: "QA Tester, Automation Engineer & much more.",
            duration: 25,
            color:"rgb(174, 198, 244)",
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/testing_faf38ba965.png"
        },
    ]
}

export const courseReducer = (state = iniState, {
    type,
    payload
}) => {
    switch (type) {
        default:
            return state
    }
}