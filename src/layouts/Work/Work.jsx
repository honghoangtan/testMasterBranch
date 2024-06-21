
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

import { Tooltip } from 'react-tooltip';

import {Link} from 'react-router-dom'

import thumb1 from '../../assets/work/thumb1.png'
import thumb2 from '../../assets/work/thumb2.png'
import thumb3 from '../../assets/work/thumb3.png'
import thumbnail from '../../assets/thumbnail.png'
import booking from '../../assets/booking.png'

import { useState } from 'react';
import WorkSlideBtns from '../../component/WorkSlideBtns';

const projects = [
    {
        num: '01',
        category: 'Fullstack',
        title: 'project 1',
        description: "Learn how to create Netflix from scratch using ReactJS, Express, NodeJS, and MongoDB. Main fuction: Register, log in and search. Learn how to use the TMDb API to get movie listings",
        stack: [
            {
                name: 'React.Js'
            },
            {
                name: 'Express'
            },
            {
                name: 'Node.js'
            },
            {
                name: 'MongoDB'
            },
            {
                name: 'Tailwind.css'
            }
        ],
        image: thumbnail,
        live: '',
        github: ''
    },
    {
        num: '02',
        category: 'Frontend',
        title: 'project 2',
        description: "Build and Deploy a Modern Landing Page Using Tailwind CSS.",
        stack: [
            {
                name: 'React.js'
            },
            {
                name: 'Tailwind.css'
            },
        ],
        image: thumb2,
        live: '',
        github: ''
    },
    {
        num: '03',
        category: 'Fullstack',
        title: 'project 3',
        description: "Medical appointment booking website project built on React.Js, Node.JS (Express) and MySQL platform. Main functions: (the system has 4 main types of users: customers, doctors, support staff and admin) - Register, log in, collect information - CRUD (add, edit, delete) doctor, support staff, clinic, and specialty accounts - Create appointments for doctors, create medical posts - Schedule a medical examination.",
        stack: [
            {
                name: 'React.js'
            },
            {
                name: 'Scss'
            },
            {
                name: 'NodeJs(Express)'
            },
            {
                name: 'MySQL'
            },
        ],
        image: booking,
        live: '',
        github: ''
    }
]


function Work() {

    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex

        setProject(projects[currentIndex])
    }
    return ( 
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] order-2 xl:order-none'>
                        <div className='flex flex-col gap-[15px] h-[50%]'>
                            {/* outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>

                            {/* projects category */}
                            <h2 className='text-[42px] leading-none text-white font-bold group-hover:text-accent
                                transition-all duration-500 capitalize'
                            >
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className='text-white/60'>
                                {project.description}
                            </p>

                            {/* stacks */}
                            <ul className='flex gap-4'>
                                {
                                    project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className='text-xl text-accent'>
                                                {item.name}

                                                {index !== project.stack.length - 1 && ','}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            {/* boder */}
                            <div className='border border-white/20'></div>

                            {/* button */}
                            <div className='flex items-center gap-4'>
                                {/* live project button */}
                                <Link to={project.live}>
                                    <div 
                                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                        data-tooltip-id='bsArrow'
                                        data-tooltip-content="Live project"
                                    >
                                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                    </div>

                                    <Tooltip id='bsArrow' className="capitalize" />
                                </Link>

                                {/* live github button */}
                                <Link to={project.github}>
                                    <div 
                                        className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                        data-tooltip-id='bsArrow'
                                        data-tooltip-content="Github repository"
                                    >
                                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                    </div>

                                    <Tooltip id='bsArrow' className="capitalize" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((item, index) => {
                                    return (
                                        <SwiperSlide 
                                            key={index}
                                            className='w-full'
                                        >
                                            <div className='h-[460px] relative group flex justify-center items-center'>
                                                {/* overlay */}
                                                <div className='absolute top-0 bottom-0 w-full h-full
                                                    bg-black/10 z-10'></div>

                                                {/* img */}
                                                <div className='relative w-full h-full'>
                                                    <img src={item.image} className='object-cover w-full h-full' />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }

                            {/* slide buttons */}
                            <WorkSlideBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                                    z-20 w-full justify-between xl:w-max xl:justify-none" 
                                
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
                                    flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
     );
}

export default Work;