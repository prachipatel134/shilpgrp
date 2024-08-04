import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsArrowUpRight } from "react-icons/bs";
import PropertyCard from './PropertyCard';
import Property1 from '../Images/propety_1.png';
import BlogCard from './BlogCard';
import news_1 from '../Images/news_1.png';
import news_2 from '../Images/news_2.png';
import news_3 from '../Images/news_3.png';

export default function NewsUpdates() {
  return (
    <div className='section-padding  lg:my-[150px] my-[80px]'>
        <div className='flex flex-wrap gap-y-3 justify-between items-center md:pb-[80px] pb-[30px]'>
        <h2 className="lg:text-[50px] text-[36px] font-bold">News & Updates

        <br/>  <span className='font-bold  text-[40px ]lg:text-[60px] text-[#0061E0]'>Latest New Feeds</span></h2>

        <Button variant="primary" className='flex items-center'>View All Blogs <BsArrowUpRight size={28} className='ms-3'/></Button>
        </div>
        <Row className='gx-4 gy-4'>
            <Col sm="6" lg="4">
<BlogCard img={news_1} newsdate='12' newsMonth="Jan" newstitle="Foreign Investment in the Indian Real Estate Market" newsdetail="The Indian real estate market is emerging as an attractive investment destination for foreign investors. With a rapidly growing economy," />
</Col>
            <Col sm="6" lg="4"><BlogCard img={news_2} newsdate='12' newsMonth="Jan" newstitle="Gandhinagar – A Growing City of Opportunities and Connectivity" newsdetail="Gandhinagar, the capital city of Gujarat, is poised for substantial infrastructure development in the near future. With initiatives like the" /></Col>
            <Col sm="6" lg="4">
            <BlogCard img={news_3} newsdate='12' newsMonth="Jan" newstitle="Real estate investment in developing vs. developed area" newsdetail="Investing in real estate is a major financial decision, and choosing the right location can make all the difference. One" /></Col>
        </Row>
       



      
    </div>
  )
}
