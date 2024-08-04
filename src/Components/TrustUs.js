import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import trust from '../Images/trust_us.png';
import shilpimg4 from '../Images/shilp_img4.png';
import shilpmg5 from '../Images/shilp_img5.png';
import { motion } from 'framer-motion';

export default function TrustUs() {
  return (
    <div className='section-padding trust-part lg:my-[110px] my-[50px]'>
      <Container className='lg:py-[70px] md:w-full '>
        <Row>
          <Col lg="6">
            <div className='relative hidden lg:block'>
              <motion.div
                initial={{ opacity: 0.5, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className='border-before-both border-before-bottom'
              >
                <img className='rounded-[20px]' src={shilpimg4} alt="shilp_img" />
              </motion.div>
              <motion.img
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className='rounded-[20px] absolute bottom-0'
                src={shilpmg5}
                alt="shilp_img"
              />
            </div>
            <motion.img
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              src={trust}
              alt="shilp_img"
              className='flex lg:hidden my-auto'
            />
          </Col>
          <Col lg={{ span: 6, offset: 0 }}>
            <div className='lg:ps-[30px]'>
              <motion.h2
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="lg:text-[50px] text-[36px] font-bold"
              >
                Trust in Shilp,<br />
                <span className='font-bold text-[40px] lg:text-[60px] text-[#0061E0]'>Build Your Future</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className='md:text-2xl text-lg pt-6'
              >
                SHILP DEVELOPERS LLP, a real estate company that is driven by quality, integrity and authenticity has earned recognition as one of the top builders of Ahmedabad. The company is known for undertaking large, diverse projects, fostering innovation, embracing emerging technologies, and making a difference for it’s clients, employees and community. We are a brand that people trust because our projects house people’s ambitions. Since inception, we have gone the extra mile to honour deadlines and commitments.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <Button variant="primary" className='mt-[40px]'>About Us</Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
