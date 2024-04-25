import React from 'react';
import {BlogData} from '../../components/constant/data'
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <main className='w-11/12 2xl:w-10/12 mx-auto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {BlogData?.map((data,i)=>(
                <div className='flex flex-col gap-4 group bg-gray-100' key={i}>
                    <div className='relative overflow-hidden'><img className='object-cover group-hover:scale-110 duration-200' src={data.img} alt={data.title} /></div>
                    <div className='p-5 flex flex-col gap-4 capitalize text-lg xl:text-xl'>
                        <h1 className='font-bold text-primary'>{data.title}</h1>
                        <p className='text-sm'>{data.shortdesc.slice(0,120)}...</p>
                        <Link to={`/blog/${data.url}`} className='text-sm bg-primary hover:bg-blue-600 duration-150 text-white py-2 px-4 w-fit rounded-full'>Learn more</Link>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}

export default Blogs