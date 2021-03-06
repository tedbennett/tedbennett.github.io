/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-curly-brace-presence */
// eslint-disable-next-line
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import './Ideas.css';
import { db } from '../../services/firebase';
import logo from '../../img/github-logo.png';

interface Idea {
    title: string;
    body: string;
    url: string;
}

interface IdeaProps {
  ideas: Idea[];
}

interface IdeaState {
    ideas: Idea[];
    error: boolean;
}

const IdeaItem = ({ title, body, url }: Idea) => (
  <div className="idea">
    <Row>
      <h3 className="idea-title">{`> ${title}`}</h3>
      {(url !== '')
        ? (
          <a href={url}>
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
        {body}
      </p>
    </Row>
  </div>
);

const IdeasBody: React.FC<IdeaProps> = ({ ideas }: IdeaProps) => (
  <div>
    <Row>
      <h1 className="idea-header">{'// In Progress'}</h1>
    </Row>
    {ideas.filter((idea) => idea.url.length !== 0).map((idea, index) => (
      <IdeaItem
        title={idea.title}
        body={idea.body}
        url={idea.url}
        key={index}
      />
    ))}
    <Row>
      <h1 className="idea-header">{'// Other Ideas'}</h1>
    </Row>
    {ideas.filter((idea) => idea.url.length === 0).map((idea, index) => (
      <IdeaItem
        title={idea.title}
        body={idea.body}
        url={idea.url}
        key={index}
      />
    ))}
  </div>
);

class Ideas extends React.Component<{}, IdeaState> {
  constructor(props: {}) {
    super(props);
    this.state = { ideas: [], error: false };
  }

  componentDidMount = () => {
    try {
      db.ref('ideas').once('value').then((snapshot) => {
        const ideas: Idea[] = [];
        snapshot.forEach((snap) => {
          ideas.push(snap.val());
        });
        this.setState({ ideas, error: false });
      });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render = () => {
    const { ideas, error } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={2} />
          <Col lg={8}>
            <div className="padded">
              <Row className="justify-content-center">
                <h1 className="title text-center">{'// Ideas'}</h1>
              </Row>
              {error ? <ErrorMessage /> : <IdeasBody ideas={ideas} />}
            </div>
          </Col>
          <Col lg={2} />
        </Row>
      </Container>
    );
  }
}

export default Ideas;
