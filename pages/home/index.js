import React, { useEffect, useState } from 'react'

export default function Home({post}) {

  return (
    <>
      <div>Home</div>
      <div>
        {JSON.stringify(post)}
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const final =  await result.json()
      return final
    } catch (error) {
      return error
    }
  }
  const post = await data()
  return {
    props : {
      post : post
    }
  }
  
}
