import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const SiteName = styled.h1`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
font-size: 30px;
font-weight: 700;
`


class Header extends Component {
    render() {
        return (
            
                <Container id="myHeader">
                    <Row className="align-items-center">
                        <Col sm={8} lg={8}>
                            <Navbar.Brand href="#">My Esse</Navbar.Brand>
                        </Col>
                        <Col sm={4} lg={4}>
                            <Navbar sticky="top" variant="light">
                                <Nav className="mr-auto allign-left">
                                    <Nav.Link href="/" className="nav-link">Me</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/knowledges">Knowledges</Nav.Link>
                                    <Nav.Link href="/test" className="nav-link">Testing</Nav.Link>
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                
        )
    }
}

export default Header;