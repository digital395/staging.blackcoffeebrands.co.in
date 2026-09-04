"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./AboutStory.css";

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const rightY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="about-story">
      {/* Cinematic light */}
      <motion.div
        className="about-story-light"
        style={{ x: glowX }}
      />

      {/* Subtle grain */}
      <div className="about-story-grain" />

      {/* Background grid */}
      <div className="about-story-grid" />

      <div className="about-story-container">

        {/* LEFT — TITLE */}
        <motion.div
          className="about-story-heading"
          style={{ y: leftY }}
          initial={{
            opacity: 0,
            x: -80,
            rotateY: 12,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about-story-label">
            ABOUT US
          </span>

          <h2>
            Our Story
            <span>&amp;</span>
            <br />
            Legacy
          </h2>

          <div className="about-story-line">
            <span />
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          className="about-story-content"
          style={{ y: rightY }}
          initial={{
            opacity: 0,
            x: 80,
            rotateY: -8,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotateY: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.15,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Headquartered in Besant Nagar, Chennai, Luxe Construction
            Consulting was established with a singular mission: to
            eliminate the friction, delays, and budget overruns
            traditionally associated with the construction industry.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Over the past two decades, we have evolved into a full-service
            construction consulting and turnkey execution firm. From luxury
            private residences and multi-storey apartments to specialized
            healthcare hubs like Kauvery Hospitals and commercial
            developments for DRA Homes, our team handles every stage with
            unyielding technical precision.
          </motion.p>

          {/* Bottom metadata */}
          <motion.div
            className="about-story-meta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <div className="about-story-meta-item">
              <span className="meta-number">01</span>
              <span className="meta-text">
                BUILT ON TRUST
              </span>
            </div>

            <div className="about-story-meta-item">
              <span className="meta-number">02</span>
              <span className="meta-text">
                BUILT TO LAST
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="about-story-side-line" />
    </section>
  );
}