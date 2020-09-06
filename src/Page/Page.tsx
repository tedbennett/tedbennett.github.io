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
  description: string[];
};
const Page: React.FC<PageProps> = ({
  title, blurb, githubUrl, appStoreUrl, imageUrls, description,
}: PageProps) => (
    <Container >
      <Row className="justify-content-md-center">
        <Col lg={2} />
        <Col lg={8} >
          <div className="padded">
            <Row className="justify-content-md-center">
              <a className="title text-light" href={githubUrl}>
                {`// ${title}`}
              </a>
            </Row>
            <Row className="justify-content-md-center">
              <ul>
                <li className="blurb text-light justify-content-md-center">
                  {blurb}
                </li>
              </ul>

            </Row>
            <Row className="justify-content-center">
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
            <Row className="justify-content-center" xs={1} md={2}>
              {imageUrls.map((value, index) => (
                <Col
                  key={index}
                >
                  <Image
                    src={value}
                    rounded
                    fluid
                    className="padded"
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-md-center" />
            <Row>
              <ul>
                {description.map((string, index) => (
                  <li className="description text-light" key={index}>
                    {string}
                  </li>
                ))}
              </ul>
            </Row>
            <Row className="justify-content-center">
              <a href={githubUrl} className="link text-light">{'> Find the source code and README on GitHub'}</a>
            </Row>
          </div>
        </Col>
        <Col lg={2} />
      </Row>
    </Container>
  );

export default Page;
