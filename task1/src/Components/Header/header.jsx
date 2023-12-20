import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { MdDashboard } from "react-icons/md";
import { BsPuzzleFill } from "react-icons/bs";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { PiPottedPlantBold } from "react-icons/pi";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';


const header = () => {
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <div >
       
        <div className='header'> 
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="#bad8f4" >
      <Container>
        <Navbar.Brand   ><img src="logo.png" alt=""style={{paddingLeft:"20px"}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           
          </Nav>
          <Nav>
            <div style={{boxSizing:"border-box"}}>
            <Nav.Link href="#deets"><img src="header.png" alt="" /></Nav.Link>
            </div>
            <NavDropdown title="" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='bgimage'>
    <img src="/bg.png" alt="" /></div>
<div  >
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
      <Col xs={6} md={4}>
          <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" style={{width:"90px"}} roundedCircle />
        </Col>
        <Card.Title>Ramya Mohan</Card.Title>
        <Card.Text>
         ramyamohan@gmail.com
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
        <Card.Title><MdDashboard /> Dashboard</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
   
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
        <Card.Title><PiPottedPlantBold /> Perks</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
        <Card.Title> <BsPuzzleFill />  Addons</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
        <Card.Title><IoChatbubblesSharp />  FAQ</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card style={{ width: '11.5rem' }}>
      <Card.Body>
        <Card.Title> <MdHelp /> Support</Card.Title>
        <Card.Text>
         
        </Card.Text>
      
      </Card.Body>
    </Card>
    
    </div>
    </div>


{/* 
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}


    </div>
  )
}

export default header