import React from 'react'

export const Appointment = () => {

  const doctorDetails = [
    {
      "id": 1,
      "name": "Dr. Vijay",
      "hospital": "XYZ hospital",
      "timings": "Timings: 9:00am-10:00am, 2:00am-3:00am, 5:00pm-6:00pm",
      "call": "cell: 989898989"
    },
    {
      "id": 2,
      "name": "Dr. Anand",
      "hospital": "ABC hospital",
      "timings": "Timings: 7:00am-9:00am, 1:00am-2:00am, 3:00pm-5:00pm",
      "call": "cell: 989898989"
    },
    {
      "id": 3,
      "name": "Dr. Sharath",
      "hospital": "DEF hospital",
      "timings": "Timings: 9:00am-10:00am, 12:00am-2:00am, 4:00pm-5:00pm",
      "call": "cell: 989898989"
    },
    {
      "id": 4,
      "name": "Dr. ChandraShekhar",
      "hospital": "DEF hospital",
      "timings": "Timings: 9:00am-11:00am, 1:00am-2:00am, 3:00pm-4:00pm",
      "call": "cell: 989898989"
    },
    {
      "id": 5,
      "name": "Dr. Pasha",
      "hospital": "ABC hospital",
      "timings": "Timings: 9:00am-10:00am, 12:00am-2:00am, 4:00pm-5:00pm",
      "call": "cell: 989898989"
    }
  ]
  return (
    <div className='w-full h-dvh'>
        <section className='flex flex-col items-center text-lg'>
            {/* <h1 className='mt-8'>Doctor's Appointment</h1> */}
            {doctorDetails.map((doctor) => (
              <article key={doctor.id} className='w-2/3 transition ease-in-out delay-300 p-6 m-4 border-2 rounded-lg border-black bg-slate-300 shadow-2xl hover:scale-105  hover:border-sky-500'>
                <h1 className='my-1 font-semibold text-xl'>{doctor.name}</h1>
                <address className='my-1 font-medium text-sm'>
                 <h3>{doctor.hospital}</h3> 
                <h3 className='my-1 text-md'>{doctor.timings}</h3>
                <h3 className='my-1 text-md'> <a href={`tel:+91${doctor.call}`}>{doctor.call}</a> </h3>
                </address>
              </article>
            ))}
            
        </section>
    </div>
  )
}
