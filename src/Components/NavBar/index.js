import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg'

export default function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onScroll = () => {
      if(window.scrollY > 638){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    useEffect( () => {
      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className='nav-bar-text'>
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/pablo-manolaki-110522158/"><img src={navIcon1} alt='Linked In'/></a>
                  <a href="https://github.com/manolonolo"><img src={navIcon2} alt='Github'/></a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}