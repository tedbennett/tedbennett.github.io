import React from 'react';
import {
  Accordion, Container, Row, Col,
} from 'react-bootstrap';
import BlogPost from '../BlogPost/BlogPost';

const Blogs: React.FC = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col lg={2} />
      <Col lg={8}>
        <div className="padded">
          <Accordion>
            <BlogPost title="Hi" body="Body" project="Rocket 🚀" date={new Date()} />
          </Accordion>
        </div>
      </Col>
    </Row>

  </Container>
);

export default Blogs;
