import React from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {ServiceData,ProductsData} from '../../components/constant/data'

const Services = () => {
  const navigate = useNavigate('');
  return (
    <main>
        <div className='bg-prdabg w-full bg-cover bg-bottom aspect-auto lg:aspect-[20/7]'>
            <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
              <h1 className='text-3xl md:text-5xl 2xl:text-7xl font-bold'>WHAT WE DO BEST ?</h1>
              <p className='text-sm md:text-base xl:text-lg 2xl:text-xl font-normal text-gray-200'>IT IS ABOUT PRECISION AND DIAMOND QUALITY ENGINEERING WHEN IT COMES<br className='hidden md:block'/>
                TO OUR MANUFACTURING. WE GIVE YOU THE BEST HVAC AND BRAKING SOLUTIONS<br className='hidden md:block'/>
                FROM BRAKE LININGS, CONDENSERS, RADIATORS, HEAT EXCHANGERS, AND CHILLERS.</p>
            </div>
        </div>
        {/* services */}
        <div className='w-11/12 sm:w-10/12 md:w-11/12 lg:w-9/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 xl:gap-y-14  py-10 xl:py-20'>
        {ProductsData?.map((item,i)=>(
                    <div key={i} className={`text-left bg-[#ededed]   rounded-[2rem] overflow-hidden border-r-[9px] border-b-[9px] border-primary`}>
                        <img className="h-52 xl:h-60 w-full object-cover" loading='lazy' src={item.img} alt={item.title} />
                        <div className="p-5 flex flex-col gap-y-4">
                            <h2 className="text-lg xl:text-xl font-bold uppercase text-primary">{item.title}</h2>
                            <p className="text-xs xl:text-sm font-medium text-secondary">{item.descption.slice(0,220)}.....</p>
                            <Link onClick={() => navigate(`/products/${item.url}`)} className="bg-primary hover:bg-blue-600 text-white w-fit px-6 py-2 rounded-full uppercase text-sm md:text-base font-medium ml-auto">read more</Link>
                        </div>
                    </div>
            ))}
        </div>
    </main>
  )
}

export default Services