import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

import githubLogo from '../img/github-logo.png';
import appStoreLogo from '../img/appStore-logo.svg';

import './Page.css';

type PageProps = {
    title: string,
    blurb: string,
    githubUrl: string,
    appStoreUrl: string,
    imageUrls: string[],
    description: string[]
}
const Page: React.FC<PageProps> = ({
  title, blurb, githubUrl, appStoreUrl, imageUrls, description,
}: PageProps) => (
  <Container>
    <Col />
    <Col>
      <Row className="justify-content-md-center">
        <a className="title text-light" href={githubUrl}>
          {`// ${title}`}
        </a>
      </Row>
      <Row className="justify-content-md-center">
        <p className="blurb text-light">
          {`> ${blurb}`}
        </p>
      </Row>
      <Row className="justify-content-md-center">
        <a href={appStoreUrl}>
          <Image
            className="logo"
            src={appStoreLogo}
          />
        </a>
        <a href={githubUrl}>
          <Image
            className="logo"
            src={githubLogo}
            height={40}
            width={40}
          />
        </a>
      </Row>
      <Row className="justify-content-md-center">
        {imageUrls.map((value) => (
          <Col
            xs={4}
            md={3}
            className="image"
          >
            <Image
              src={value}
              rounded
              fluid
            />
          </Col>
        ))}
      </Row>
      <Row className="justify-content-md-center" />
      <Row>
        {description.map((string) => (
          <p className="description text-light">
            {`> ${string}`}
          </p>
        ))}
      </Row>
      <Row className="justify-content-md-center">
        <a href={githubUrl} className="link text-light">{'> Find the source code and README on GitHub'}</a>
      </Row>
    </Col>
    <Col />
  </Container>
);

export default Page;
