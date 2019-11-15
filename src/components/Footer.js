import React from 'react';
import {Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer>
    <Container>
      <Row>
        <Col>
          <p className="copyright text-muted small">Copyright &copy; 2019. All Rights Reserved</p>
          </Col>
        </Row>
    </Container>
  </footer>
  );
}

export default Footer;