import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Ideas: React.FC = () => (
    <Container >
        <Row className="justify-content-md-center">
            <Col lg={2} />
            <Col lg={8} >
                <div className="padded">
                    <Row className="justify-content-md-center ">
                        <h1 className="title">{'// Ideas'}</h1>
                    </Row>
                    <Row className="justify-content-md-center ">
                        <h1>{'In Progress'}</h1>
                    </Row>
                    <Row >
                        <h2>{'> Running Tracker'}</h2>
                    </Row>
                    <Row>
                        <p>SwiftUI 2.0 </p>
                    </Row>
                </div>
            </Col>
            <Col lg={2} />
        </Row>
    </Container >
);

export default Ideas;