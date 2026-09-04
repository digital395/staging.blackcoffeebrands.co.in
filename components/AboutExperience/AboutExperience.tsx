"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./AboutExperience.css";

const missionVision = [
  {
    id: "01",
    label: "MISSION",
    title: "Mission",
    image: "/images/about/our-mission-1.png",
    text: "To provide every client with an extraordinary, stress-free construction experience by delivering superior build quality, transparent pricing, and strict timeline adherence on every project.",
  },
  {
    id: "02",
    label: "VISION",
    title: "Vision",
    image: "/images/about/our-mission-2.png",
    text: "To remain Chennai's most trusted 'customer-first' construction partner, pioneering transparent execution standards and sustainable engineering practices.",
  },
];

function MissionCard({
  item,
  index,
}: {
  item: (typeof missionVision)[number];
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
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
    <motion.article
      className="mission-card"
      initial={{
        opacity: 0,
        y: 80,
        rotateX: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1.1,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      {/* 3D Image Area */}
      <div className="mission-visual">

        <motion.div
          className="mission-image-wrap"
          style={{
            x: imageX,
            y: imageY,
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="mission-image"
          />
        </motion.div>

        {/* Gold glow */}
        <div className="mission-glow" />

        {/* Cinematic light */}
        <div className="mission-light" />

        {/* 3D ring */}
        <div className="mission-ring mission-ring-one" />
        <div className="mission-ring mission-ring-two" />

        {/* Number */}
        <span className="mission-number">
          {item.id}
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="mission-content"
        initial={{
          opacity: 0,
          y: 25,
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
          delay: 0.35 + index * 0.18,
        }}
      >
        <span className="mission-label">
          {item.label}
        </span>

        <h3>{item.title}</h3>

        <p>{item.text}</p>
      </motion.div>
    </motion.article>
  );
}

export default function AboutExperience() {
  return (
    <section className="about-experience">

      {/* Background cinematic elements */}
      <div className="experience-grid" />
      <div className="experience-glow experience-glow-left" />
      <div className="experience-glow experience-glow-right" />
      <div className="experience-noise" />

      <div className="about-experience-container">

        {/* Section Heading */}
        <motion.div
          className="about-experience-heading"
          initial={{
            opacity: 0,
            y: 50,
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
          <span>ABOUT US</span>

          <h2>
            Our Mission
            <br />
            <em>&amp; Vision</em>
          </h2>
        </motion.div>

        {/* Mission / Vision */}
        <div className="mission-vision-grid">

          {missionVision.map((item, index) => (
            <MissionCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}