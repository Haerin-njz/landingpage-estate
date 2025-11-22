"use client";
import { Container, Row, Col, Button, Image, Badge } from "react-bootstrap";

function AboutSection() {
  return (
    <section id="about" className="py-5">
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0 fade-in">
            <div className="position-relative">
                <Image 
                    src="/images/krbkaveb.jpg" 
                    alt="NewJeans Members" 
                    fluid 
                    className="rounded-4 shadow-lg"
                    style={{ objectFit: 'cover', height: 'auto', width: '100%' }}
                />
                <Badge bg="primary" className="position-absolute top-0 start-0 m-3 p-2 fs-6 shadow">
                    Est. 2022
                </Badge>
            </div>
          </Col>
          <Col md={6} className="ps-md-5">
            <h6 className="text-primary fw-bold text-uppercase">About ADOR</h6>
            <h2 className="display-5 fw-bold mb-4">The Icon of a New Era</h2>
            <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              NewJeans (뉴진스) is a 5-member girl group produced by Min Hee-jin. 
              Just like jeans that never go out of style and find their place in everyone's wardrobe, 
              we aim to become an icon of this era with timeless music and energetic dance performances.
            </p>
            <div className="d-flex gap-4 mb-4">
                <div className="border-start border-4 border-primary ps-3">
                    <h3 className="fw-bold mb-0">5</h3>
                    <p className="text-muted mb-0">Members</p>
                </div>
                <div className="border-start border-4 border-info ps-3">
                    <h3 className="fw-bold mb-0">1B+</h3>
                    <p className="text-muted mb-0">Streams</p>
                </div>
                <div className="border-start border-4 border-pink ps-3">
                    <h3 className="fw-bold mb-0">Bunnies</h3>
                    <p className="text-muted mb-0">Fandom Name</p>
                </div>
            </div>
            <Button variant="outline-dark" className="rounded-pill px-4">View Member Profiles</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;