import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Logo() {
  return (
   <Link href='/'>
   <Image src='/assets/profilelogo1.svg' width={54} height={54} priority alt=''/> 
   </Link>
  )
}

export default Logo