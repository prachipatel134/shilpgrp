import React from 'react'
import { Row,Col } from 'react-bootstrap';
import white_logo from '../Images/logo-white.svg';
import { IoLocationOutline } from "react-icons/io5";
import { LuSmartphone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



export default function Footer() {
  return (
    <>
    <div className='section-padding lg:py-[75px] py-[30px]'>

    </div>
    <div className='section-padding lg:py-[110px] py-[80px] bg-[#0061E0]'>
        <Row className='gx-4 gy-4'>
            <Col lg="3" offset="1">
            <img src={white_logo} alt="shilp_logo" className='pt-4' />
            <p className='text-white pt-[25px]'>Lorem Ipsum is simply dummy text of the
and typesetting industry. Lorem Ipsum is
dummy text of the printing.</p>

<div className='flex items-center gap-4 pt-4 text-white'>
   <a href="https://www.facebook.com/ShilpGroup/" target='_blank'><FaFacebookF size={20} /></a> 
   <a href="https://www.instagram.com/shilpgroup/" target='_blank'><FaInstagram size={20} /></a>
   <a href="https://www.linkedin.com/company/shilpgroup/" target='_blank'> < FaLinkedinIn size={20}/></a>
   <a href="https://www.facebook.com/ShilpGroup/" target='_blank'>< FaTwitter size={20}/></a>
    </div>
            </Col>
            <Col sm={{span:6, offset:0}} lg={{span:3 ,offset:1}}>
            <h3 className='text-2xl text-white font-bold pb-[26px]'>Quick Links</h3>
            <ul className='footer-links text-white'>
              <a href="#">  <li>Home</li></a>

              <a href="#">    <li>About Us</li></a>
              <a href="#">    <li>Commercial</li></a>
              <a href="#">    <li>Residential</li></a>
              <a href="#">   <li>Plots</li></a>
            </ul>
            </Col>
            <Col sm="6" lg="4">
            <h3 className='text-2xl text-white font-bold pb-[26px]'>Contact</h3>
            <ul className='footer-links text-white'>
                <li className='flex gap-3 items-start'><IoLocationOutline size={30} />Gorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li className='flex gap-3 items-center '><LuSmartphone size={24}  />+11 2 3456 7890</li>
                <li className='flex gap-3 items-center '><MdMailOutline size={24} />hsdfdsuf@gmail.com</li>
            </ul>
            </Col>
            </Row>  
           
    </div>

    <div className='bg-[#0061E0]  '>
        <div className='xl:mx-[104px] sm:mx-[60px] mx-[20px] border-t border-white pt-[25px] pb-[35px]'>
        <div className='flex flex-wrap gap-y-3 lg:justify-between justify-center items-center text-white'>
         <p>   © 2024 . All Right Reserved.</p>
         <p>  Terms Of Use <span className='px-4 '>  | </span>  Privacy Policy</p>
        </div>
        </div>
    </div>   
    </>
  )
}
