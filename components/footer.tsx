"use client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
  return (
    <footer id="footer" className="pt-md-5 pd-md-2 py-4 bg-light border-top">
      <Container>
        <Row className="gy-4">
          {/* Our Products */}
          <Col md={3}>
            <h3>Our Products</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Account</a></li>
              <li className="mb-2"><a href="#">Bundle</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Contact</a></li>
              <li className="mb-2"><a href="#">Circular</a></li>
            </ul>
          </Col>

          {/* Quick Link */}
          <Col md={3}>
            <h3>Quick Link</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Service</a></li>
              <li className="mb-2"><a href="#">Work</a></li>
              <li className="mb-2"><a href="#">Products</a></li>
            </ul>
          </Col>

          {/* Terms */}
          <Col md={3}>
            <h3>Terms</h3>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#">Refund Policy</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2"><a href="#">License</a></li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={3}>
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates and offers.</p>
            <Form>
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <Button variant="primary">
                  <i className="bi bi-send"></i>
                </Button>
              </InputGroup>
            </Form>
            <div className="mt-3">
              <a href="#" className="text-dark me-3 fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark me-3 fs-5"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark me-3 fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} LandingPage Estate. All rights reserved.
            </p>
          </Col>   
        </Row>
      </Container>
    </footer>
  );
}