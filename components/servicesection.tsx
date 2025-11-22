"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';

function ServiceSection() {
    const activities = [
        { icon: "bi-boombox", title: "Dance Workshops", desc: "Learn the iconic choreography of Hype Boy, Attention, and Super Shy with professional instructors." },
        { icon: "bi-bag-heart-fill", title: "Official Merch", desc: "Get your hands on exclusive NewJeans merchandise, lightsticks, and limited edition albums." },
        { icon: "bi-ticket-perforated-fill", title: "Live Concerts", desc: "Experience the energy live! Check out our upcoming tour dates and fan meeting schedules." }
    ];

    return (
        <section id="activities" className="py-5">
            <Container className="my-5">
                <div className="text-center mb-5">
                    <h2 className="section-title">Fan Activities</h2>
                    <p className="text-muted">Join the excitement and be part of the Bunnies world.</p>
                </div>
                <Row>
                    {activities.map((item, idx) => (
                        <Col md={4} className='mb-4' key={idx}>
                            <Card className="text-center h-100 border-0 shadow-sm p-4 card-hover bg-white">
                                <div className="mb-3 text-primary">
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '3rem' }}></i>
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold mb-3">{item.title}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        {item.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> 
            </Container>
        </section>
    );
}

export default ServiceSection;