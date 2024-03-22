import React, { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const count = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=''>
        <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}>
                   {counterOn && (
                      <h4 className="text-6xl xl:text-7xl font-semibold text-white">
                        <CountUp start={0} end={5000} />+
                      </h4>
                    )}
        </ScrollTrigger>
       
    </div>
  )
}

export default count