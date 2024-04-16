import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {ProductsData} from '../../components/constant/data'

const sidebar = () => {
    const navigate = useNavigate('');
    const location = useLocation();
    
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:gap-5 gap-8'>
        <div className='flex flex-col gap-y-[0.10rem] h-fit bg-primary  font-semibold text-sm xl:text-base uppercase'>
               {ProductsData?.map((url,i)=>(
                 <Link to={`/services/${url?.url}`} key={i} className={`${location.pathname === `/services/${url.url}` ? 'bg-primary text-white' : 'bg-gray-200 text-primary'} w-full px-7 py-3  border-primary`}>{url?.title}</Link>
               ))}
                    {/* <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>INDUSTRIAL HEAT EXCHANGER MANUFACTURER</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>INDUSTRIAL CHILLERS</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>RADIATOR CORE SUPPLIERS</Link>
                    <Link className={`w-full px-7 py-3  border-primary bg-gray-200 text-primary`}>BRAKE LININGS</Link> */}

        </div>
        <div className='h-fit  bg-primary text-white px-7 md:px-4 md:py-4 xl:p-10 py-10 flex flex-col gap-5'>
            <h3 className='text-2xl xl:text-3xl font-semibold'>WE ARE HERE TO HELP</h3>
            <p className='text-sm '>If you're facing any challenges or need assistance, feel free to reach out to us. Our team is dedicated to providing support and solutions tailored to your needs. Whether it's guidance, advice, or practical assistance, we're just a message away. Don't hesitate to get in touch!</p>
            <Link to={'/contact-us'} className='bg-white text-primary text-base uppercase font-medium w-full h-10 xl:h-12 hover:underline grid place-items-center rounded-3xl'>contact us for help</Link>
        </div>
    </div>
  )
}

export default sidebar