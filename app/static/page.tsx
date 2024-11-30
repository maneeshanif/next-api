import React from 'react'



const getPosts = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any',{
        cache: "force-cache" // indiactes that next will make a build of your app  whcih mean it will capture a snapshot of your app  and serve it to the user  and u will get your feed even u dont have internet  but remember u will get the same feed bcoz the refresh will not make a new request bcoz this page is static
    })
    const data = await res.json()
    // console.log(data)
    return data;
    

}

const About = async () => {
 
    const posts = await getPosts()

  return (
    <div className='h-screen flex justify-center flex-col space-y-5 items-center bg-gray-200'>
        <h1 className='text-6xl text-blue-950 font-bold'>server side static joke</h1>
 <p>{posts.setup}</p>
 <p>{posts.delivery}</p>
<p className='text-red-500 bg-yellow-300'>remember : you got your feed even u dont have internet bcoz in static rendering next make a build of your app</p>
<p>u will call this server side static rendering </p>
    </div>
  )
}

export default About
