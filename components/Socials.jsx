'use client'
import {
RiYoutubeFill,
RiLinkedinFill,
RiGithubFill,
RiFacebookFill,
RiInstagramFill,
RiSnapchatFill,
} from 'react-icons/ri'
import React from 'react'

import Link from 'next/link'

const icons=[
  {
    path:'https://youtube.com/@mohammedsharbas6110?si=-0i3daykfg7NWdgw',
    name:<RiYoutubeFill/>
  },
  {
    path:'https://www.linkedin.com/in/sharbas-mohammed-1567a3200/',
    name:<RiLinkedinFill/>
  },
  {
    path:'https://github.com/sharbas',
    name:<RiGithubFill/>
  },
  // {
  //   path:'/',
  //   name:<RiFacebookFill/>
  // },
  {
    path:'https://www.instagram.com/sharbas_mohd_?igsh=MXBleDg2ZWp0OXRl',
    name:<RiInstagramFill/>
  },
  
]

function Socials({containerStyles,iconsStyles}) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index)=>{
        return <Link href={icon.path} key={index} >
          <div className={`${iconsStyles}`}>
            {icon.name}
          </div>
        </Link>
      })}
    </div>
  )
}

export default Socials