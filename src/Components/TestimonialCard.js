import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function TestimonialCard({testimonialimg,testimonialname,testimonialtext,testimonialtitle}) {
  return (
    <div>
   
       <Card className="h-100 bg-transparent p-0 border-none
       ">
              <Card.Body className="d-flex flex-column p-0">
                <div className=' relative bg-white  border-transparent rounded-2xl px-[20px] pt-[20px] pb-[55px]' >
                <Card.Text className="text-muted">
                  {testimonialtext}
                </Card.Text>
                </div>
                <div className='arrow'></div>
                <div className="d-flex  ms-[17px] align-items-center mt-10">
                  <img
                    src={testimonialimg}
                    alt={testimonialname}
                    className="rounded-circle me-3"
                    style={{ width: '50px', height: '50px' }}
                  />
                  <div>
                    <h5 className="mb-0">{testimonialname}</h5>
                    <small className="text-muted">{testimonialtitle}</small>
                  </div>
                </div>
              </Card.Body>
            
            </Card>
        
    </div>
  )
}
