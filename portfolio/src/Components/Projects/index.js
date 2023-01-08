import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/PI-Countries.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp from '../assets/img/color-sharp2.png';
import ProjectCard from "../ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Projects(){

    const projects = [
        {
            title: 'Countries App',
            description: 'A SPA that shows a list of countries. You can check their details, sort them by criteria, search and add activities to each country. Built using: React, Redux, Express, Node.JS, PostgreSQL and Sequelize.',
            imgUrl: projImg1
        },
        {
            title: 'Project 2',
            description: 'This is Project 2',
            imgUrl: projImg2
        },
        {
            title: 'Project 3',
            description: 'This is Project 3',
            imgUrl: projImg3
        }
    ]

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) => 
                        <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                            <h2>Projects</h2>
                            <p>These are some of my most outstanding projects. Take a look!</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link href="https://pi-countries-front-production.up.railway.app/" eventKey='first'>Countries App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey='first'>
                                <Row className="justify-content-center">
                                    <ProjectCard title={projects[0].title} description={projects[0].description} imgUrl={projects[0].imgUrl}/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                                <Row className="justify-content-center">
                                    <ProjectCard title={projects[1].title} description={projects[1].description} imgUrl={projects[1].imgUrl}/>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                                <Row className="justify-content-center">
                                    <ProjectCard title={projects[2].title} description={projects[2].description} imgUrl={projects[2].imgUrl}/>
                                </Row>
                            </Tab.Pane>
                            </Tab.Content>
                            </Tab.Container>
                        </div>
                    }
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp} alt='project background'/>
        </section>
    )
}