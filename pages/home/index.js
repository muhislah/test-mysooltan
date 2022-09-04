import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/module/Footer'
import Headers from '../../components/module/Headers'

export default function Home({post}) {

  return (
    < >
      <Headers />
      <main>
        <div>{JSON.stringify(post)}</div>
        <Image src={post.avatar_url} alt="example" width={'200px'} height="200px" className='rounded-full'/>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const data = async () => {
    try {
      const result = await fetch('https://api.github.com/users/muhislah')
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
