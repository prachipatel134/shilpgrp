import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import houseicon from '../Images/house_icon.svg'
import { IoCalendarOutline } from "react-icons/io5";
import { motion } from 'framer-motion';


export default function BlogCard({img,newsdate,newsMonth,newstitle,newsdetail}) {
  return (
    <div className='h-100'>
      <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
        <Card className='h-100 relative lg:pb-[41px] pb-[20px] ' style={{ borderRadius:'20px',borderColor:'transparent',boxShadow:'0px 4px 4px #00000040' }}>
        <div className='relative'>
          <div className='absolute inset-0 border-[15px] border-white rounded-[20px]'></div>
          <Card.Img variant="top" className='rounded-[20px]' src={img} />
        </div>
      <Card.Body className='flex flex-col'>
        <div className='mb-[30px]'>
        <Card.Title className='font-bold text-base flex items-center gap-4'><div className='text-[28px] flex flex-col items-center'>{newsdate} <span className='text-sm'>{newsMonth}</span></div>{newstitle}</Card.Title>
        <Card.Text className='text-lg text-[#787878] mt-[30px] '>
            {newsdetail}
            
</Card.Text>
        </div>
        <Button variant="outline-primary" className='mt-auto max-w-[144px]'>Read More</Button>
      </Card.Body>
    </Card>
    </motion.div>
    </div>
  )
}


