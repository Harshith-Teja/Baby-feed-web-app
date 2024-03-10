import React from 'react'

export const Results = () => {
  return (
    <div className='w-full h-dvh'>
       <table className='mt-8 mx-auto '>
            <tbody>
            <tr>
                <th className='border-2 border-slate-950 p-2'>Food Item</th>
                <th className='border-2 border-slate-950 p-2'>From</th>
                <th className='border-2 border-slate-950 p-2'>To</th>
                <th className='border-2 border-slate-950 p-2'>Label</th>
                <th className='border-2 border-slate-950 p-2'>Calculated amount</th>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>value 1</td>
                <td className='border-2 border-slate-950 p-2'>value 2</td>
                <td className='border-2 border-slate-950 p-2'>value 3</td>
                <td className='border-2 border-slate-950 p-2'>value 4</td>
                <td className='border-2 border-slate-950 p-2'>value 5</td>
            </tr>
            </tbody>
       </table> 
    </div>
  )
}
