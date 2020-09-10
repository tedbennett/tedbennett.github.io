import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

interface BlogProps {
    title: string,
    body: string,
    project: string,
    date: Date
}

const BlogPost: React.FC<BlogProps> = ({
  title,
  body,
  project,
  date,
}: BlogProps) => (
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <h1>{title}</h1>
      <p>{`${project} - ${date.toLocaleDateString('en-US')}`}</p>

    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{body}</Card.Body>
    </Accordion.Collapse>
  </Card>
);

export default BlogPost;
