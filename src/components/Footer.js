import React from 'react';
import './footer.css';
import {Navbar, Nav, Stack} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer (){
    return (
      <footer>
        <Navbar fixed="bottom" style={{ position: 'sticky', bottom: 0, zIndex: 1, borderRadius: 2 }}>
        <Nav className='me-auto ms-auto'>
          <Stack className='text-center'>
            <Stack direction="horizontal">
              <Nav.Link href="mailto:downerdm@gmail.com"><FontAwesomeIcon icon={faEnvelope} color="#fff" /></Nav.Link>
              <Nav.Link href="https://github.com/downerdm"><FontAwesomeIcon icon={faGithub} color="#fff" /></Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/downerdm"><FontAwesomeIcon icon={faLinkedin} color="#fff" /></Nav.Link>
              <Nav.Link href="https://www.instagram.com/downerdm"><FontAwesomeIcon icon={faInstagram} color="#fff" /></Nav.Link>
            </Stack>
            <Nav.Link className='text-muted p-0 m-0'> © {new Date().getFullYear()} Dennis M. Downer</Nav.Link>
          </Stack>
        </Nav>
      </Navbar>
    </footer>    
      )
    };
