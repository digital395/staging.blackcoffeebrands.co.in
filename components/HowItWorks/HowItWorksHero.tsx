"use client";

import { motion } from "framer-motion";
import "./HowItWorksHero.css";

export default function HowItWorksHero() {
  return (
    <section className="how-hero">
      <div className="how-hero-bg" />



      <div className="how-hero-content">
        <motion.span
          className="how-hero-eyebrow"
          initial={{
            opacity: 0,
            x: -30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          LUXE CONSTRUCTION & CONSULTANCY
        </motion.span>

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
            rotateX: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          HOW IT
          <br />
          <span>WORKS</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.8,
          }}
        >
          A transparent, structured process designed to turn
          your vision into a finished space with clarity at
          every stage.
        </motion.p>
      </div>

      <motion.div
        className="how-hero-scroll"
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
    </section>
  );
}