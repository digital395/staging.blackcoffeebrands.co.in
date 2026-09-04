"use client";

import { motion } from "framer-motion";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="contact-hero-bg"
        aria-hidden="true"
      />

      {/* Cinematic ambient effects 

      <div
        className="contact-hero-light"
        aria-hidden="true"
      />*/}

      <div
        className="contact-hero-beam"
        aria-hidden="true"
      />

      <div
        className="contact-hero-grain"
        aria-hidden="true"
      />


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="contact-hero-container">

        <motion.div
          className="contact-hero-content"

          initial={{
            opacity: 0,
            y: 70,
            rotateX: 12,
            scale: 0.96,
          }}

          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
          }}

          transition={{
            duration: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* =================================================
              EYEBROW
          ================================================== */}

          <motion.span
            className="contact-hero-eyebrow"

            initial={{
              opacity: 0,
              x: -30,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              delay: 0.15,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            LUXE CONSTRUCTION &amp; CONSULTANCY
          </motion.span>


          {/* =================================================
              TITLE
          ================================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 55,
              rotateX: 16,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
            }}

            transition={{
              delay: 0.25,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            CONTACT
            <span> US</span>
          </motion.h1>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.52,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Let&apos;s discuss your next project.
            <br />
            Our team is ready to bring your vision to life.
          </motion.p>


          {/* =================================================
              GOLD LINE
          ================================================== */}

          <motion.div
            className="contact-hero-line"

            initial={{
              scaleX: 0,
              opacity: 0,
            }}

            animate={{
              scaleX: 1,
              opacity: 1,
            }}

            transition={{
              delay: 0.8,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

        </motion.div>


        {/* ===================================================
            SCROLL
        ==================================================== */}

        <motion.div
          className="contact-hero-scroll"

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          transition={{
            delay: 1.15,
            duration: 0.8,
          }}
        >
          <span>SCROLL</span>

          <motion.i
            animate={{
              y: [0, 6, 0],
            }}

            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.i>
        </motion.div>

      </div>


      {/* =====================================================
          DECORATIVE CORNERS
      ====================================================== */}

      <div
        className="contact-hero-corner contact-hero-corner-left"
        aria-hidden="true"
      />

      <div
        className="contact-hero-corner contact-hero-corner-right"
        aria-hidden="true"
      />

    </section>
  );
}