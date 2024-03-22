import React, { useState } from 'react'
import { Line, Circle } from 'rc-progress';
import ScrollTrigger from "react-scroll-trigger";


const Progress = () => {
    const [progess, setProgress] = useState(false);
  return (
    <>
      <ScrollTrigger
                onEnter={() => setProgress(true)}
                onExit={() => setProgress(false)}>
   
            <Line className='h-3 md:h-4 w-full border rounded-md' trailColor='transparent' percent={`${progess ? 80 : 0}`}  strokeColor="#fff"/>

    </ScrollTrigger>
    </>
  )
}

export default Progress