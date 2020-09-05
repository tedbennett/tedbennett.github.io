import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home: React.FC = () => (
  <Container>
    <Row className="justify-content-md-center">
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <h1 className="title text-light">{"// Hi, I'm Ted"}</h1>
    </Row>
    <Row className="justify-content-md-center">
      <p className="blurb text-light">
        {"> I'm a junior developer with an interest in iOS and web development"}
      </p>
    </Row>
  </Container>
);

export default Home;
