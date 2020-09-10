import React from 'react';
import { Accordion } from 'react-bootstrap';
import BlogPost from '../BlogPost/BlogPost';

const Blogs: React.FC = () => (
  <Accordion>
    <BlogPost title="Hi" body="Body" project="Rocket 🚀" date={new Date()} />
  </Accordion>
);

export default Blogs;
