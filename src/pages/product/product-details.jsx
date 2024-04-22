import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Prod2 } from '../../assets';
import Sidebar from './sidebar';
import {ProductsData} from '../../components/constant/data'

const ServiceDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  useEffect(() => {
    // console.log('Decoded Title:', decodedTitle);
  }, [decodedTitle]);

  const servicedata = ProductsData.find((s) => s.url === title);
  // console.log(visadata.methods.slice(0,1));
  if (!servicedata) {
    return <div>Service not found</div>;
  }
  return (
    <main>
        <div className='w-11/12 xl:w-10/12 mx-auto flex flex-col-reverse lg:flex-row gap-8 py-10 xl:py-16'>
            {/* navigation */}
            <div className='lg:basis-1/3'>
              <Sidebar/>
            </div>
            {/* content */}
            <div className='lg:basis-2/3 w-full h-full text-gray-500'>
                <img className='w-full h-52 md:h-80 xl:h-[450px] object-cover' src={servicedata?.img} alt="" loading='lazy'/>
                {/* <div className='space-y-3 mt-10 prose prose-h2:text-primary prose-h3:text-primary prose-h4:text-primary prose-p:text-gray-500 ' dangerouslySetInnerHTML={{ __html: servicedata.contents }}> */}
                <div className='space-y-3 mt-10'>
                <h2 className='text-2xl xl:text-4xl font-bold text-primary'>{servicedata?.title}</h2>
                <p className='text-base xl:text-lg'>{servicedata?.descption}</p>
{/* <p className='text-base xl:text-lg'>We provide a broad range of standard and quality products that aligns with a series of
cooling applications. Our business uses a flexible approach that helps us design and build
equipment fit for different purposes.</p>
<p className='text-base xl:text-lg'>Air Handling Units<br/>
We manufacture and supply Air Handling Units (AHU) Coils in various industries and
workplaces such as schools, hospitals, malls, food processing and other industries.</p>
<p className='text-base xl:text-lg'>
All Al Tabreed AHU coils are products of the highest quality raw materials. Specifically, they
consist of aluminum/copper, copper tubing, and louvred fins. We source our copper and
aluminium from leading manufacturers across the globe. We also have strict and efficient
manufacturing standards. This way, you can be certain of getting the best condenser coils
from us.
</p>
<p className='text-base xl:text-lg'>AC condenser coil manufacturer and supplier in UAE
As a leading AC condenser coil manufacturer and supplier in UAE, Al Tabreed manufacture
evaporator and condenser coils for various air conditioning brands such as LG, Samsung,
Carrier, York, .and others. We also serve the automotive industry.
</p>
<p className='text-base xl:text-lg'>Our coils never leave the factory unless they are full tested and quality checked. We
  manufacture an extensive range of condenser coils.
</p>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3 py-5'>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>DIRECT EXPANSION COIL</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>CONDENSOR COILS</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>FCU COILS</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>AHU COILS</div>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>What is a Condenser Coil?</h4>
  <p className='text-base xl:text-lg'>A condenser coil is one of the parts of a condensation process. As you may have
  noticed, condensation is one of the most widely used processes in heating, air
  conditioning, and thermal control. The condenser coil is found in different types of
  heat exchange systems, such as central air conditioners. Below is a comprehensive
  guide of the condenser coils, including what they are and how they work.</p>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>How Does a Condenser Coil Work?</h4>
  <p className='text-base xl:text-lg'>The condenser coil is a HVAC unit or general heating and cooling system
    component. It collects or releases heat depending on the type of system in use. The
    condenser coil is usually made of copper and contains the liquid form of the
    refrigerant</p>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>Where are Condenser Coils Used?</h4>
  <p className='text-base xl:text-lg'>The common areas where our condenser coils are used include:<br/><br/>
  Industrial chillers<br/>
  Car radiators<br/>
  Air conditioners<br/>
  Fire suppression systems
  </p>
</div>
  <h4 className='text-lg text-primary xl:text-xl font-semibold'>Our Condenser Coil Manufacturing Approach</h4>
<div>
  <h5 className='text-primary text-lg font-medium'>Efficiency</h5>
  <p className='text-lg'>We deploy the latest technologies in condensation and cooling to deliver the most
    efficient condensation coils for all your cooling needs.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Support</h5>
  <p className='text-lg'>Service and support are important when buying a condenser coil unit. Will I get the
  technical support that I need to install or operationalize the products? Will I have
  someone to guide my team to use the products effectively?</p><br/>
  <p className='text-lg'>Don't worry when you are buying from us. We have a team of experts at all levels.
  Our service and support team includes highly specialized individuals.</p><br/>
  <p className='text-lg'>You can reach out to us through our Dubai and Sharjah shops. We want to be
  closer to you. We also do on-site customization and installations.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Customization</h5>
  <p className='text-lg'>We understand that you have custom needs and would like everything tailored to
  those unique needs. Our team of technicians will make that happen. It is what we
  do every day for our customers, be it in commercial spaces or everyday use.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Standards and compliance</h5>
  <p className='text-lg'>We have state-of-the-art manufacturing equipment to ensure precision and
  quality of fins.</p><br/>
  <p className='text-lg'>If you are worried of faulty or substandard coils, worry no more when working with
    Al Tabreed, All our condensers are certified and come With a quality guarantee.</p><br/>
  <p className='text-lg'>We comply with local and international standards for safety, performance, and
  reliability of products. Al Tabreed uses the right materials, deploys the right
  manufacturing standards, and adheres to all testing and improvement protocols.
  We do that to ensure that you are getting the products you deserve.</p>
</div>
<h5 className='text-lg text-primary xl:text-xl font-semibold'>Selecting a Reliable condenser coils Manufacturer or Supplier in UAE</h5>
<div>
  <h4 className='text-primary text-lg font-medium'>Research and Evaluate UAE Manufacturers</h4>
  <p className='text-lg'>Consider the following factors when selecting a manufacturer or supplier for
  condenser coils:</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Reputation and experience in the industry.</h5>
  <p className='text-lg'>
  Product range and variety of condenser coils available.<br/>
  Quality control measures and certifications.<br/>
  Customer reviews and feedback.<br/>
  References from other customers or industry professionals.<br/>
  Access<br/>
  We have a strong reputation in manufacturing and supply. Our presence in Dubai<br/>
  and Sharjah makes us accessible.
  </p>
</div>
<div>
  <h5 className=' text-primary text-lg font-medium'>Long-term Service and Parts Availability</h5>
  <p className='text-lg'>Consider the long-term service and parts availability provided by the condenser coil manufacturer,</p><br/>
  <p className='text-lg'>Inquire about the availability of replacement parts for their condenser coils and
  their commitment to supporting their products throughout their lifespan. Choosing
  a manufacturer that ensures long-term service and parts availability can help
  minimize downtime and extend the life of the condenser coils.</p>
</div> */}
                </div>
            </div>
        </div>
    </main>
  )
}

