import { useNavigate } from 'react-router-dom';

export const Questionnaire = ({name, age, weight, timesFeeded, temp, setName, setAge, setWeight, setTimesFeeded, setTemp, setReqType}) => {

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setReqType('Results');
        navigate('/results');
    }
  return (
    <form onSubmit={handleSubmit} className='w-full h-dvh flex flex-col sm:items-center sm:text-xl p-8'>
        <h1>Answer the below questions</h1>
        <label htmlFor="q1" className='mt-2'>Name of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center"
            autoComplete='off'
            type="text" 
            id="q1"
            placeholder="Enter baby's name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="q2" className='mt-2'>Age of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center"
            autoComplete='off'
            type="text" 
            id="q2"
            placeholder="Enter age(in months)"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="q3" className='mt-2'>Weight of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center"
            autoComplete='off'
            type="text" 
            id="q3"
            placeholder="Enter weight(in kgs)"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="q4" className='mt-2'>No of times the baby is feeded:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center"
            autoComplete='off'
            type="text" 
            id="q4"
            placeholder='Enter times feeded(per day)'
            required
            value={timesFeeded}
            onChange={(e) => setTimesFeeded(e.target.value)}
        />

        <label htmlFor="q5" className='mt-2'>Current temperature of the baby:</label>
        <input 
            className="w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2  border-gray-950 text-center"
            autoComplete='off'
            type="text" 
            id="q5"
            placeholder="Enter temp(in °F)"
            required
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
        />

        <button type='submit' className='w-full sm:w-1/6 rounded-md p-1.5 my-6 border-2 bg-sky-600 text-slate-100 border-gray-950 text-center'>Submit</button>
    </form>
  )
}
