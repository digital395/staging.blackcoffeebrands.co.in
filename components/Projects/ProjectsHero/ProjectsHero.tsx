"use client";

import { motion } from "framer-motion";
import "./ProjectsHero.css";

export default function ProjectsHero() {
  return (
    <section className="projects-hero">
      {/* BACKGROUND IMAGE */}
      <div className="projects-hero-bg" />

      {/* CONTENT */}
      <div className="projects-hero-container">
        <motion.div
          className="projects-hero-content"
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
            className="projects-hero-label"
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
            PROJECTS
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
            }}
          >
            A selection of spaces shaped through disciplined design,
            construction and technical execution.
          </motion.p>
        </motion.div>

        {/* SCROLL */}
        <motion.div
          className="projects-hero-scroll"
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