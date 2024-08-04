import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
import Property2 from '../Images/property_2.png';
import shilpmg5 from '../Images/shilp_img5.png';
import services from '../Images/services.png';
import { motion } from 'framer-motion';


export default function Services() {
  return (
 <div className='mt-8'>
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <Row className='services-row'>
                <Col lg="6">
                <h2 className="lg:text-[50px] text-[36px] font-bold">Our Services
           <br/>  <span className='font-bold  text-[40px ]lg:text-[60px] text-[#0061E0]'>We do for you</span></h2>
           <ul className='services-list pt-[10px] lg:pt-[50px] lg:mb-24 lg:text-2xl text-lg'>

            <li className=''>We create building in the buzzing parts of the city. Our locations are prime and give the buyers an edge. Good locations determine a property’s value.</li>
            <li className=''>We create spaces that stimulate natural landscapes offering enough space for comfortable dwelling.</li>
            <li className=''>Our buildings are designed to communicate with people. With sustainability being the lead consideration, our buildings offer state-of-the art designs.</li>
           </ul>
                </Col>
                <Col lg={{span:6}}>
                {/* <div className='relative'>
                <div className='border-before-both border-before-bottom'>
                   <img src={Property2} alt="services" className='rounded-[20px] mb-[20px] w-[606px] h-[345px]' width="606"  /></div>
                   <div className='flex gap-4'>
                   <img src={shilpmg5} alt="services" className='rounded-[20px]' />
                   <img src={shilpmg5} alt="services" className='rounded-[20px]' />
                   </div>
                   </div> */}
                   <div className='relative lg:pr-4 lg:ps-0 lg:py-0  p-7 lg:mb-0 mb-14'>
                    <div className='border-before-both border-before-bottom'>
                   <img src={services} alt="shild_building"/>
                   
</div>
                   
</div>

                </Col>
            </Row>
            </motion.div>
            
            </div>
  )
}
