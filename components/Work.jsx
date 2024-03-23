'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Pagination} from 'swiper/modules'
import ProjectCard from './ProjectCard'


const projectData=[
    {
        image:'/assets/projects/wetravel.jpeg',
        category:'react js',
        name:'WeTravel website',
        description:`Developed We Travel, a travel booking platform that provides smooth functionality for users, hotel managers and admin.
      `,
          link:'https://travelwithwetravel.website',
          github:'https://github.com/sharbas/Second-Project.git'

    },
    {
        image:'/assets/projects/openai2.jpeg',
        category:'react js',
        name:'OpenAi website',
        description:`Developed an AI-Based Finance Health Checker during a hackathon, leveraging OpenAI for intelligent data analysis and insights generation.
      `,
          link:'',
          github:'https://github.com/sharbas/Hackathon-OpenAi.git'

    },
    {
        image:'/assets/projects/nutrifreshfruit.jpeg',
        category:'ejs (template engine)',
        name:'NutirFreshFruit website',
        description:`Developed NutriFreshFruit, an e-commerce platform focused on providing fresh fruit, enhancing accessibility to nutritious options for customers.
      `,
          link:'https://nutrifreshfruit.store/',
          github:'https://github.com/sharbas/NEW-PROJECT.git'

    },
   
    {
        image:'/assets/projects/portfolio.jpeg',
        category:'next js',
        name:'Portfolio',
        description:`Employed Next.js for developing a static portfolio, featuring comprehensive listings of skills and projects to highlight expertise and achievements efficiently.
      `,
          link:'',
          github:'https://github.com/sharbas/Portfolio-next.js-.git'

    },
    {
        image:'/assets/projects/olx.png',
        category:'react js',
        name:'Olx clone',
        description:`Created an OLX clone using React and Firebase. Demonstrated competence in implementing real-time databases and seamless API integration.     
      `,
          link:'',
          github:'https://github.com/sharbas/Olx-Clone.git'

    },
    {
        image:'/assets/projects/netflix1.jpg',
        category:'react js',
        name:'Netflix clone',
        description:`Created a Netflix-inspired mini-project using React with a focus on enhancing user experience.
      `,
          link:'',
          github:'https://github.com/sharbas/React_Netflix.git'

    },
    {
        image:'/assets/projects/mernauth.png',
        category:'react js',
        name:'MERN Auth',
        description:`Developed a MERN authentication app with Redux and JWT for secure user authentication.

      `,
          link:'',
          github:'https://github.com/sharbas/MernAuth.git'

    },
    {
        image:'/assets/projects/todolist1.jpeg',
        category:'react js',
        name:'TodoList App',
        description:`Developed a React-based front end for a versatile to-do list application. Enabled users to efficiently manage tasks, including adding, editing and deleting items, while also providing visibility into completed tasks
      `,
          link:'',
          github:'https://github.com/sharbas/todo_react.git'

    },
  
]

function Work() {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container x-auto'>
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
            <h2 className='section-title mb-4'>Latest Projects</h2>
<p className='subtitle mb-8'>Explore our latest projects showcasing innovative solutions and cutting-edge technologies.</p>

               <Link href='/projects'><Button>All Projects</Button></Link> 
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{640:{
                    slidesPerView:2
                }}} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                    {/* show only first 4 projects for the slides */}
                    {projectData.slice(0,4).map((project,index)=>{
                        return <SwiperSlide key={index}>
                       <ProjectCard project={project}/>
                        </SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work