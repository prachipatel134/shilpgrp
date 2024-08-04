import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReactTyped } from "react-typed";
import Container from 'react-bootstrap/Container';
import heroimg1 from '../Images/hero_img1.png';
import heroimg2 from '../Images/hero_img2.png';
import heroimg3 from '../Images/hero_img3.png';
import Button from 'react-bootstrap/Button';
import StatisticsSection from './StatisticsSection';
import heroimg from '../Images/hero_img.png';

export default function HeroSection() {
  return (
    
    <div className='section-padding lg:pt-[110px] md:pt-[70px] pt-[40px]'>
        <Container className=''>
        <Row className="gy-4 lg:gy-0 gx-2 relative">
            <Col lg="6">
            <h1 className="xl:text-[70px] lg:text-[60px] text-[48px] font-bold">Crafting Your<br/> <span className='font-bold  text-[55px ]lg:text-[90px] text-[#0061E0]'><ReactTyped
                  strings={['Dream Home', 'Luxury Living', 'Perfect Space']}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  // showCursor={false}
                /></span></h1>
            <p className='text-2xl md:w-[80%]'>Experience luxury living with Shilp Group's exquisite 
            real estate projects.</p>
            <Button variant="primary" className='mt-[40px]'>Learn More</Button>
            <div className="pt-[50px] block lg:hidden">
            <StatisticsSection  />
            </div>
            </Col>
            <Col lg="6"  xs={{ order: 'first' }} md={{order:'last'}}>
            <img src={heroimg} alt="shilp_img"/>
              {/* <div className='relative'>
                <div className='border-before'>
                <img className='rounded-t-[60px] ' src={heroimg1} alt="shilp_img"/></div>
                <div className='border-after'>
                <img className='rounded-[20px] absolute sm:right-3 md:right-12 lg:-right-12 xl:-right-0 -right-5  sm:top-[43%] -bottom-20 md:bottom-0 hero-imgs ' src={heroimg2} alt="shilp_building"></img></div>
                <div className='border-bottom'> <img className='rounded-[20px] absolute left-44 hidden sm:block  -bottom-[35%] hero-imgs' src={heroimg3} alt="shilp_building"></img></div>
              </div> */}
            </Col>
            <Col md="12" lg="8" xl="7" className='absolute  hidden lg:block min-[1300px]:bottom-2 min-[1440px]:bottom-9 2xl:bottom-16 xl:-bottom-6  md:-bottom-24 -bottom-36'>
            <StatisticsSection /></Col>
        </Row>
        </Container>
    </div>

  )
}
