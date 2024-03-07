import React from 'react'

export const Footer = () => {

    const today = new Date();
  return (
    <footer className='bg-sky-400 text-slate-100 text-xl text-center p-2'>
        Copyright &copy; {today.getFullYear()}
    </footer>
  )
}
