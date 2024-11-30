"use client"
import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div className='h-screen flex justify-center flex-col space-y-5 items-center bg-yellow-500'>
      <p>Something went wrong error found this is custom error page of next js app </p>
      <Link href="/">mujhe ghar jana hn 🏠</Link>
    </div>
  )
}

export default Error
