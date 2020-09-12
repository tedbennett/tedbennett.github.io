// eslint-disable-next-line
import React from 'react';
import {
  Accordion, Container, Row, Col,
} from 'react-bootstrap';
import BlogPost from '../BlogPost/BlogPost';
import { db } from '../../services/firebase';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface Blog {
  title: string;
  body: string;
  project: string;
  date: string;
  key: string;
}

interface BlogsProps {
  blogs: Blog[];
}

interface BlogsState {
  blogs: Blog[];
  error: boolean;
}

const BlogsList: React.FC<BlogsProps> = ({ blogs }: BlogsProps) => (
  <Accordion>
    {blogs.map((blog, index) => (
      <BlogPost
        title={blog.title}
        body={blog.body}
        project={blog.project}
        date={blog.date}
        key={blog.key}
        index={index}
      />
    ))}
  </Accordion>
);

class BlogsPage extends React.Component<{}, BlogsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      blogs: [],
      error: false,
    };
  }

  componentDidMount() {
    try {
      db.ref('blogs').once('value').then((snapshot) => {
        const blogs: Blog[] = [];
        snapshot.forEach((snap) => {
          blogs.push({ ...snap.val(), key: snap.key });
        });
        this.setState({ blogs, error: false });
      });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  render() {
    const { blogs, error } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={2} />
          <Col lg={8}>
            <div className="padded">
              <Row className="justify-content-center">
                {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
                <h1 className="title text-center">{'// Blogs'}</h1>
              </Row>
              {error ? <ErrorMessage /> : <BlogsList blogs={blogs} />}
            </div>
          </Col>
          <Col lg={2} />
        </Row>
      </Container>
    );
  }
}

export default BlogsPage;
