import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import houseicon from '../Images/house_icon.svg'
import { IoCalendarOutline } from "react-icons/io5";

export default function PropertyCard({img,propertytype,PropertyDetails,Propertydetails2,PropertySize}) {
  return (
    <div className='h-100'>
        <Card className='h-100 relative' style={{  borderRadius:'20px',borderColor:'transparent',boxShadow:'0px 4px 4px #00000040' }}>
      <Card.Img variant="top" className='rounded-[20px]' src={img} />
      <Card.Body className='flex flex-col'>
        <div className='mb-[30px]'>
        <Card.Title className='font-bold text-xl'>{propertytype}</Card.Title>
        <Card.Text className='flex items-center gap-2 pb-[13px]'>
            <img src={houseicon} alt="icon"/>
       {PropertyDetails}
        </Card.Text>
       {PropertySize ? <Card.Text className='flex items-center gap-2'>
            <img src={houseicon} alt="icon"/>
       {PropertySize}
        </Card.Text>:""}
      {Propertydetails2 ? <Card.Text className='flex items-center gap-2'>
      <IoCalendarOutline size={20}/> {Propertydetails2}
        </Card.Text> : " "}
        </div>
        <Button variant="primary" className='mt-auto max-w-[144px]'>Learn More</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


