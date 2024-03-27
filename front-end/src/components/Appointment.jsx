import React from 'react'

export const Appointment = () => {

  const doctorDetails = [
    {
      "id": 1,
      "name": "Dr. Vijay",
      "hospital": "XYZ hospital",
      "timings": "Timings: 9:00am-10:00am, 2:00am-3:00am, 5:00pm-6:00pm",
      "call": "cell: 9898989898"
    },
    {
      "id": 2,
      "name": "Dr. Vijay",
      "hospital": "XYZ hospital",
      "timings": "Timings: 9:00am-10:00am, 2:00am-3:00am, 5:00pm-6:00pm",
      "call": "cell: 9898989898"
    },
    {
      "id": 3,
      "name": "Dr. Vijay",
      "hospital": "XYZ hospital",
      "timings": "Timings: 9:00am-10:00am, 2:00am-3:00am, 5:00pm-6:00pm",
      "call": "cell: 9898989898"
    }
  ]
  return (
    <div className='w-full h-dvh'>
        <section className='flex flex-col items-center text-lg'>
            {/* <h1 className='mt-8'>Doctor's Appointment</h1> */}
            {doctorDetails.map((doctor) => (
              <article key={doctor.id} className='w-2/3 transition ease-in-out delay-300 p-6 m-4 border-2 rounded-lg border-black bg-slate-300 shadow-2xl hover:scale-105  hover:border-sky-500'>
                <h1 className='my-1 font-semibold text-xl'>{doctor.name}</h1>
                <h2 className='my-1 font-medium text-sm'>{doctor.hospital}</h2>
                <h3 className='my-1 text-md'>{doctor.timings}</h3>
                <h3 className='my-1 text-md'>{doctor.call}</h3>
              </article>
            ))}
            
        </section>
    </div>
  )
}
