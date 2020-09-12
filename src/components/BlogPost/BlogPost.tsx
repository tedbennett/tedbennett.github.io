// eslint-disable-next-line
import React from 'react';
import {
  Card, Accordion, Row, Col,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import './BlogPost.css';

interface BlogProps {
    title: string,
    body: string,
    project: string,
    date: string,
    index: number,
}

const BlogPost: React.FC<BlogProps> = ({
  title,
  body,
  project,
  date,
  index,
}: BlogProps) => (
  <Card className="bg-dark text-light card-margin">
    <Accordion.Toggle as={Card.Header} eventKey={index.toString()}>
      <Row>
        <h1>{`> ${title}`}</h1>
      </Row>
      <Row>
        <p>{project}</p>
      </Row>

    </Accordion.Toggle>
    <Accordion.Collapse eventKey={index.toString()}>
      <Card.Body>
        <ReactMarkdown className="text-light" source={body} />
      </Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default BlogPost;
