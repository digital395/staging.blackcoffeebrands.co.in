"use client";

import { motion } from "framer-motion";
import "./ContactDetails.css";

const details = [
  {
    id: "01",
    label: "NUMBER",
    content: (
      <a href="tel:+91988986440">
        +91 98898 86440
      </a>
    ),
  },
  {
    id: "02",
    label: "ASSISTANCE HOURS",
    content: (
      <p>
        Monday to Saturday
        <br />
        9:00 AM - 6:00 PM
      </p>
    ),
  },
];

export default function ContactDetails() {
  return (
    <section className="contact-details">

      {/* Cinematic background elements */}
      <div className="contact-details-glow" />
      <div className="contact-details-grid-bg" />
      <div className="contact-details-vignette" />

      <div className="contact-details-container">

        {/* =========================
            LEFT HEADING
        ========================== */}
        <motion.div
          className="contact-details-heading"
          initial={{
            opacity: 0,
            x: -80,
            rotateY: 8,
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
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="contact-heading-label">
            ABOUT US
          </span>

          <h2>
            Office Location
            <br />
            <em>&amp; Contact Details</em>
          </h2>

          <div className="contact-heading-line" />
        </motion.div>


        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <div className="contact-details-content">

          <div className="contact-details-top">

            {details.map((item, index) => (
              <motion.div
                className="contact-detail"
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  rotateX: -2,
                  rotateY: 1,
                }}
              >

                <span className="contact-detail-number">
                  {item.id}
                </span>

                <span className="contact-detail-label">
                  {item.label}
                </span>

                <div className="contact-detail-line" />

                <div className="contact-detail-value">
                  {item.content}
                </div>

              </motion.div>
            ))}

          </div>


          {/* =========================
              CONSULTATION
          ========================== */}
          <motion.div
            className="contact-consultation"
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span className="contact-detail-label">
              DAILY CONSULTATION SLOTS
            </span>

            <div className="contact-small-line" />

            <p>
              Available via in-person office visits or online
              video conference (for NRI/outstation clients).
            </p>

          </motion.div>

        </div>

      </div>

      {/* Decorative corner */}
      <div className="contact-detail-corner contact-detail-corner-left" />
      <div className="contact-detail-corner contact-detail-corner-right" />

    </section>
  );
}