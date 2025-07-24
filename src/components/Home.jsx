import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center py-12 w-full'>
        <div className='w-24 h-24 md:w-32 md:h-32 mb-6'>
            <img src="/images/profile.jpg" alt="profile" className='w-full h-full object-cover rounded-full'/>
        </div>
        <div className='text-center'>
            <h1 className='text-4xl md:text-8xl'>Hello there, </h1>
            <h2 className='text-xl md:text-5xl'>I am John Doe.</h2>
        </div>
        <div>
            <p className='text-base md:text-xl mt-2'>I am a web developer who focuses on building responsive web-apps</p>
            <p className='text-base md:text-xl mt-2'>I make use of PERN stack i.e. PostgreSQL, Express, React and Node.js.</p>
        </div>
    </div>
  )
}

export default Home