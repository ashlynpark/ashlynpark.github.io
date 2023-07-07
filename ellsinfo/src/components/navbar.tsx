import React from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/styles/Home.module.css';
import { Row, Col } from 'react-bootstrap';



const Navvy = (props:{selected:string}) => {
  const about = props.selected === 'about';
  const projects = props.selected === 'projects';
  const build = props.selected === 'build';

  return (
    <nav style={{paddingBottom: '60px'}}>
      
      <Navbar expand='md' style={{paddingTop: 0, paddingBottom: 0, width: '100%', position: 'fixed'}}>
        <Container fluid className={styles.prettynav}>
          <Navbar.Brand href="/" style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: 20, marginLeft: '1%'}}><h1 className={styles.brandName}>ellsinfo.com</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft: 'auto'}}>
            <Nav style={{marginLeft: 'auto', marginRight: '5%'}}>
              <Nav.Link active={about} className={styles.navItem} style={about ? { color: 'rgb(126, 156, 116)', marginRight: '4%', fontWeight: '500', fontSize: '1.5em' } : {marginRight:'4%', fontWeight: '500', fontSize: '1.5em' }} href="/about">About</Nav.Link>
              <Row style={{width: '180px', marginRight: '5%'}}>
                <Col sm={10}>
                  <Nav.Link active={projects} href='/projects' >{<span className={styles.navItem} style={projects ? {  color: 'rgb(126, 156, 116)', fontWeight: '500', fontSize: '1.5em' } : {fontWeight: '500', fontSize: '1.5em' }} >Projects</span>} </Nav.Link>
                </Col>
                <Col sm={2}>
                  <NavDropdown active={projects} title='' id="basic-nav-dropdown" style={{marginTop: '5px', fontSize: 20}}>
                  <NavDropdown.Item  href="/projects/odyssey" >Odyssey</NavDropdown.Item>
                  <NavDropdown.Item href="/projects/antmarket">AntMarket</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/projects">
                    View All
                  </NavDropdown.Item>
                  </NavDropdown>
                </Col>
              </Row>


              <Nav.Link active={build} className={styles.navItem} style={build ? { width: 'auto', color: 'rgb(126, 156, 116)',fontWeight: '500', fontSize: '1.5em', whiteSpace: 'nowrap'} : {  whiteSpace: 'nowrap', width: 'auto', fontWeight: '500', fontSize: '1.5em' }}  href="/buildwithme">Build With Me</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>

  );
};

export default Navvy;