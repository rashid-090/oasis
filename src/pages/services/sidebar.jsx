import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import {ProductsData} from '../../components/constant/data'

const sidebar = () => {
    const navigate = useNavigate('');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-5 gap-8'>
        <div className='flex flex-col gap-y-[0.10rem] h-fit bg-primary  font-semibold text-lg uppercase'>
               
                    <Link className={`w-full px-7 py-3  border-primary bg-primary text-gray-200`}>CONDENSER COIL MANUFACTURER</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>INDUSTRIAL HEAT EXCHANGER MANUFACTURER</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>INDUSTRIAL CHILLERS</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>RADIATOR CORE SUPPLIERS</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>BRAKE LININGS</Link>

        </div>
        <div className='hidden  bg-primary text-white px-7 md:px-4 md:py-4 xl:p-10 py-10  md:flex flex-col gap-5'>
            <h3 className='text-2xl xl:text-3xl font-semibold'>WE ARE HERE TO HELP</h3>
            <p className='text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Quis ipsum suspendisse
            ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.</p>
            <Link to={'/contact-us'} className='bg-white text-primary text-base uppercase font-medium w-full h-10 xl:h-12 hover:underline grid place-items-center rounded-3xl'>contact us for help</Link>
        </div>
    </div>
  )
}

export default sidebar