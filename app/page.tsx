"use client";
import React from "react";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/worksection";
import ServiceSection from "@/components/servicesection";
import ContactSection from "@/components/contactsection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServiceSection />
      <ContactSection />
    </main>
  );
};