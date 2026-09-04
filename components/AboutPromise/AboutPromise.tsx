"use client";

import { motion } from "framer-motion";
import "./AboutPromise.css";

const commitments = [
  {
    number: "01",
    title: "ZERO SUBCONTRACTING POLICY",
    text: "We employ full-time, experienced architects, site engineers, and project managers to maintain end-to-end quality control.",
    image: "/images/about/our-commotments-1.jpg",
  },
  {
    number: "02",
    title: "STRUCTURAL LONGEVITY",
    text: "Every structure is built using tested 53-Grade OPC/PPC cement, premium copper wiring (Finolex/Polycab), and standardized curing protocols.",
    image: "/images/about/our-commitments-2.jpg",
  },
  {
    number: "03",
    title: "LONG-TERM PROTECTION",
    text: "We protect your asset with a 10-year water proofing warranty, a 1-year comprehensive construction warranty, and an anti-termite guarantee.",
    image: "/images/about/our-commitments-3.jpg",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 70,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
};

export default function AboutPromise() {
  return (
    <section className="about-promise">

      {/* Cinematic background elements */}
      <div className="promise-glow promise-glow-one" />
      <div className="promise-glow promise-glow-two" />
      <div className="promise-grid" />
      <div className="promise-noise" />

      <div className="about-promise-container">

        {/* HEADER */}
        <motion.div
          className="about-promise-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="promise-eyebrow">
            ABOUT US
          </span>

          <h2>
            Our Core <br />
            <em>Commitments</em>
          </h2>

          <div className="promise-heading-line" />
        </motion.div>

        {/* CARDS */}
        <div className="about-promise-grid">

          {commitments.map((item, index) => (
            <motion.article
              key={item.number}
              className="promise-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
                rotateX: 2,
                rotateY: index === 1 ? 0 : index === 0 ? 1.5 : -1.5,
              }}
            >

              {/* Card number */}
              <div className="promise-number">
                {item.number}
              </div>

              {/* Content */}
              <div className="promise-content">

                <span className="promise-title">
                  {item.title}
                </span>

                <p>
                  {item.text}
                </p>

              </div>

              {/* Image */}
              <motion.div
                className="promise-image-wrap"
                whileHover={{
                  scale: 1.025,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div className="promise-image-overlay" />

                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{
                    scale: 1.12,
                    filter: "grayscale(100%) brightness(.65)",
                  }}
                  whileInView={{
                    scale: 1,
                    filter: "grayscale(15%) brightness(.82)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 1.3,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Gold light sweep */}
                <span className="promise-image-shine" />

              </motion.div>

              {/* Bottom line */}
              <div className="promise-card-line" />

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}