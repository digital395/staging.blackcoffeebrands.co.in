"use client";

import { motion } from "framer-motion";
import ProjectCard, {
  Project,
} from "../ProjectCard/ProjectCard";

import "./ProjectsList.css";

const projects: Project[] = [
  {
    number: "01",
    title: "Kauvery Hospitals",
    category: "Healthcare Commercial Development",
    location: "Chennai",
    description:
      "A premium healthcare development delivered with disciplined execution, technical precision and coordinated project management.",
    image: "/images/projects/1.jpg",
    scope:
      "Specialized commercial construction, safety compliance, and intricate finishing requirements.",
    highlight:
      "Executed with technical, safety, and environmental compliance, delivering a state-of-the-art healthcare environment.",
    feedback:
      "LUXE is an outstanding company who executes the finest construction projects with best practice compliance at the forefront.",
  },

  {
    number: "02",
    title: "DRA Homes",
    category: "Multi-Unit Residential Execution",
    location: "Chennai",
    description:
      "A refined residential development combining efficient planning, premium finishes and reliable construction execution.",
    image: "/images/projects/2.jpg",
    scope:
      "Turnkey residential contracting and high-precision site management.",
    highlight:
      "Strict site management and attention to finishing details delivered high-quality, reliable outcomes.",
    feedback:
      "The team demonstrated impressive execution and strong attention to detail throughout the project.",
  },

  {
    number: "03",
    title: "Bespoke Luxury Villa & Turnkey Residences",
    category: "Luxury Residential",
    location: "Chennai",
    description:
      "A contemporary residential space shaped around clean architectural language, material quality and long-term performance.",
    image: "/images/projects/3.jpg",
    scope:
      "Custom architectural layout, 3D elevation design, civil work, and luxury interior fit-out.",
    highlight:
      "Delivered with attention to material quality, architectural detailing and long-term performance.",
    feedback:
      "A highly refined execution combining architectural intent with premium construction quality.",
  },
];

export default function ProjectsList() {
  return (
    <section className="projects-list">
      {/* BACKGROUND GRID */}
      <div className="projects-list-grid" />

      {/* TOP GLOW */}
      <div className="projects-list-glow" />

      <div className="projects-list-container">

        {/* INTRO */}
        <motion.div
          className="projects-list-intro"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>SELECTED WORK</span>

          <h2>
            Projects that
            <br />
            <em>define us.</em>
          </h2>

          <p>
            A considered selection of spaces shaped through
            architecture, construction and technical execution.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="projects-list-items">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}