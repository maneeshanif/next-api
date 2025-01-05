import React from 'react'

const page = ({ params }:{ params: { id: string, profileid: string }}) => {
    const { id, profileid } = params;
  return (
    <div>
      <h1>User ID: {id}, Profile ID: {profileid}</h1>
    </div>
  )
}

export default page
