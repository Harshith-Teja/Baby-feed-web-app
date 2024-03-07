import React from 'react'

export const Predict = () => {
  return (
    <form className='w-full h-dvh flex flex-col sm:items-center sm:text-xl p-8'>
        <h1>Answer the below questions</h1>
        <label htmlFor="q1" className='mt-2'>Question 1</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q1"
        />
        
        <label htmlFor="q2" className='mt-2'>Question 2</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q2"
        />

        <label htmlFor="q3" className='mt-2'>Question 3</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q3"
        />
    </form>
  )
}
