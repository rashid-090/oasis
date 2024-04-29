import React from 'react';
import emailjs from '@emailjs/browser';
import Checkbox from '@mui/material/Checkbox';
import {Contactbg,Contactman} from '../../assets';
import {ProductsData} from '../../components/constant/data'
import { toast } from 'react-toastify';
import { useState } from 'react';


const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your EmailJS service ID, template ID, and Public Key
      const serviceId = 'service_xr734z4';
      const templateId = 'template_b1li65b';
      const publicKey = '81-iPmEaFeph20wj3';
  
      // Create a new object that contains dynamic template params
      const templateParams = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_address: address,
        user_enquiry: enquiry,
        user_message: message,
      };
  
      // Send the email using EmailJS
      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          toast.success("Message sent successfully! 🚀",response)
          setName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setEnquiry('');
          setMessage('');
          setIsChecked(false);
          
        })
        .catch((error) => {
          toast.error("Error sending email",error)
        });
    }
  return (
    <main>
        <div className='bg-oasisbg w-full bg-cover bg-top aspect-auto lg:aspect-[20/7]'>
                <div className='w-11/12 2xl:w-10/12 mx-auto text-white flex flex-col gap-y-4 py-14 xl:py-0 justify-center h-full'>
                <h1 className='text-3xl md:text-5xl 2xl:text-7xl font-bold'>GET IN TOUCH WITH US</h1>
                <p className='text-sm md:text-base xl:text-lg 2xl:text-xl font-medium text-gray-200'>IT IS ABOUT PRECISION AND DIAMOND QUALITY ENGINEERING WHEN IT COMES<br className='hidden md:block'/>
                    TO OUR MANUFACTURING. WE GIVE YOU THE BEST HVAC AND BRAKING SOLUTIONS<br className='hidden md:block'/>
                    FROM BRAKE LININGS, CONDENSERS, RADIATORS, HEAT EXCHANGERS, AND CHILLERS.</p>
                </div>
        </div>
        {/* form */}
        <div className='w-11/12 md:w-10/12 lg:w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 2xl:gap-x-20 relative bg-[#f2f2f2] my-10 xl:my-20'>
            <div className='lg:col-span-4 p-5 xl:p-10'>
                <h2 className='text-2xl md:text-4xl 2xl:text-5xl font-semibold text-primary'>CONTACT US TODAY!</h2>
                <h3 className='text-xl md:text-3xl font-normal mb-8'>We are here to help.</h3>
                <form onSubmit={handleSubmit} className='flex relative flex-col gap-4 osasis-form text-sm md:text-base xl:text-lg font-normal placeholder:text-gray-500'>
                    <input type="text" placeholder='Name' required name='user_name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="email" placeholder='email' required name='user_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className='[&::-webkit-inner-spin-button]:appearance-none' type="tel" placeholder='phone'  name='user_phone' value={phone} onChange={(e) => setPhone(e.target.value)} required inputmode="numeric" pattern="[0-9]{10,}" title="Please enter a 10 digit valid number"/>
                    <input type="text" placeholder='address' name='user_address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                    <select className='' required name='user_enquiry' value={enquiry} onChange={(e) => setEnquiry(e.target.value)}>
                        <option value="">select your inquiry</option>
                        {ProductsData?.map((data,i)=>(
                            <option value={data.title} key={i} className='!capitalize'>{data.title}</option>
                        ))}
                        <option value="other">Other</option>
                    </select>
                    <textarea rows="6" placeholder='message' name='user_message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    <div className='flex items-center md:gap-3'>
                        <Checkbox  checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}  sx={{color:'#0259b2','&.Mui-checked': {color: '#116f49',}}} required/>
                        <p className='text-xs md:text-base mt-1'>I here by accept all terms & conditions.</p>
                    </div>
                    <button className='bg-primary w-fit h-12 text-white text-lg uppercase px-10 rounded-xl hover:bg-blue-600 duration-150' type='submit'>submit form</button>
                </form>
            </div>
            <div className='hidden lg:block lg:col-span-2'>
                <img className='h-full w-full object-cover -z-10' src={Contactbg} alt="image" loading='lazy'/>
                <img className='absolute bottom-0 right-0 h-[600px] lg:h-[550px] xl:h-[750px] 3xl:h-[900px]' src={Contactman} alt="man" loading='lazy'/>
            </div>  
        </div>
    </main>
  )
}

export default ContactUs