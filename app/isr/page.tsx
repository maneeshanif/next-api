import React from 'react'



const getPosts = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any',{
        next: { revalidate: 5 }
        // revalidate: "5" mean it will rebuild your app on every 5 sec bcoz in static rendering next will make a build once but your data is not changed on every reload so the ISR come 

    })
    const data = await res.json()
    console.log(data)
    return data;
    

}

const About = async () => {
 
    const posts = await getPosts()

  return (
    <div className='h-screen flex justify-center flex-col space-y-5 items-center bg-gray-200'>
        <h1 className='text-6xl text-blue-950 font-bold'>server side ISR joke</h1>
 <p>{posts.setup}</p>
 <p>{posts.delivery}</p>
<p className='text-red-500 bg-yellow-300'>remember : you got new joke on every 5 sec  refresh bcoz in static u captured u your app but cant able to refetch again so here isr come in </p>
<p>u will call this ISR rendering </p>
    </div>
  )
}

export default About
