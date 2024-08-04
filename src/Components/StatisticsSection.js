import React from 'react';
import CountUp from 'react-countup';

const StatisticsSection = () => {
  return (
    <div className='flex flex-wrap justify-around ' >
      <div className="text-center  ">
        <CountUp className='text-[34px] font-bold' start={0} end={12} duration={7} /><span className='text-[34px]'>+</span>
        <p className='text-[17px]'>Years of Experience</p>
      </div>
      <div className='h-[42px] my-auto hidden md:block  w-[1px] bg-black mr-[20px] ms-[10px] '></div>
      <div className="text-center ">
        <CountUp className='text-[34px] font-bold' start={0} end={16} duration={7} />
        <p className='text-[17px]'>Services provided</p>
      </div>
      <div className='h-[42px] my-auto hidden md:block  w-[1px] bg-black mr-[20px] ms-[10px] '></div>
      <div className="text-center ">
        <CountUp className='text-[34px] font-bold' start={0} end={98} duration={8} suffix="%" />
        <p className='text-[17px]'>Customer satisfaction</p>
      </div>
      <div className='h-[42px] my-auto hidden md:block  w-[1px] bg-black mr-[20px] ms-[10px]'></div>
      <div className="text-center">
        <CountUp className='text-[34px] font-bold' start={0} end={1000} duration={8} /> <span className='text-[34px]'>+</span>
        <p className='text-[17px]'>Projects Delivered</p>
      </div>
    </div>
  );
};

export default StatisticsSection;
