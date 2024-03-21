import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Results = ({name, age, weight, timesFeeded, temp, setReqType}) => {
  const [fromValMilk, setFromValMilk] = useState(0);
  const [fromValCereal, setFromValCereal] = useState(0);
  const [fromValFruits, setFromValFruits] = useState(0);
  const [fromValVegetables, setFromValVegetables] = useState(0);
  const [fromValProteins, setFromValProteins] = useState(0);

  const [toValMilk, setToValMilk] = useState(0);
  const [toValCereal, setToValCereal] = useState(0);
  const [toValFruits, setToValFruits] = useState(0);
  const [toValVegetables, setToValVegetables] = useState(0);
  const [toValProteins, setToValProteins] = useState(0);

  const [frequencyMilk, setFrequencyMilk] = useState(0);
  const [frequencyCereal, setFrequencyCereal] = useState(0);
  const [frequencyFruits, setFrequencyFruits] = useState(0);
  const [frequencyVegetables, setFrequencyVegetables] = useState(0);
  const [frequencyProteins, setFrequencyProteins] = useState(0);

  const ageVal = parseInt(age);
  const wt = parseInt(weight);

  const navigate = useNavigate();
  const handleSubmit = () => {
      setReqType('Recommendations');
      navigate('/recommendations');
  }

  const setVals = () => {
      switch(true) {
        case (ageVal <= 2) : 
              setFromValMilk('60ml');
              setToValMilk('120ml');
              setFrequencyMilk('Once every 3 hours');
    
              setFromValCereal('NA');
              setToValCereal('NA');
              setFrequencyCereal('NA');
    
              setFromValFruits('NA');
              setToValFruits('NA');
              setFrequencyFruits('NA');
    
              setFromValVegetables('NA');
              setToValVegetables('NA');
              setFrequencyVegetables('NA');
    
              setFromValProteins('NA');
              setToValProteins('NA');
              setFrequencyProteins('NA');
              break;
        case (ageVal > 2 && ageVal <= 4):
              setFromValMilk('120ml');
              setToValMilk('180ml');
              setFrequencyMilk('6 to 8 times');
    
              setFromValCereal('NA');
              setToValCereal('NA');
              setFrequencyCereal('NA');
    
              setFromValFruits('NA');
              setToValFruits('NA');
              setFrequencyFruits('NA');
    
              setFromValVegetables('NA');
              setToValVegetables('NA');
              setFrequencyVegetables('NA');
    
              setFromValProteins('NA');
              setToValProteins('NA');
              setFrequencyProteins('NA');
              break;
        case (ageVal > 4 && ageVal <= 6 && wt <= 5):
              setFromValMilk('120ml');
              setToValMilk('240ml');
              setFrequencyMilk('5 to 6 times');
    
              setFromValCereal('NA');
              setToValCereal('NA');
              setFrequencyCereal('NA');
    
              setFromValFruits('NA');
              setToValFruits('NA');
              setFrequencyFruits('NA');
    
              setFromValVegetables('NA');
              setToValVegetables('NA');
              setFrequencyVegetables('NA');
    
              setFromValProteins('NA');
              setToValProteins('NA');
              setFrequencyProteins('NA');
              break;
        case (ageVal > 4 && ageVal <= 6 && wt > 5):
              setFromValMilk('4 feedings per day');
              setToValMilk('6 feedings per day');
              setFrequencyMilk('-');
    
              setFromValCereal('3tbs(grain iron fortified cereal)');
              setToValCereal('5tbs(grain iron fortified cereal)');
              setFrequencyCereal('3 times');
    
              setFromValFruits('1tbs(plain, strained)');
              setToValFruits('2tbs(plain, strained)');
              setFrequencyFruits('1 to 2 times');
    
              setFromValVegetables('1tbs(plain, strained)');
              setToValVegetables('2tbs(plain, strained)');
              setFrequencyVegetables('1 to 2 times');
    
              setFromValProteins('1tbs(plain, strained)');
              setToValProteins('2tbs(plain, strained)');
              setFrequencyProteins('2 times');
              break;
        case (ageVal == 7):
              setFromValMilk('3 feedings per day');
              setToValMilk('5 feedings per day');
              setFrequencyMilk('-');
    
              setFromValCereal('3tbs(single grain iron fortified cereal)');
              setToValCereal('5tbs(single grain iron fortified cereal)');
              setFrequencyCereal('3 times');
    
              setFromValFruits('2tbs(plain, strained)');
              setToValFruits('3tbs(plain, strained)');
              setFrequencyFruits('2 times');
    
              setFromValVegetables('2tbs(plain, strained)');
              setToValVegetables('3tbs(plain, strained)');
              setFrequencyVegetables('2 times');
    
              setFromValProteins('1tbs(strained)');
              setToValProteins('2tbs(strained)');
              setFrequencyProteins('2 times');
              break;
        case (ageVal == 8):
              setFromValMilk('3 feedings per day');
              setToValMilk('5 feedings per day');
              setFrequencyMilk('-');
    
              setFromValCereal('5tbs(single grain cereal mixed with milk)');
              setToValCereal('8tbs(single grain cereal mixed with milk)');
              setFrequencyCereal('3 times');
    
              setFromValFruits('2tbs(strained or soft, mashed)');
              setToValFruits('3tbs(strained or soft, mashed)');
              setFrequencyFruits('2 times');
    
              setFromValVegetables('2tbs(strained, mashed, soft)');
              setToValVegetables('3tbs(strained, mashed, soft)');
              setFrequencyVegetables('2 times');
    
              setFromValProteins('NA');
              setToValProteins('NA');
              setFrequencyProteins('NA');
              break;
        case (ageVal == 9):
              setFromValMilk('3 feedings per day');
              setToValMilk('5 feedings per day');
              setFrequencyMilk('-');
    
              setFromValCereal('5tbs(any variety mixed with milk)');
              setToValCereal('8tbs(any variety mixed with milk)');
              setFrequencyCereal('3 times');
    
              setFromValFruits('2tbs(strained or soft, mashed)');
              setToValFruits('4tbs(strained or soft, mashed)');
              setFrequencyFruits('2 times');
    
              setFromValVegetables('2tbs(mashed, soft)');
              setToValVegetables('4tbs(mashed, soft)');
              setFrequencyVegetables('2 times');
    
              setFromValProteins('2tbs(tender, chopped)');
              setToValProteins('3tbs(tender, chopped)');
              setFrequencyProteins('2 times');
              break;
        case (ageVal > 9 && ageVal <= 12):
              setFromValMilk('3 feedings per day');
              setToValMilk('4 feedings per day');
              setFrequencyMilk('-');
    
              setFromValCereal('5tbs(any variety mixed with milk)');
              setToValCereal('8tbs(any variety mixed with milk)');
              setFrequencyCereal('3 times');
    
              setFromValFruits('2tbs(strained, cooked)');
              setToValFruits('4tbs(strained, cooked)');
              setFrequencyFruits('2 times');
    
              setFromValVegetables('2tbs(mashed, soft)');
              setToValVegetables('4tbs(mashed, soft)');
              setFrequencyVegetables('2 times');
    
              setFromValProteins('2tbs(finely chopped meat without bones)');
              setToValProteins('3tbs(finely chopped meat without bones)');
              setFrequencyProteins('2 times');
              break;
        default:
              setFromValMilk('NA');
              setToValMilk('NA');
              setFrequencyMilk('NA');
    
              setFromValCereal('NA');
              setToValCereal('NA');
              setFrequencyCereal('NA');
    
              setFromValFruits('NA');
              setToValFruits('NA');
              setFrequencyFruits('NA');
    
              setFromValVegetables('NA');
              setToValVegetables('NA');
              setFrequencyVegetables('NA');
    
              setFromValProteins('NA');
              setToValProteins('NA');
              setFrequencyProteins('NA');
      }
  }
  
  useEffect(() => {
     setVals();
  }, [age, weight]);

  return (
    <div className='w-full h-dvh text-xl text-center'>
       <table className='mt-8 mx-auto bg-slate-300'>
            <caption>{ age > 12 ? <h1 className='mb-4 text-red-500'> Babies above 1 year are not considered as infants</h1> : <h1 className='font-bold mb-4'>{`Results for baby ${name}`}</h1>}</caption>
            <tbody>
            <tr>
                <th className='border-2 border-slate-950 p-4 bg-slate-400'>Food Item</th>
                <th className='border-2 border-slate-950 p-2 bg-slate-400'>From(quantity)</th>
                <th className='border-2 border-slate-950 p-2 bg-slate-400'>To(quantity)</th>
                <th className='border-2 border-slate-950 p-2 bg-slate-400'>Frequency(per day)</th>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>Milk</td>
                <td className='border-2 border-slate-950 p-2'>{fromValMilk}</td>
                <td className='border-2 border-slate-950 p-2'>{toValMilk}</td>
                <td className='border-2 border-slate-950 p-2'>{frequencyMilk}</td>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>Cereal</td>
                <td className='border-2 border-slate-950 p-2'>{fromValCereal}</td>
                <td className='border-2 border-slate-950 p-2'>{toValCereal}</td>
                <td className='border-2 border-slate-950 p-2'>{frequencyCereal}</td>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>Fruits</td>
                <td className='border-2 border-slate-950 p-2'>{fromValFruits}</td>
                <td className='border-2 border-slate-950 p-2'>{toValFruits}</td>
                <td className='border-2 border-slate-950 p-2'>{frequencyFruits}</td>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>Vegetables</td>
                <td className='border-2 border-slate-950 p-2'>{fromValVegetables}</td>
                <td className='border-2 border-slate-950 p-2'>{toValVegetables}</td>
                <td className='border-2 border-slate-950 p-2'>{frequencyVegetables}</td>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>Proteins</td>
                <td className='border-2 border-slate-950 p-2'>{fromValProteins}</td>
                <td className='border-2 border-slate-950 p-2'>{toValProteins}</td>
                <td className='border-2 border-slate-950 p-2'>{frequencyProteins}</td>
            </tr>
            </tbody>
       </table>
       <button onClick={() => handleSubmit()} className='w-full sm:w-1/6 rounded-md p-1.5 mt-12 border-2 bg-sky-600 text-slate-100 border-gray-950 text-lg'>Move to Recommendations</button>
    </div>
  )
}