export default ServiceDetails;

{/* <h2 className='text-2xl xl:text-4xl font-bold text-primary'>{servicedata.title}</h2>
<p className='text-base xl:text-lg'>At Al Tabreed, we are your preferred condenser coils manufacturer. Whether you
are looking for air blast radiators, dry air coolers, chiller coils, exchange coils, or air-cooled
condensers, we will deliver them to you. Also, we are manufacturers of air conditioning,
forced air evaporators for heating, refrigeration, process cooling and heat recovery
systems for industries.</p>
<p className='text-base xl:text-lg'>We provide a broad range of standard and quality products that aligns with a series of
cooling applications. Our business uses a flexible approach that helps us design and build
equipment fit for different purposes.</p>
<p className='text-base xl:text-lg'>Air Handling Units<br/>
We manufacture and supply Air Handling Units (AHU) Coils in various industries and
workplaces such as schools, hospitals, malls, food processing and other industries.</p>
<p className='text-base xl:text-lg'>
All Al Tabreed AHU coils are products of the highest quality raw materials. Specifically, they
consist of aluminum/copper, copper tubing, and louvred fins. We source our copper and
aluminium from leading manufacturers across the globe. We also have strict and efficient
manufacturing standards. This way, you can be certain of getting the best condenser coils
from us.
</p>
<p className='text-base xl:text-lg'>AC condenser coil manufacturer and supplier in UAE
As a leading AC condenser coil manufacturer and supplier in UAE, Al Tabreed manufacture
evaporator and condenser coils for various air conditioning brands such as LG, Samsung,
Carrier, York, .and others. We also serve the automotive industry.
</p>
<p className='text-base xl:text-lg'>Our coils never leave the factory unless they are full tested and quality checked. We
  manufacture an extensive range of condenser coils.
</p>
<div className='grid grid-cols-1 md:grid-cols-2 gap-3 py-5'>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>DIRECT EXPANSION COIL</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>CONDENSOR COILS</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>FCU COILS</div>
    <div className='bg-primary px-5 py-3 xl:px-10 xl:py-5 text-white text-base md:text-xl'>AHU COILS</div>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>What is a Condenser Coil?</h4>
  <p className='text-base xl:text-lg'>A condenser coil is one of the parts of a condensation process. As you may have
  noticed, condensation is one of the most widely used processes in heating, air
  conditioning, and thermal control. The condenser coil is found in different types of
  heat exchange systems, such as central air conditioners. Below is a comprehensive
  guide of the condenser coils, including what they are and how they work.</p>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>How Does a Condenser Coil Work?</h4>
  <p className='text-base xl:text-lg'>The condenser coil is a HVAC unit or general heating and cooling system
    component. It collects or releases heat depending on the type of system in use. The
    condenser coil is usually made of copper and contains the liquid form of the
    refrigerant</p>
</div>
<div>
  <h4 className='text-primary text-lg font-medium'>Where are Condenser Coils Used?</h4>
  <p className='text-base xl:text-lg'>The common areas where our condenser coils are used include:<br/><br/>
  Industrial chillers<br/>
  Car radiators<br/>
  Air conditioners<br/>
  Fire suppression systems
  </p>
</div>
  <h4 className='text-lg text-primary xl:text-xl font-semibold'>Our Condenser Coil Manufacturing Approach</h4>
<div>
  <h5 className='text-primary text-lg font-medium'>Efficiency</h5>
  <p className='text-lg'>We deploy the latest technologies in condensation and cooling to deliver the most
    efficient condensation coils for all your cooling needs.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Support</h5>
  <p className='text-lg'>Service and support are important when buying a condenser coil unit. Will I get the
  technical support that I need to install or operationalize the products? Will I have
  someone to guide my team to use the products effectively?</p><br/>
  <p className='text-lg'>Don't worry when you are buying from us. We have a team of experts at all levels.
  Our service and support team includes highly specialized individuals.</p><br/>
  <p className='text-lg'>You can reach out to us through our Dubai and Sharjah shops. We want to be
  closer to you. We also do on-site customization and installations.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Customization</h5>
  <p className='text-lg'>We understand that you have custom needs and would like everything tailored to
  those unique needs. Our team of technicians will make that happen. It is what we
  do every day for our customers, be it in commercial spaces or everyday use.</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Standards and compliance</h5>
  <p className='text-lg'>We have state-of-the-art manufacturing equipment to ensure precision and
  quality of fins.</p><br/>
  <p className='text-lg'>If you are worried of faulty or substandard coils, worry no more when working with
    Al Tabreed, All our condensers are certified and come With a quality guarantee.</p><br/>
  <p className='text-lg'>We comply with local and international standards for safety, performance, and
  reliability of products. Al Tabreed uses the right materials, deploys the right
  manufacturing standards, and adheres to all testing and improvement protocols.
  We do that to ensure that you are getting the products you deserve.</p>
</div>
<h5 className='text-lg text-primary xl:text-xl font-semibold'>Selecting a Reliable condenser coils Manufacturer or Supplier in UAE</h5>
<div>
  <h4 className='text-primary text-lg font-medium'>Research and Evaluate UAE Manufacturers</h4>
  <p className='text-lg'>Consider the following factors when selecting a manufacturer or supplier for
  condenser coils:</p>
</div>
<div>
  <h5 className='text-primary text-lg font-medium'>Reputation and experience in the industry.</h5>
  <p className='text-lg'>
  Product range and variety of condenser coils available.<br/>
  Quality control measures and certifications.<br/>
  Customer reviews and feedback.<br/>
  References from other customers or industry professionals.<br/>
  Access<br/>
  We have a strong reputation in manufacturing and supply. Our presence in Dubai<br/>
  and Sharjah makes us accessible.
  </p>
</div>
<div>
  <h5 className=' text-primary text-lg font-medium'>Long-term Service and Parts Availability</h5>
  <p className='text-lg'>Consider the long-term service and parts availability provided by the condenser coil manufacturer,</p><br/>
  <p className='text-lg'>Inquire about the availability of replacement parts for their condenser coils and
  their commitment to supporting their products throughout their lifespan. Choosing
  a manufacturer that ensures long-term service and parts availability can help
  minimize downtime and extend the life of the condenser coils.</p>
</div> */}