import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='min-w-screen w-screen min-h-screen h-screen bg-backgroundColor flex justify-center content-center items-center'>
      <div className='flex gap-10 max-md:flex-col max-md:flex-col-reverse'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl text-right mb-5'>Hayden Brewer</h1>
          <div className='flex flex-col items-end'>
            <Link className='text-xl w-fit' to='/about'>About Me</Link>
            <Link className='text-xl w-fit' to='/works'>My Work</Link>
            <Link className='text-xl w-fit' to='/resume'>Resume</Link>
          </div>
        </div>
        <div className='center'>
          <img className='w-96 rounded-3xl pb-5' src="./cover.png"/>
          <a className='text-xl w-full text-center block' href="mailto:hayden.brewer@maine.edu">hayden.brewer@maine.edu</a>
        </div>
      </div>
    </div>
  )
}
