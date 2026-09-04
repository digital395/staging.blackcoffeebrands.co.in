"use client";

import { motion } from "framer-motion";
import "./ProjectCard.css";

export interface Project {
  number: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  scope: string;
  highlight: string;
  feedback: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      className="project-card"
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 1.1,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* NUMBER */}
      <div className="project-card-number">
        {project.number}
      </div>

      {/* IMAGE */}
      <motion.div
        className="project-card-image-wrap"
        initial={{
          clipPath: "inset(12% 8% 12% 8%)",
        }}
        whileInView={{
          clipPath: "inset(0% 0% 0% 0%)",
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: index * 0.1 + 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />

        <div className="project-card-image-overlay" />

        <motion.div
          className="project-card-arrow"
          whileHover={{
            scale: 1.1,
            rotate: 45,
          }}
        >
          ↗
        </motion.div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="project-card-content"
        initial={{
          opacity: 0,
          x: 70,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          delay: index * 0.12 + 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* CATEGORY */}
        <span className="project-card-category">
          {project.category}
        </span>

        {/* TITLE */}
        <h3>{project.title}</h3>

        {/* LOCATION */}
        <span className="project-card-location">
          {project.location}
        </span>

        {/* DESCRIPTION */}
        <p className="project-card-description">
          {project.description}
        </p>

        {/* DETAILS */}
        <div className="project-card-details">

          {/* SCOPE */}
          <div className="project-detail">
            <span className="project-detail-label">
              SCOPE
            </span>

            <p>
              {project.scope}
            </p>
          </div>

          {/* KEY HIGHLIGHT */}
          <div className="project-detail">
            <span className="project-detail-label">
              KEY HIGHLIGHT
            </span>

            <p>
              {project.highlight}
            </p>
          </div>

          {/* CLIENT FEEDBACK */}
          <div className="project-detail project-feedback">
            <span className="project-detail-label">
              CLIENT FEEDBACK
            </span>

            <p>
              "{project.feedback}"
            </p>
          </div>

        </div>
      </motion.div>
    </motion.article>
  );
}