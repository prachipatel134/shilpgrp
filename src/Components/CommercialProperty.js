import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsArrowUpRight } from "react-icons/bs";
import PropertyCard from './PropertyCard';
import Property1 from '../Images/propety_1.png';
import Property2 from '../Images/property_2.png';
import Property3 from '../Images/property_3.png';
import { motion } from 'framer-motion';

export default function CommercialProperty() {
  return (
    <div className='section-padding bg-blue py-[50px]'>
        <div className='flex flex-wrap gap-y-3  justify-between items-center md:pb-[80px] pb-[30px]'>
        <h2 className="lg:text-[50px] text-[30px] md:text-[40px] font-bold">Here are our
        <br/>  <span className='font-bold  text-[30px] md:text-[42px] lg:text-[60px] text-[#0061E0]'>Commercial Property</span></h2>

        <Button variant="primary" className='flex items-center'>View More <BsArrowUpRight size={28} className='lg:ms-3 ms-2'/></Button>
        </div>
        <Row className='gx-4 gy-4 '>
            <Col sm="6" lg="4">
            <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard img={Property3}  propertytype='Residential Appartment' PropertyDetails="98,000 Sq.ft. " Propertydetails2="Year of experience 2013"/>
            </motion.div>
            </Col>
            <Col sm="6" lg="4">
            <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard img={Property1}  propertytype='Residential Appartment' PropertyDetails="98,000 Sq.ft. " Propertydetails2="Year of experience 2013"/>
            </motion.div></Col>
            <Col sm="6" lg="4">
            <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard img={Property2}  propertytype='Residential Appartment' PropertyDetails="98,000 Sq.ft. " Propertydetails2="Year of experience 2013"/>
            </motion.div>
            </Col>
        </Row>
       



      
    </div>
  )
}
