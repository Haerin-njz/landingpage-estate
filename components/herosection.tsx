"use client"
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
}

const HeroSection = () => {
    const slides: Slide[] = [
        {
            id: 1,
            title: "Get Up & Dance!",
            subtitle: "Experience the rhythm of the new generation. Stream our latest EP 'Get Up' now.",
            imageUrl: "/images/banner_01.JPG", 
        },
        {
            id: 2,
            title: "We Are NewJeans",
            subtitle: "Minji, Hanni, Danielle, Haerin, and Hyein. Redefining K-Pop with retro vibes.",
            imageUrl: "/images/banner_02.JPG",
        },
        {
            id: 3,
            title: "Attention, Bunnies!",
            subtitle: "Join our global fan community and never miss an update on our world tour.",
            imageUrl: "/images/banner_03.jpg",
        },
    ]

    return (
        <section id="home">
            <Carousel 
                fade 
                interval={4000} 
                controls={true} 
                indicators={true}
            >
                {slides.map((slide) => (
                    <Carousel.Item key={slide.id} style={{ height: "90vh" }}>
                        <div 
                            style={{
                                backgroundImage:`url('${slide.imageUrl}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: "100%",
                                width: "100%",
                                position: "relative"
                            }}
                        >
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.4)" 
                            }}></div>

                            <div className="d-flex align-items-center justify-content-center h-100 position-relative">
                                <div className="text-center text-white hero-caption fade-in mx-3">
                                    <h1 className="display-3 fw-bold mb-3">{slide.title}</h1>
                                    <p className="lead mb-4 fs-4">{slide.subtitle}</p>
                                    <div className="d-flex gap-3 justify-content-center">
                                        <Button variant="light" size="lg" className="rounded-pill px-4 fw-bold text-primary shadow">
                                            Watch MV
                                        </Button>
                                        <Button variant="outline-light" size="lg" className="rounded-pill px-4 fw-bold shadow">
                                            Listen Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </section>
    )
}

export default HeroSection;