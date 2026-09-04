"use client";

import "./Metrics.css";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 25,
    suffix: "+",
    title: "Years of Construction Excellence",
  },
  {
    value: 100,
    suffix: "+",
    title: "Completed Projects",
    subtitle: "in Chennai",
  },
  {
    value: 43,
    suffix: "+",
    title: "Corporate & Residential",
    subtitle: "Clients",
  },
  {
    value: 100,
    suffix: "%",
    title: "Permanent In-House",
    subtitle: "Team",
  },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cinematic easing
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref} className="metric-number">
      {count}
      {suffix}
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="metrics-section">

      {/* Cinematic background glow */}
      <div className="metrics-glow metrics-glow-one" />
      <div className="metrics-glow metrics-glow-two" />

      <div className="metrics-container">

        {/* Heading */}
        <motion.div
          className="metrics-heading"
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
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="metrics-eyebrow">
            LUXE CONSTRUCTION & CONSULTANCY
          </span>

          <h2>
            Trust & Performance
            <br />
            <span>Metrics</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="metrics-grid">

          {metrics.map((metric, index) => (
            <motion.div
              className="metric-item"
              key={metric.title}
              initial={{
                opacity: 0,
                y: 70,
                rotateX: 12,
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
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
            >

              {/* Animated Counter */}
              <Counter
                value={metric.value}
                suffix={metric.suffix}
              />

              {/* Description */}
              <div className="metric-description">
                <span>{metric.title}</span>

                {metric.subtitle && (
                  <span>{metric.subtitle}</span>
                )}
              </div>

              {/* Cinematic shine */}
              <div className="metric-shine" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}