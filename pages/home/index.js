import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/module/Footer'
import Headers from '../../components/module/Headers'

export default function Home({ post }) {

  return (
    < >
      <Headers />
      <main className='py-3 px-28 w-100 border'>
        <div className='flex w-100 my-20 justify-center align-center gap-3'>
          <div className='flex-1 flex justify-end'>
            <div className="">
              <Image src={'/dashboard.svg'} alt="dashboard" width={"400px"} height="400px" className="" />
            </div>
          </div>
          <div className='flex-1'>
            <h1 className='font-serif text-6xl font-bold'>Why Shy://</h1>
            <p className='text-slate-500 mt-2 lg:w-3/4 md:w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae quod repellendus magnam numquam! Blanditiis debitis illo nulla eaque facilis autem porro nemo culpa, sit illum similique ab amet exercitationem explicabo natus libero possimus consequatur soluta laborum nihil consequuntur animi. Beatae quisquam totam vitae debitis quibusdam voluptate temporibus accusantium sunt.</p>
          </div>
        </div>
        <div className='flex w-100 my-10 flex-col items-center'>
          <div className='text-center'>
            <h1 className='text-center text-slate-500'>You can connected with these accounts !</h1>
          </div>
          <div className='flex gap-3 align-center mt-5'>
            <button className='border border-red-700 rounded-md px-3 py-2 flex items-center hover:bg-red-700 [&>*]:hover:text-white hover:fill-white transition-all'>
              <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
              </svg>
              <span className='ml-3'>Github</span>
            </button>
            <button className='border border-red-700 rounded-md px-3 py-2 flex items-center hover:bg-red-700 [&>*]:hover:text-white hover:fill-white transition-all'>
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5831 4.63507C4.03082 4.63507 3.66768 5.07472 3.77202 5.61706L6.22804 18.383C6.33238 18.9253 6.86468 19.3649 7.41696 19.3649H16.583C17.1353 19.3649 17.6676 18.9253 17.7719 18.383L20.2279 5.61706C20.3323 5.07472 19.9691 4.63507 19.4168 4.63507H4.5831ZM13.5449 14.3649L14.4549 9.63507H9.54504L10.455 14.3649H13.5449Z"
                  fill="currentColor"
                />
              </svg><span className='ml-3'>BitBucket</span>
            </button>
            <button className='border border-red-700 rounded-md px-3 py-2 flex items-center hover:bg-red-700 [&>*]:hover:text-white hover:fill-white transition-all'>
              <svg width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path fillRule="nonzero" d="M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 0 1 .747.048l3.367 10.945a.5.5 0 0 1-.174.544L12 21.958 1.816 14.183a.5.5 0 0 1-.174-.544L5.009 2.694a.4.4 0 0 1 .747-.048L8.644 9h6.712z" />
                </g>
              </svg><span className='ml-3'>Gitlab </span>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const data = async () => {
    try {
      const result = await fetch('https://api.github.com/users/muhislah')
      const final = await result.json()
      return final
    } catch (error) {
      return error
    }
  }
  const post = await data()
  return {
    props: {
      post: post
    }
  }

}
