import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CatPic from '../img/about-img.gif'



class AboutSection extends Component {
    render() {
        return (
            <Container className="section-colored">
                <Row className="align-items-center">
                    <Col sm={12} lg={6}>
                        <img src={CatPic} width="300px" height="300px"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <h6>ABOUT ME</h6>
                        <h1>PERSONAL DETAILS</h1>
                        <p>I am a highly motivated Person with very good experience in the IT sector. I have worked with different companies in Turkey and have completed various projects with a wide range of product solutions. Good in System Integration, Network Solutions side. Have a knowledges of back end programming via C# on ASP.NET.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AboutSection;