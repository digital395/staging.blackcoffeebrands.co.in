"use client";

import "./ServicesOverview.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Home Design & Construction",
    image: "/images/service/1.png",
  },
  {
    id: "02",
    title: "Home Renovation",
    image: "/images/service/2.png",
  },
  {
    id: "03",
    title: "Interior Design",
    image: "/images/service/3.png",
  },
  {
    id: "04",
    title: "Turnkey Design & Build",
    image: "/images/service/4.png",
  },
  {
    id: "05",
    title: "Project Management Consultancy",
    image: "/images/service/5.png",
  },
  {
    id: "06",
    title: "Commercial Construction",
    image: "/images/service/6.png",
  },
];

export default function ServicesOverview() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="services-section">
      {/* Cinematic background */}
      <div className="services-noise" />
      <div className="services-glow services-glow-one" />
      <div className="services-glow services-glow-two" />

      <div className="services-container">

        {/* Heading */}
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>03 / SERVICES</span>

          <h2>
            Services Overview
            <br />
            <em>Preview</em>
          </h2>

          <div className="services-heading-line" />
        </motion.div>

        {/* Equal 3 x 2 Grid */}
        <div className="services-grid">

          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={`service-card ${
                activeCard === index ? "is-active" : ""
              }`}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: index % 2 === 0 ? -1.5 : 1.5,
                transition: {
                  duration: 0.35,
                },
              }}
            >
              {/* Card number */}
              <div className="service-number">
                {service.id}
              </div>

              {/* Image */}
              <div className="service-image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="service-image"
                />

                <div className="service-image-overlay" />

                {/* Image arrow */}
                <div className="service-arrow">
                  ↗
                </div>
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>

                <p>
                  Explore our premium {service.title.toLowerCase()} solutions
                  engineered with precision and transparency.
                </p>

                <div className="service-link">
                  <span>EXPLORE SERVICE</span>
                  <span className="service-link-arrow">→</span>
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="service-card-line" />
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}