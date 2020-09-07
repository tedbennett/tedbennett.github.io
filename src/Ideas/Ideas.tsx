/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Ideas.css';
import logo from '../img/github-logo.png';

type Idea = {
    title: string;
    desc: string;
    githubUrl: string;
};

type IdeaProps = {
    ideas: Idea[];
};

const inProgressIdeas: Idea[] = [
  {
    title: 'Running Tracker',
    desc: `I want to make a exercise tracker for running, with emphasis on the user's goals.
        The app would ask how often and how far the user would like to run, and then give reminders
        to help them real their goal. Their progress would be tracked and statistics would be available
        on their pace etc.
        I plan to make this with SwiftUI 2.0 with the Map View.`,
    githubUrl: 'https://github.com/tedbennett/music-converter',
  },
  {
    title: 'Language Learner',
    desc: 'An App to learn languages',
    githubUrl: '',
  },
];

const nonProgressIdeas: Idea[] = [
  {
    title: 'Running Tracker',
    desc: 'An App to track running',
    githubUrl: '',
  },
  {
    title: 'Language Learner',
    desc: 'An App to learn languages',
    githubUrl: '',
  },
];

const Ideas: React.FC = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col lg={2} />
      <Col lg={8}>
        <div className="padded">
          <Row className="justify-content-center">
            <h1 className="title text-center">{'// Ideas'}</h1>
          </Row>
          <Row>
            <h1 className="idea-header">{'// In Progress'}</h1>
          </Row>
          {inProgressIdeas.map((idea, index) => (
            <IdeaItem title={idea.title} desc={idea.title} githubUrl={idea.githubUrl} key={index} />
          ))}
          <Row>
            <h1 className="idea-header">{'// Other Ideas'}</h1>
          </Row>
          {nonProgressIdeas.map((idea, index) => (
            <IdeaItem title={idea.title} desc={idea.title} githubUrl={idea.githubUrl} key={index} />
          ))}

        </div>
      </Col>
      <Col lg={2} />
    </Row>
  </Container>
);

const IdeaItem = ({ title, desc, githubUrl }: Idea) => (
  <div className="idea">
    <Row>
      <h3 className="idea-title">{`> ${title}`}</h3>
      {(githubUrl !== '')
        ? (
          <a href={githubUrl}>
            <img
              src={logo}
              width="30"
              height="30"
              className=" d-inline-block align-top "
              alt="GitHub logo"
            />
          </a>
        ) : null}
    </Row>
    <Row>
      <p className="idea-body">
        {desc}
      </p>
    </Row>
  </div>
);

export default Ideas;
