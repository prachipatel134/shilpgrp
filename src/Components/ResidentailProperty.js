import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsArrowUpRight } from "react-icons/bs";
import PropertyCard from './PropertyCard';
import Property1 from '../Images/property_2.png';
import { motion } from 'framer-motion';
import Property2 from'../Images/resident_1.png';
import Property3 from'../Images/resident_2.png';


export default function ResidentialProperty() {
  return (
    <div className='section-padding md:my-[150px] my-[50px]'>
      <div className='flex flex-wrap gap-y-3 justify-between items-center md:pb-[80px] pb-[30px]'>
        <h2 className="lg:text-[50px] text-[36px] font-bold">
          Here are our
          <br />
          <span className='font-bold text-[40px] lg:text-[60px] text-[#0061E0]'>Residential Property</span>
        </h2>

        <Button variant="primary" className='flex items-center'>
          View More <BsArrowUpRight size={28} className='ms-3' />
        </Button>
      </div>
      <Row className='gx-4 gy-4'>
        <Col sm="6" lg="4">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard
              img={Property2}
              propertytype='3 & 4 BHK luxurious Appartment'
              PropertyDetails="3 BHK size 2030 Sq.ft. & 2360 Sqft"
              PropertySize="4 BHK size 3341 Sq.ft."
            />
          </motion.div>
        </Col>
        <Col sm="6" lg="4">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard
              img={Property3}
              propertytype='3 BHK luxurious Appartment'
              PropertyDetails="1700 Sq.ft"
            />
          </motion.div>
        </Col>
        <Col sm="6" lg="4">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='h-100'
          >
            <PropertyCard
              img={Property1}
              propertytype='Residential Appartment'
              PropertyDetails="98,000 Sq.ft."
            />
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}
