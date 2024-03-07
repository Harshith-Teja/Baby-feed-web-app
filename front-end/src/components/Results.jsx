import React from 'react'

export const Results = () => {
  return (
    <div className='w-full h-dvh'>
       <table className='mt-8 mx-auto '>
            <tr>
                <th className='border-2 border-slate-950 p-2'>Heading 1</th>
                <th className='border-2 border-slate-950 p-2'>Heading 2</th>
                <th className='border-2 border-slate-950 p-2'>Heading 3</th>
                <th className='border-2 border-slate-950 p-2'>Heading 4</th>
            </tr>
            <tr>
                <td className='border-2 border-slate-950 p-2'>value 1</td>
                <td className='border-2 border-slate-950 p-2'>value 2</td>
                <td className='border-2 border-slate-950 p-2'>value 3</td>
                <td className='border-2 border-slate-950 p-2'>value 4</td>
            </tr>
       </table> 
    </div>
  )
}
