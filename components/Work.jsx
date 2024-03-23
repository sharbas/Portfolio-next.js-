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
        image:'/assets/work/3.png',
        category:'react js',
        name:'WeTravel website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/4.png',
        category:'react js',
        name:'NutirFreshFruit website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/2.png',
        category:'next js',
        name:'OpenAi website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/1.png',
        category:'next js',
        name:'Netflix website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/3.png',
        category:'Olx js',
        name:'WeTravel website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/4.png',
        category:'next js',
        name:'WeTravel website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/1.png',
        category:'next js',
        name:'MERN Auth website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/3.png',
        category:'next js',
        name:'TodoList website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
    {
        image:'/assets/work/2.png',
        category:'Zineth js',
        name:'WeTravel website',
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      `,
          link:'/',
          github:'/'

    },
]

function Work() {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container x-auto'>
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>Loream  ipusum dolor sit amet onsectueru adiicsicing elit.</p>
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