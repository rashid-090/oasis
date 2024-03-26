import React from 'react'
import { Link } from 'react-router-dom'

const ServiceDetails = () => {
  return (
    <main>
        <div className='w-11/12 xl:w-10/12 mx-auto flex flex-col md:flex-row gap-5'>
            {/* navigation */}
            <div className='md:basis-1/3 '>
                <div className='flex flex-col'>
                  <Link>topic</Link>
                  <Link>topic</Link>
                  <Link>topic</Link>
                  <Link>topic</Link>
                </div>
            </div>
            {/* content */}
            <div className='md:basis-2/3 '></div>
        </div>
    </main>
  )
}

export default ServiceDetails