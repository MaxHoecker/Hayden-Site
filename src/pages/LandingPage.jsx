import React from 'react'

export default function LandingPage() {
  return (
    <div className='min-w-screen w-screen min-h-screen h-screen bg-sky-50 flex justify-center content-center items-center'>
      <div className='grid grid-cols-2 gap-10'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl h-fit text-right mb-5'>Hayden Brewer</h1>
          <div className='flex flex-col h-fit text-right'>
            <a className='text-xl' href='/about'>About Me</a>
            <a className='text-xl' href='/works'>My Work</a>
            <a className='text-xl' href='/resume'>Resume</a>
            <a className='text-xl' href='/contact'>Contact Me</a>
          </div>
        </div>
          <img className='w-96 rounded-3xl' src="./cover.png"/>
      </div>
    </div>
  )
}
