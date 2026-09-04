"use client";

import { motion } from "framer-motion";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <div className="about-hero-bg" />

      {/* =========================================
          DARK OVERLAY
      =========================================
      <div className="about-hero-overlay" />
 */}
      {/* =========================================
          CINEMATIC GRAIN
      ========================================= 
      <div className="about-hero-grain" />*/}

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="about-hero-container">

        <motion.div
          className="about-hero-content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* LABEL */}
          <motion.span
            className="about-hero-label"
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            LUXE CONSTRUCTION & CONSULTANCY
          </motion.span>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            ABOUT US
          </motion.h1>

          {/* DESCRIPTION */}
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
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            A construction and consultancy practice built around
            thoughtful design, disciplined execution and lasting quality.
          </motion.p>

        </motion.div>

        {/* =========================================
            SCROLL INDICATOR
        ========================================= */}
        <motion.div
          className="about-hero-scroll"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.8,
          }}
        >

          <span>SCROLL</span>

          <motion.i
            animate={{
              y: [0, 7, 0],
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
    </section>
  );
}