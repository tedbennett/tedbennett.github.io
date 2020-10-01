// eslint-disable-next-line
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ReactMarkdown from 'react-markdown';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import githubLogo from '../../img/github-logo.png';
import appStoreLogo from '../../img/appStore-logo.svg';

import './Page.css';

type PageProps = {
  title: string,
  blurb: string,
  platform: string,
  githubUrl: string,
  appStoreUrl: string,
  imageUrls: string[],
  readmeUrl: string,
  privacyUrl: string;
};

type PageState = {
  markdown: string;
}

type LinkProps = {
  appStoreUrl: string,
  githubUrl: string;
};

type MarkdownProps = {
  markdown: string;
};

const ReadMeAccordion: React.FC<MarkdownProps> = ({ markdown }: MarkdownProps) => (
  <Container fluid className="padded">
    <Accordion className="bg-dark" defaultActiveKey="1">
      <Card className="bg-dark text-light">
        <Accordion.Toggle as={Card.Header} eventKey="0" className="blurb text-center">
          README
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="bg-dark">
            <ReactMarkdown className="text-light" source={markdown} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Container>
);

const ExternalLinks: React.FC<LinkProps> = ({ appStoreUrl, githubUrl }: LinkProps) => (
  <div>
    {(appStoreUrl !== '')
      ? (
        <a href={appStoreUrl}>
          <Image
            className="logo"
            src={appStoreLogo}
          />
        </a>
      ) : null}
    <a href={githubUrl}>
      <Image
        className="logo"
        src={githubLogo}
        height={40}
        width={40}
      />
    </a>
  </div>
);

class Page extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);
    this.state = { markdown: '' };
  }

  componentDidMount() {
    const { readmeUrl } = this.props;
    fetch(readmeUrl)
      .then((response) => response.text())
      .then((text) => {
        this.setState({
          markdown: text,
        });
      });
  }

  render = () => {
    const {
      title,
      blurb,
      platform,
      githubUrl,
      appStoreUrl,
      imageUrls,
      privacyUrl,
    } = this.props;
    const {
      markdown,
    } = this.state;

    return (
      <Container fluid>
        <Row xs={1} lg={2}>
          <Col>
            <div className="padded">
              <Row>
                <a className="title text-light padded" href={githubUrl}>
                  {`// ${title}`}
                </a>
              </Row>
              <Row>
                <p className="blurb text-light padded">
                  {`> ${blurb}`}
                </p>
              </Row>
              <Row>
                <p className="blurb text-light padded">
                  {`> ${platform}`}
                </p>
              </Row>
              <Row>
                <ReadMeAccordion markdown={markdown} />
              </Row>
              <Row className="justify-content-center">
                <ExternalLinks
                  githubUrl={githubUrl}
                  appStoreUrl={appStoreUrl}
                />
              </Row>
              <Row className="justify-content-center">
                <Button variant="secondary">
                  <Link to={privacyUrl} className="text-light">Privacy Policy</Link>
                </Button>
              </Row>
            </div>
          </Col>
          <Col>
            <Row xs={1} sm={2}>
              {imageUrls.map((value, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={index}>
                  <Image
                    src={value}
                    rounded
                    fluid
                    className="padded"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <div className="padded">
            <h1 className=" text-light padded">
              {'// Blog'}
            </h1>
          </div>
        </Row> */}
      </Container>
    );
  };
}

export default Page;
