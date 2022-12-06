import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp from '../assets/img/color-sharp2.png';
import ProjectCard from "../ProjectCard";

export default function Projects(){

    const projects = [
        {
            title: 'Project 1',
            description: 'This is Project 1',
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
                    <h2>Projects</h2>
                    <p>This are some of my most outstanding projects. Take a look!</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                    <Nav variant="pills" defaultActiveKey='/home'>
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab One</Nav.Link>
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
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return(
                                            <ProjectCard
                                                key={index}
                                                {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>Text Two</Tab.Pane>
                        <Tab.Pane eventKey='third'>Text Three</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp} alt='project background'/>
        </section>
    )
}