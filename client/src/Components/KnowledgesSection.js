import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import KnowledgeBlock from './KnowledgeBlock'



class KnowledgesSection extends Component {
    render() {
        return (
            <Container className="section">
                <center>
                    <h1>My Knowledge Area</h1>
                </center>
                <center>
                    <p>This topic is about what technologies I used before and I familiar with.</p>
                </center>
                <Row className="knowledge-area">
                    <Col sm={12} lg={4}>
                        <KnowledgeBlock src="https://img.icons8.com/ios/50/000000/programming.png" header="Programming" text="C#, MVC Entity Framework, ASP.NET, Python (Game Dev Certification), JS, JQuery, HTML, CSS, Bootstrap, Power Shell, SQL Scripting, PHP a bit. Familiar with Wordpress. Finished Cryptography Course but it was a long time ago :)" />
                    </Col>
                    <Col sm={12} lg={4}>
                        <KnowledgeBlock src="https://img.icons8.com/wired/64/000000/server.png" header="System / Networking" text="Active Directory Configuration, Standart Services, as GPO, DNS. DHCP, FS, RDS, FTP Server, Web Server etc... ESXI, vCenter, FreePBX, FXO, FXS, Storage Configuration (QNAP, Synology), CheckPoint, Sonicwall, Cyberoam, Exchange Server, SQL Server, Symantec Brightmail, Kaspersky Enterprise Products, Runecast, SCADAfence, Zecurion DLP, Veeam, made some Penetration Tests, BBSW / Cisco Switch configurations etc..." />
                    </Col>
                    <Col sm={12} lg={4}>
                        <KnowledgeBlock src="https://img.icons8.com/ios/50/000000/picture.png" header="Graphic (Some basics)" text="Adobe Photoshop, Adobe Illustrator" />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default KnowledgesSection;


