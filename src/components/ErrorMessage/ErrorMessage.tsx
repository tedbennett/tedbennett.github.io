// eslint-disable-next-line
import React from 'react';
import { Row } from 'react-bootstrap';

const ErrorMessage: React.FC = () => (
  <Row className="justify-content-center">
    <h3>Unable to connect to Firebase</h3>
  </Row>
);

export default ErrorMessage;
