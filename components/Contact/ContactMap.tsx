"use client";

import { motion } from "framer-motion";
import "./ContactMap.css";

export default function ContactMap() {
  return (
    <section className="contact-map">
      <motion.div
        className="contact-map-frame"
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.96,
          rotateX: 5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Original Google Maps Embed */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.2877573133915!2d80.25616289999999!3d12.982433200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526752f4689f8b%3A0xfe5a0a8430defadc!2sLuxe%20Construction%20Consulting!5e1!3m2!1sen!2sin!4v1787821040325!5m2!1sen!2sin"
          title="Luxe Construction Consulting Location"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Cinematic edge */}
        <div className="contact-map-vignette" />

        {/* Moving light */}
        <div className="contact-map-light" />

        {/* Top cinematic line */}
        <div className="contact-map-line" />
      </motion.div>
    </section>
  );
}