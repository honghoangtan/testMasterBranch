
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si'

import badge from '../../assets/resume/badge.svg'
import cap from '../../assets/resume/cap.svg'

import { motion } from "framer-motion"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { Tooltip } from 'react-tooltip';


const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Hong Hoang Tan",
        },
        {
            fieldName: "Phone",
            fieldValue: "(+88) 094 242 5585",
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Years",
        },
        {
            fieldName: "Skype",
            fieldValue: "Draw.18",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Vietnam",
        },
        {
            fieldName: "Email",
            fieldValue: "hoangtan181201@gmail.com",
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available",
        },
        {
            fieldName: "Languages",
            fieldValue: "Vietnamese, English",
        },
    ]
}

// experience data 
const experience = {
    icon: badge,
    title: "My experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    items: [
        {
            company: "ICLS TECH.",
            position: "Front-end Developer Intern",
            duration: "03/2024 - 06/2024"
        },
        {
            company: "NGN CORPORATION.",
            position: "Join Domain",
            duration: "Summer 2022"
        },
        // {
        //     company: "E-commerce Startup.",
        //     position: "Freelance Web Developer",
        //     duration: "2020 - 2021"
        // },
        // {
        //     company: "Tech Academy.",
        //     position: "Teaching Assistant",
        //     duration: "2019 - 2020"
        // },
        // {
        //     company: "Digital Agency.",
        //     position: "UI/UX Designer",
        //     duration: "2018 - 2019"
        // },
    ]
}

// education data 
const education = {
    icon: cap,
    title: "My education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    items: [
        {
            institution: "Van Hien University.",
            // degree: "Full Stack Web Developer Bootcamp",
            position: "Software Technology",
            GPA: "3.30",
            duration: "2020 - Present"
        },
        // {
        //     institution: "Codecademy.",
        //     degree: "Front-End Track",
        //     duration: "2022"
        // },
        // {
        //     institution: "Online Course.",
        //     degree: "Programming Course",
        //     duration: "2020 - 2021"
        // },
        // {
        //     institution: "Tech Institute.",
        //     degree: "Certified Web Developer",
        //     duration: "2029"
        // },
        // {
        //     institution: "Design School.",
        //     degree: "Diploma in Graphic Design",
        //     duration: "2016 - 2018"
        // },
        // {
        //     institution: "Community College.",
        //     degree: "Associate Degree in Computer Science",
        //     duration: "2016 - 2018"
        // },
        
    ]
}

// skills data 
const skills = {
    icon: cap,
    title: "My skills",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    SkillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiRedux />,
            name: "redux",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ]
}

function Resume() {

    const [isActive, setIsActive] = useState('experience')
    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabList
                    className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6
                        inline-flex h-auto rounded-md p-1 text-primary"
                >
                    <Tab 
                        value="experience"
                        onClick={() => setIsActive('experience')}
                        className={`${isActive === 'experience' && 'bg-accent text-primary font-bold shadow-sm'} inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap
                            text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all
                            disabled:pointer-events-none disabled:opacity-50 cursor-pointer`}
                    >
                        Experience
                    </Tab>

                    <Tab 
                        value="education"
                        onClick={() => setIsActive('education')}
                        className={`${isActive === 'education' && 'bg-accent text-primary font-bold shadow-sm'} inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap
                            text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all
                            disabled:pointer-events-none disabled:opacity-50 cursor-pointer`}
                    >Education</Tab>

                    <Tab 
                        value="skills"
                        onClick={() => setIsActive('skills')}
                        className={`${isActive === 'skills' && 'bg-accent text-primary font-bold shadow-sm'} inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap
                            text-white rounded-lg p-3 text-balance font-medium ring-offset-white transition-all
                            disabled:pointer-events-none disabled:opacity-50 cursor-pointer`}
                    >Skills</Tab>

                    <Tab 
                        value="about"
                        onClick={() => setIsActive('about')}
                        className={`${isActive === 'about' && 'bg-accent text-primary font-bold shadow-sm'} inline-flex items-center w-full bg-[#27272c] justify-center whitespace-nowrap
                            text-white rounded-lg p-3 text-base font-medium ring-offset-white transition-all
                            disabled:pointer-events-none disabled:opacity-50 cursor-pointer`}
                    >About me</Tab>
                </TabList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabPanel value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>

                            <PerfectScrollbar className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {
                                        experience.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                        flex flex-col justify-center items-center xl:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 
                                                        className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                    >{item.position}</h3>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </PerfectScrollbar>
                        </div>
                    </TabPanel>

                    {/* education */}
                    <TabPanel value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>

                            <PerfectScrollbar className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {
                                        education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                        flex flex-col justify-center items-center xl:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 
                                                        className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                    >{
                                                        index === 0 ? item.position : item.degree
                                                    }</h3>

                                                    <span>GPA: {item.GPA}</span>

                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </PerfectScrollbar>
                        </div>
                    </TabPanel>

                    {/* skills */}
                    <TabPanel value="skills" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

                            <PerfectScrollbar className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {
                                        skills.SkillList.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="w-full h-[150px] bg-[#232329] rounded-xl
                                                        flex justify-center items-center group"
                                                    >
                                                        <div 
                                                            className="text-6xl group-hover:text-accent transition-all duration-300"
                                                            data-tooltip-id={`${index}`}
                                                            data-tooltip-content={`${item.name}`}
                                                        >
                                                            {item.icon}
                                                        </div>
                                                    </div>
                            
                                                    <Tooltip id={`${index}`} className="capitalize" />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </PerfectScrollbar>
                        </div>
                    </TabPanel>

                    {/* about */}
                    <TabPanel value="about" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {
                                        about.info.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="flex items-center justify-center xl:justify-start gap-4"
                                                >
                                                    <span className="text-white/60">{item.fieldName}</span>
                                                    <span className="text-xl">{item.fieldValue}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                        </div>
                    </TabPanel>

                </div>
            </Tabs>
            </div>
        </motion.div>
     );
}

export default Resume;