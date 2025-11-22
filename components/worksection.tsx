"use client"
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function WorkSection() {
    const albums = [
        { id: 1, img: "/images/njnj.jpg", title: "Ditto", tag: "Debut EP" },
        { id: 2, img: "/images/newjeans-kpop.gif", title: "NewJeans", tag: "Single Album" },
        { id: 3, img: "/images/njjj.jpg", title: "Super Shy", tag: "Get Up EP" },
    ];

    return (
        <section id="discography" className="py-5 bg-light">
            <Container>
                <Row className='mb-5 text-center'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h2 className="section-title">Latest Discography</h2>
                        <p className="text-muted">
                            Explore our musical journey through our albums and iconic music videos.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    {albums.map((item) => (
                        <Col md={4} key={item.id}>
                            <Card className="h-100 card-hover shadow-sm rounded-4 border-0">
                                <div style={{ overflow: 'hidden', height: '300px' }} className="rounded-top-4">
                                    <Card.Img 
                                        variant="top" 
                                        src={item.img} 
                                        style={{ height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <Card.Body>
                                    <Badge bg="primary" className="mb-2">{item.tag}</Badge>
                                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                                    <Card.Text className="text-muted small">
                                        Watch the official music video and learn the choreography.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="bg-white border-0 pb-3">
                                    <a href="#" className="text-decoration-none text-primary fw-bold stretched-link">
                                        Stream Now <i className="bi bi-play-circle-fill ms-1"></i>
                                    </a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default WorkSection;