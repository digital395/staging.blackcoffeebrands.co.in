"use client";

import { motion, useReducedMotion } from "framer-motion";
import "./ProcessSection.css";

const steps = [
  {
    number: "01",
    title: "INITIAL CONSULTATION",
    description:
      "We begin by understanding your requirements, ambitions, budget and expectations. Every project starts with a clear understanding of your vision.",
    image: "/images/how/1.jpg",
  },
  {
    number: "02",
    title: "DESIGN & PLANNING",
    description:
      "Our team develops the design, technical strategy, specifications and execution roadmap with complete attention to detail.",
    image: "/images/how/2.jpg",
  },
  {
    number: "03",
    title: "TRANSPARENT BOOKING",
    description:
      "We establish a transparent project structure with clear communication, defined responsibilities and complete visibility from the beginning.",
    image: "/images/how/3.jpg",
  },
  {
    number: "04",
    title: "PROJECT CONSULTATION",
    description:
      "Our specialists coordinate with you and the project team to ensure every design and construction decision remains aligned with your goals.",
    image: "/images/how/4.jpg",
  },
  {
    number: "05",
    title: "TECHNICAL DEVELOPMENT",
    description:
      "Architectural, engineering and construction requirements are developed into a practical and detailed execution strategy.",
    image: "/images/how/5.jpg",
  },
  {
    number: "06",
    title: "MATERIAL & QUALITY",
    description:
      "Materials, finishes and construction details are carefully reviewed to maintain the expected level of quality throughout the project.",
    image: "/images/how/6.jpg",
  },
  {
    number: "07",
    title: "SITE EXECUTION",
    description:
      "Our team manages the construction process with disciplined site coordination, quality checks and continuous project supervision.",
    image: "/images/how/7.jpg",
  },
  {
    number: "08",
    title: "PROGRESS TRACKING",
    description:
      "Regular updates and structured communication keep you informed about project progress, milestones and important developments.",
    image: "/images/how/8.jpg",
  },
  {
    number: "09",
    title: "FINAL DELIVERY",
    description:
      "The project is completed with detailed inspections, finishing checks and a final handover focused on quality and client satisfaction.",
    image: "/images/how/9.jpg",
  },
];

export default function ProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="process-section">
      {/* Background */}
      <div className="process-grid" />

      <div className="process-container">

        {/* =====================================================
            LEFT — FULL STICKY PANEL
        ===================================================== */}

        <aside className="process-left">
          <div className="process-left-inner">

            <motion.div
              className="process-eyebrow"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ABOUT US
            </motion.div>

            <motion.h2
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 50,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Our Story
              <br />
              <span>&amp; Legacy</span>
            </motion.h2>

            <motion.div
              className="process-left-line"
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scaleX: 0,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      scaleX: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
            />

            <motion.p
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 30,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              From consultation to completion, our process is built around
              transparency, communication and disciplined execution.
            </motion.p>

            <div className="process-left-bottom">
              <span>HOW WE WORK</span>

              <strong>
                01<span>—</span>09
              </strong>
            </div>

          </div>
        </aside>


        {/* =====================================================
            RIGHT — SCROLLING CONTENT
        ===================================================== */}

        <div className="process-right">

          {steps.map((step, index) => {
            const alternate = index % 2 !== 0;

            return (
              <motion.article
                key={step.number}
                className={`process-item ${
                  alternate ? "process-item-reverse" : ""
                }`}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 110,
                        rotateX: 8,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 1,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* NUMBER */}
                <div className="process-item-number">
                  {step.number}
                </div>


                {/* MAIN ROW */}
                <div className="process-item-row">

                  {/* IMAGE */}
                  <div className="process-image-wrap">

                    <div className="process-image">

                      <img
                        src={step.image}
                        alt={step.title}
                        loading={index < 2 ? "eager" : "lazy"}
                      />

                      <div className="process-image-overlay" />

                      <div className="process-image-index">
                        {step.number}
                      </div>

                      <div className="process-image-arrow">
                        ↗
                      </div>

                    </div>

                  </div>


                  {/* CONTENT */}
                  <div className="process-item-content">

                    <span className="process-item-label">
                      {step.title}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                    <div className="process-item-meta">
                      <span>PROJECT PHASE</span>
                      <strong>{step.number} / 09</strong>
                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}