import React from 'react'



const getPosts = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any',{
        cache:'no-store'  // mean u will get new joke on every refresh 
    })
    const data = await res.json()
    console.log(data)
    return data;
    

}

const About = async () => {
 
    const posts = await getPosts()

  return (
    <div className='h-screen flex justify-center flex-col space-y-5 items-center bg-gray-200'>
        <h1 className='text-6xl text-blue-950 font-bold'>server side dynamic joke</h1>
 <p>{posts.setup}</p>
 <p>{posts.delivery}</p>
<p className='text-red-500 bg-yellow-300'>remember : you got new joke on every refresh</p>
<p>u will call this server side dynamic rendering </p>
    </div>
  )
}

export default About
