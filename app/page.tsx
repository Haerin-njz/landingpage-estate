"use client";
import React from "react";
import Hero from "../components/herosection";

//components
import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import WorkSection from "@/components/worksection";
import ServiceSection from "@/components/servicesection";
import ContactSection from "@/components/contactsection";
import Footer from "@/components/footer";

//bootstrap
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <Container className="my-5">
          <Row className="my-4">
            <Col md={6} className="align-self-center mb-3">
            <h2>About Us</h2>
            <h6>What we do?</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ea nostrum dicta pariatur! Repudiandae, veniam libero! Minus iste nam consectetur eaque quasi, porro asperiores?
            </p>
            <Button variant="info">Learn More</Button>
            </Col>
            <Col md={6}>
            <p>
              <Image src="/images/newjeans-kpop.gif" alt="About us" width={500} height={300}></Image>
            </p>
            </Col>
          </Row>
        </Container>
        <WorkSection></WorkSection>
        <ServiceSection ></ServiceSection>
        <section id="contact">
          <ContactSection ></ContactSection>
        </section>
        <Footer></Footer>
      </main>
   </div>
  )
};