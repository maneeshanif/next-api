import React from 'react'
import Link from 'next/link'

const notfound = () => {
  return (
    <div className='h-screen flex justify-center flex-col space-y-5 items-center bg-fuchsia-500'>
      <h1>munaah tume yahan 404 k ilawa kuch nhi milne wala i am really sorry for that :) </h1>
      <p>🤔 plese check the url </p>
      <p> app abhi not found page peh ho 👀</p>
      <Link href="/">mujhe ghar jana hn 🏠</Link>
    </div>
  )
}

export default notfound
