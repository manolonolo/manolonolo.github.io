import React, { useState, useEffect } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import'./index.css'

export default function Header() {

  const presentation = "I'm really passionate about developing web platforms and working with my teamates to accomplish a common objective. Here you can check out some of my work as well as means of contact if you wish to reach out to me. I'm looking forward to work with you and keep growing as a dev!"
  const [text, setText] = useState(''); //letter that is currently being displayed
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    //function responsible for typing the text
    const writer = setInterval(() => {
      textDisplayer();
    }, 15)

    return () => {clearInterval(writer)};
  }, [text]);

  const textDisplayer = () => {
    let updatedText = presentation.substring(0, text.length + 1) //letter advances

    setText(updatedText);
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my portfolio</span>
            <h1>{"Hi! I'm Pablo Manolaki, a "}<span className='wrap'>Full Stack Web Developer</span></h1>
            <p>{text}</p>
            <Nav.Link href="#contact" onClick={() => onUpdateActiveLink('contact')}>
              <button href="#contact">Let's Connect!<ArrowRightCircle size={25}/></button>
            </Nav.Link>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='header img' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
