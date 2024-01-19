import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className='min-w-screen min-h-screen bg-backgroundColor flex justify-center content-center items-center flex-col'>
      <div className='flex gap-10 max-md:flex-col max-md:flex-col-reverse '>
        <div className='flex flex-col justify-center'>
          <h1 className='text-5xl text-right max-md:text-center mb-5'>Hayden Brewer</h1>
          <div className='flex flex-col items-end max-md:items-center'>
            <Link className='text-xl w-fit' to='/about'>About Me</Link>
            <Link className='text-xl w-fit' to='/works'>My Work</Link>
            <a className='text-xl w-fit' href='/resume.pdf'>Resume</a>
          </div>
        </div>
        <div className='center'>
          <img className='w-96 rounded-3xl md:mt-20' src="./cover.png"/>
          <a className='text-sm text-center block m-5 text-slate-200 max-md:hidden' href="mailto:hayden.brewer@maine.edu">hayden.brewer@maine.edu</a>
        </div>
      </div>
      <a className='text-sm w-fit text-center block m-10 text-slate-200 md:hidden' href="mailto:hayden.brewer@maine.edu">hayden.brewer@maine.edu</a>
    </div>
  )
}
