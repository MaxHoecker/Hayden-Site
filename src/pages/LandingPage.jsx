import React from 'react'

export default function LandingPage() {
  return (
    <div className='min-w-screen w-screen min-h-screen h-screen bg-sky-50 flex justify-center content-center items-center'>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-5xl h-fit'>Hayden Brewer</h1>
          <div className='flex flex-col h-fit text-right'>
            <a href='/about'>About Me</a>
            <a href='/works'>My Work</a>
            <a href='/resume'>Resume</a>
            <a href='/contact'>Contact Me</a>
          </div>
          <img src="./cover.png"/>
        </div>
      </div>
    </div>
  )
}
