"use client";

import{Container , Row, Col, Image} from 'react-bootstrap';

function ServiceSection() {
    return (
        <Container className="my-5">
            <Row>
                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="\images\d.jpg" alt="Service 1" fluid />
                    <h3>Service 1</h3>
                    <p>Description of Service 1</p>
                </Col>
                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="\images\q.jpg" alt="Service 1" fluid />
                    <h3>Service 1</h3>
                    <p>Description of Service 1</p>
                </Col>
                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="\images\y.jpg" alt="Service 1" fluid />
                    <h3>Service 1</h3>
                    <p>Description of Service 1</p>
                </Col>
            </Row> 
        </Container>
    );
}

export default ServiceSection;