import React, { useState } from 'react';
import logo from '../Images/shilp_logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FiSearch, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Offcanvas } from 'react-bootstrap';

export default function Header() {
  const [show, setShow] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className='section-padding lg:pt-12 md:pt-8 pt-3'>
       
       <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="shilp_logo"/></Navbar.Brand>
        <Navbar.Toggle  onClick={handleShow} />
        <Navbar className='hidden lg:flex'>
          <Nav className="ms-auto">
            <Nav.Link href="#features" className='font-bold border-b nav-link-active'>Home</Nav.Link>
            <Nav.Link href="#pricing">Commercial</Nav.Link>
            <NavDropdown title="Residential" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://shilpgroup.com/shilp-north-sky/" target='_blank'>shilp north sky</NavDropdown.Item>
              <NavDropdown.Item href="#">
              shilp residency
              </NavDropdown.Item>
              <NavDropdown.Item href="#">shilp Sereny</NavDropdown.Item>
              
              <NavDropdown.Item href="#">
                shilp paradise
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                shilp 14
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Plots" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#">Shilp the roots</NavDropdown.Item>
              <NavDropdown.Item href="#">
               shilp industrial park
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="">Sneh shilp Foundation</Nav.Link>
          </Nav>
          <Nav className='lg:items-center'>
            <Nav.Link href="#" className='hidden lg:flex'><div className='p-[11px] shadow-custom rounded-full bg-white text-[#0061E0]'><FiSearch size={19} /></div></Nav.Link>
            <Nav.Link eventKey={2} href="#memes" >
            <Button variant="primary">Enquiry Now</Button>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
      
  

      <Offcanvas show={show} placement='end' onHide={handleClose} className="bg-light">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Commercial</Nav.Link>
            <Nav.Link onClick={() => toggleSection('residential')} className='flex gap-x-2 items-center'>
              Residential {expandedSection === 'residential' ? <FiChevronUp /> : <FiChevronDown />}
            </Nav.Link>
            {expandedSection === 'residential' && (
              <Nav className="flex-column ml-4">
                <Nav.Link href="#"> Shilp Navorth Skyn</Nav.Link>
                <Nav.Link href="#a">Shilp Residency</Nav.Link>
                <Nav.Link href="#">Shilp Sereny</Nav.Link>
              </Nav>
            )}
            <Nav.Link onClick={() => toggleSection('plots')} className='flex gap-x-2 items-center'>
              Plots {expandedSection === 'plots' ? <FiChevronUp /> : <FiChevronDown />}
            </Nav.Link>
            {expandedSection === 'plots' && (
              <Nav className="flex-column ml-4">
                <Nav.Link href="#action/3.1">Shilp The Roots</Nav.Link>
                <Nav.Link href="#action/3.2">Shilp Industrial Park</Nav.Link>
                
              </Nav>
            )}
            <Nav.Link href="">Sneh shilp Foundation</Nav.Link>
            <Nav.Link className="mt-4">
              <Button variant="primary">Enquiry Now</Button>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
