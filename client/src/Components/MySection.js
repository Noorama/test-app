import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyPic from '../img/hero-img.png'



class MySection extends Component {
    render() {
        return (
            <Container>
                <Row className="align-items-center">
                    <Col sm={12} lg={6}>
                        <h6>This is me</h6>
                        <h1>Maxym Sydorov</h1>
                        <p>This is my esse and I will introduce about myself a little here.</p>
                        <button className="button"> Some Button</button>
                    </Col>
                    <Col sm={12} lg={6}>
                        <img src={MyPic} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MySection;


