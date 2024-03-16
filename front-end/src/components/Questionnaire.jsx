import React from 'react'

export const Questionnaire = ({name, age, weight, timesFeeded, temp, setName, setAge, setWeight, setTimesFeeded, setTemp}) => {
  return (
    <form className='w-full h-dvh flex flex-col sm:items-center sm:text-xl p-8'>
        <h1>Answer the below questions</h1>
        <label htmlFor="q1" className='mt-2'>Name of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q1"
            value={name}
            onChange={() => setName(e.target.value)}
        />
        
        <label htmlFor="q2" className='mt-2'>Age of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q2"
            value={age}
            onChange={() => setAge(e.target.value)}
        />

        <label htmlFor="q3" className='mt-2'>Weight of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q3"
            value={weight}
            onChange={() => setWeight(e.target.value)}
        />

        <label htmlFor="q4" className='mt-2'>No of times the baby is feeded(per day):</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950"
            type="text" 
            id="q4"
            value={timesFeeded}
            onChange={() => setTimesFeeded(e.target.value)}
        />

        <label htmlFor="q5" className='mt-2'>Current temperature of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2  border-gray-950"
            type="text" 
            id="q5"
            value={temp}
            onChange={() => setTemp(e.target.value)}
        />
    </form>
  )
}
