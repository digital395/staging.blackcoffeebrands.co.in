"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Hero.css";

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    number: "01",
    label: "INTERIORS",
    title: "INTERIOR DESIGN",
    image: "/images/hero/1.jpg",
    description:
      "From architectural concept to key handover, we create premium residential interiors and commercial spaces across Chennai with transparent pricing and disciplined execution.",
  },
  {
    number: "02",
    label: "CONTRACTING",
    title: "CONTRACTING",
    image: "/images/hero/2.webp",
    description:
      "Precision-led construction delivered with complete transparency, quality craftsmanship and disciplined project execution.",
  },
  {
    number: "03",
    label: "CONSULTING",
    title: "BUILDING CONSULTING",
    image: "/images/hero/3.webp",
    description:
      "Strategic construction consulting that transforms ambitious ideas into exceptional spaces through planning, coordination and expert project guidance.",
  },
];

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const slide = slides[active];

  /* =======================================================
     AUTO SLIDE
  ======================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDirection(1);

      setActive((current) => {
        return (current + 1) % slides.length;
      });
    }, 8000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active]);

  /* =======================================================
     CHANGE SLIDE
  ======================================================= */

  const changeSlide = (index: number) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  /* =======================================================
     BOOKING
  ======================================================= */

  const openBooking = () => {
    window.dispatchEvent(
      new Event("open-booking-popup")
    );
  };

  return (
    <section
      className="hero"
      aria-label="Luxe Construction & Consultancy"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero-background">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="sync"
        >
          <motion.div
            key={slide.image}
            className="hero-image"
            custom={direction}
            initial={{
              opacity: 0,
              scale: 1.12,
              x: direction * 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              scale: 1.04,
              x: direction * -30,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* Dark cinematic overlay */}
        <div
          className="hero-overlay"
          aria-hidden="true"
        />

        {/* Edge vignette */}
        <div
          className="hero-vignette"
          aria-hidden="true"
        />

        {/* Film grain */}
        <div
          className="hero-grain"
          aria-hidden="true"
        />

        {/* Cinematic moving light */}
        <motion.div
          className="hero-light"
          animate={{
            x: ["-20%", "20%", "-20%"],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="hero-inner">
        <div className="hero-content">

          {/* Eyebrow */}
          <motion.div
            key={`eyebrow-${active}`}
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            LUXE CONSTRUCTION &amp; CONSULTANCY
          </motion.div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <div className="hero-title-wrap">
            <AnimatePresence mode="wait">
              <motion.h1
                key={slide.title}
                className="hero-title"
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateX: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -70,
                  rotateX: 12,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {slide.title}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* =================================================
              HERO COPY
          ================================================= */}

          <motion.div
            key={`copy-${active}`}
            className="hero-copy"
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h2>
              Turnkey Construction Engineered
              With Total Transparency.
            </h2>

            <p aria-live="polite">
              {slide.description}
            </p>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="hero-actions">

              {/* BOOK NOW */}
              <motion.button
                type="button"
                onClick={openBooking}
                className="hero-button"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Book Now</span>
                <i aria-hidden="true">↗</i>
              </motion.button>

              {/* DOWNLOAD BROCHURE */}
              <motion.a
                href="/LUXE-Brochure-Final_compressed.pdf"
                download="LUXE-Brochure.pdf"
                className="hero-button hero-button-outline"
                aria-label="Download Luxe Construction brochure"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>Download Brochure</span>
                <i aria-hidden="true">↗</i>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CAROUSEL
        ===================================================== */}

        <div
          className="hero-carousel"
          role="tablist"
          aria-label="Hero services"
        >
          {slides.map((item, index) => {
            const isActive = index === active;

            return (
              <motion.button
                key={item.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={
                  isActive ? "true" : undefined
                }
                aria-label={`View ${item.title}`}
                className={`carousel-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => changeSlide(index)}
                whileHover={{
                  y: -8,
                  rotateX: 4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <span className="carousel-number">
                  {item.number}
                </span>

                <span className="carousel-label">
                  {item.label}
                </span>

                <span
                  className="carousel-progress"
                  aria-hidden="true"
                >
                  {isActive && (
                    <motion.span
                      key={`progress-${active}`}
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 8,
                        ease: "linear",
                      }}
                    />
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          SLIDE COUNTER
      ===================================================== */}

      <div
        className="hero-counter"
        aria-label={`Slide ${slide.number} of ${slides.length}`}
      >
        <span>{slide.number}</span>

        <span>
          / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        className="hero-scroll"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
      >
        <span>SCROLL</span>

        <motion.div
          className="scroll-arrow"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          ↓
        </motion.div>
      </motion.div>

      {/* =====================================================
          DECORATIVE GRID
      ===================================================== */}

      <div
        className="hero-grid"
        aria-hidden="true"
      />
    </section>
  );
}