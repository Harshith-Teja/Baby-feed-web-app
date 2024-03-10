import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl shadow-blue-500/50 text-white p-3 sm:text-xl'>
        <ul className='grid grid-rows-2 grid-flow-col gap-2 sm:flex justify-around'>
            <Link to="/questionnaire"><li className='hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg'>Questionnaire</li></Link>
            <Link to="/results"><li className='hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg'>Results</li></Link>
            <Link to="/recommendations"><li className='hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg'>Recommendations</li></Link>
            <Link to="/predict"><li className='hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg'>Predict Disease</li></Link>
            <Link to="/appointment"><li className='hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg'>Doctor's Appointment</li></Link>
        </ul>
    </nav>
  )
}
