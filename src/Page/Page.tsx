import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import ReactMarkdown from 'react-markdown';

import githubLogo from '../img/github-logo.png';
import appStoreLogo from '../img/appStore-logo.svg';

import './Page.css';

type PageProps = {
  title: string,
  blurb: string,
  platform: string,
  githubUrl: string,
  appStoreUrl: string,
  imageUrls: string[],
  readmeUrl: string;
};

type LinkProps = {
  appStoreUrl: string,
  githubUrl: string;
};

class Page extends React.Component<PageProps> {

  state = { markdown: "" };

  MediaLinks: React.FC<LinkProps> = (props: LinkProps) => {
    if (props.appStoreUrl !== "") {
      return (
        <div>
          <a href={props.appStoreUrl}>
            <Image
              className="logo"
              src={appStoreLogo}
            />
          </a>
          <a href={props.githubUrl}>
            <Image
              className="logo"
              src={githubLogo}
              height={40}
              width={40}
            />
          </a>
        </div>
      );
    }
    return (
      <a href={props.githubUrl}>
        <Image
          className="logo"
          src={githubLogo}
          height={40}
          width={40}
        />
      </a>);
  };

  componentDidMount() {
    console.log('fetching');
    fetch(this.props.readmeUrl)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        });
      });
  }

  render = () => (
    <Container >
      <Row className="justify-content-md-center">
        <Col lg={2} />
        <Col lg={8} >
          <div className="padded">
            <Row >
              <a className="title text-light padded" href={this.props.githubUrl}>
                {`// ${this.props.title}`}
              </a>
            </Row>
            <Row >
              <p className="blurb text-light padded">
                {'> ' + this.props.blurb}
              </p>
            </Row>
            <Row >
              <p className="blurb text-light padded">
                {'> ' + this.props.platform}
              </p>
            </Row>
            <Row className="justify-content-center" xs={1} md={2}>
              {this.props.imageUrls.map((value, index) => (
                <Col key={index} >
                  <Image
                    src={value}
                    rounded
                    fluid
                    className="padded"
                  />
                </Col>
              ))}
            </Row>
            <Row >
              <Container fluid className="padded">
                <Accordion className="bg-dark" defaultActiveKey="1">
                  <Card className="bg-dark text-light">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="blurb text-center">
                      README
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="bg-dark">
                        <ReactMarkdown className="text-light" source={this.state.markdown} />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
            </Row>
            <Row className="justify-content-center">
              {/* <this.MediaLinks
                appStoreUrl={this.props.appStoreUrl}
                githubUrl={this.props.githubUrl}
              /> */}
            </Row>
          </div>
        </Col>
        <Col lg={2} />
      </Row>
    </Container >
  );
}

export default Page;
