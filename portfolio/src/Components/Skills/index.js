import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export default function Skills (){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };  

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx" >
                            <h2>
                                Skills
                            </h2>
                            <Carousel className='skill-slider' activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item className="item">
                                    <img src={meter1} alt="Carousel Image"/>
                                    <h5>Web Development</h5>
                                    <p>I started my roadtrip in the IT world with the objective of becoming a Web Developer.<br></br>Now it's a reality and I keep on learning and adding new tools to my collection that help me explore this vast field.<br></br></p>
                                </Carousel.Item>
                                <Carousel.Item className='item'>
                                    <img src={meter2} alt="Carousel Image"/>
                                    <h5>Web Design</h5>
                                    <p>While developing Web Platforms I found it's design and User Interface to be of outmost importance.<br></br>It's because of this that I try to prioritize accesibility and a friendly interface for the user when designing a web platform.<br></br>This is, in my opinion, the most important aspect of Web Development, and something I try to improve on every project I make.<br></br></p>
                                </Carousel.Item>
                                <Carousel.Item className='item'>
                                    <img src={meter3} alt="Carousel Image"/>
                                    <h5>Teamwork</h5>
                                    <p>Working with my colleagues is, without a doubt, one of the things I enjoy the most.<br></br>Not only as a dev, but also as a person.<br></br>Getting to know new people, their personalities and ways of thinking is something I am always excited to experience when starting a new group project.<br></br></p>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}