// eslint-disable-next-line
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Home.css';

const Home: React.FC = () => (
  <Container>
    <Row className="justify-content-center">
      {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
      <h1 className="title2 text-light">{"// Hi, I'm Ted"}</h1>
    </Row>
    <Row className="justify-content-center">
      <p className="blurb text-light text-center">
        {"> I'm a junior developer based in London with an interest in iOS and web development"}
      </p>
    </Row>
  </Container>
);

export default Home;
