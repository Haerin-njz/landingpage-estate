"use client"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function ContactSection() {
  return (
    <Container className='my-5 py-5'>
      <Row className='justify-content-center'>
        <Col lg={8}>
          <Card className='border-0 shadow-lg text-white' style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(10px)' }}>
            <Card.Body className="p-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Join the Community</h2>
                <p>Want to collaborate or send fan mail? Reach out to ADOR.</p>
              </div>
              <Form>
                <Row>
                    <Col md={6} className="mb-3">
                        <Form.Control type='text' placeholder='Your Name / Fanbase' className="py-3 rounded-3 border-0" required />
                    </Col>
                    <Col md={6} className="mb-3">
                        <Form.Control type='email' placeholder='Your Email' className="py-3 rounded-3 border-0" required />
                    </Col>
                </Row>
                <Form.Group className='mb-4' controlId='formMessage'>
                  <Form.Control
                    as='textarea'
                    rows={5}
                    placeholder='Write your message for NewJeans...'
                    className="rounded-3 border-0"
                    required
                  />
                </Form.Group>
                <div className="d-grid">
                    <Button variant='primary' size="lg" type='submit' className="rounded-pill shadow fw-bold">
                    Send Message
                    </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;