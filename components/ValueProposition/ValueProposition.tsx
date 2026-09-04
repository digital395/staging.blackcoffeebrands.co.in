"use client";

import "./ValueProposition.css";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const valuePoints = [
  {
    number: "01",
    title: "100% Permanent In-House Execution:",
    text: "100% Permanent In-House Execution: Your building is handled strictly by our permanent architects and civil engineers—never passed off to third-party subcontractors.",
  },
  {
    number: "02",
    title: "Upfront Transparent Pricing:",
    text: "Base construction packages start at ₹1,470/sq. ft., including design, execution, finishing items, and statutory GST.",
  },
  {
    number: "03",
    title: "Stage-Wise Milestone Payments:",
    text: "Clear, predefined payment schedules tied strictly to completed construction stages so you stay in total control.",
  },
  {
    number: "04",
    title: "Daily Real-Time Progress Logs:",
    text: "Receive daily photo and video updates via a dedicated WhatsApp group and official email summaries.",
  },
];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ==========================================
     3D MOUSE MOVEMENT
  ========================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (window.innerWidth < 900) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="value-section"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* ==========================================
          CINEMATIC BACKGROUND
      ========================================== */}

      <div className="value-grid" />

      <div className="value-noise" />

      <div className="value-glow value-glow-one" />
      <div className="value-glow value-glow-two" />

      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="value-container">

        {/* ========================================
            HEADING
        ======================================== */}

        <motion.div
          className="value-header"
          initial={{
            opacity: 0,
            y: 70,
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
          <span className="value-eyebrow">
            WHY LUXE
          </span>

          <h2>
            Value Proposition:
            
            <span>The Luxe Difference</span>
          </h2>

          <div className="value-title-line" />
        </motion.div>


        {/* ========================================
            CONTENT GRID
        ======================================== */}

        <div className="value-content">

          {/* ======================================
              LEFT IMAGE
          ====================================== */}

          <motion.div
            className="value-visual"
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
              amount: 0.2,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="value-orbit orbit-one" />
            <div className="value-orbit orbit-two" />

            <motion.div
              className="value-image-card"
              style={{
                rotateX,
                rotateY,
              }}
            >

              <div className="value-image-glow" />

              <img
                src="/images/Illustration.png"
                alt="Luxe construction value proposition"
              />

              <div className="value-image-reflection" />

            </motion.div>

            {/* Floating label */}

            <motion.div
              className="value-floating-label"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>01</span>
              <strong>LUXE STANDARD</strong>
            </motion.div>

          </motion.div>


          {/* ======================================
              RIGHT CONTENT
          ====================================== */}

          <div className="value-details">

            {/* Intro */}

            <motion.p
              className="value-intro"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              Building a home or commercial facility shouldn't mean
              chasing contractors, managing unpredictable budgets, or
              compromising on material standards. At Luxe Construction,
              we manage your entire project under one roof with absolute
              accountability.
            </motion.p>


            {/* Value Points */}

            <div className="value-points">

              {valuePoints.map((point, index) => (
                <motion.article
                  className="value-point"
                  key={point.number}
                  initial={{
                    opacity: 0,
                    x: 50,
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
                    duration: 0.8,
                    delay: 0.2 + index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    x: 8,
                  }}
                >

                  <div className="value-point-number">
                    {point.number}
                  </div>

                  <div className="value-point-content">

                    <h3>
                      {point.title}
                    </h3>

                    <p>
                      {point.text}
                    </p>

                  </div>

                  <div className="value-point-line" />

                </motion.article>
              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ==========================================
          SIDE INDEX
      ========================================== */}

      <div className="value-side-index">
        <span>VALUE</span>
        <div />
        <span>01 — 04</span>
      </div>

    </section>
  );
}