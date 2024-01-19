import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='min-w-screen w-screen min-h-screen h-screen bg-backgroundColor flex justify-center content-center items-center'>
      <div className='flex gap-10 max-md:flex-col max-md:flex-col-reverse'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl h-fit text-right mb-5'>Hayden Brewer</h1>
          <div className='flex flex-col h-fit text-right'>
            <Link className='text-xl' to='/about'>About Me</Link>
            <Link className='text-xl' to='/works'>My Work</Link>
            <Link className='text-xl' to='/resume'>Resume</Link>
            <Link className='text-xl' to='/contact'>Contact Me</Link>
          </div>
        </div>
        <img className='w-96 rounded-3xl' src="./cover.png"/>
      </div>
    </div>
  )
}
