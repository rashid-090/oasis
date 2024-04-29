import React, { useEffect } from 'react'
import {BlogData} from '../../components/constant/data';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BlogInner = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1); // Go back one step in the history stack
    };

    const { title } = useParams();
    const blogdata = BlogData.find((s) => s.url === title);

    if (!blogdata) {
    return <div>Blog not found</div>;
    }
    
  return (
    <main className='w-11/12 2xl:w-10/12 mx-auto py-5'>
        <div className='w-full xl:w-[80%] mx-auto bg-gray-100 p-3 xl:p-5 space-y-5'>
        {/* <button className='bg-primary text-white py-1 px-4 xl:px-5 xl:py-2 rounded-full' onClick={goBack}>Go Back</button> */}
           <img className='w-full object-cover h-full xl:h-96' src={blogdata.img} alt="" />
           <h1 className='text-xl xl:text-2xl font-bold text-primary'>{blogdata.title}</h1>
           <p className='text-base prose-h4:text-primary prose-h4:mt-5' dangerouslySetInnerHTML={{ __html: blogdata.descption }}></p>
           <div className='pt-5'>
                <h4 className='text-primary font-semibold'>Call to Action:</h4>
                <p>Ready to experience the Oasis Cool & Coils difference?<br/> Contact us today to learn more about our services and let us exceed your expectations!</p>
           </div>
        </div>
    </main>
  )
}

export default BlogInner