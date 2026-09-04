"use client";

import { useState } from "react";
import "./CTA.css";
import { motion } from "framer-motion";

import BookingModal from "../Contact/BookingModal";

export default function CTA() {
  const [bookingOpen, setBookingOpen] =
    useState(false);
const openBooking = () => {
  window.dispatchEvent(
    new Event("open-booking-popup")
  );
};
  return (
    <>
      <section className="cta-section">

        {/* BACKGROUND */}

        <div className="cta-bg" />

        <div className="cta-overlay" />

        <div className="cta-vignette" />

        <div className="cta-noise" />

        <div className="cta-light" />


        {/* CONTENT */}

        <div className="cta-container">

          <motion.div
            className="cta-content"

            initial={{
              opacity: 0,
              y: 80,
              rotateX: 8,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* HEADING */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ready to turn your blueprint into
              <br />
              <span>reality?</span>
            </motion.h2>


            {/* DESCRIPTION */}

            <motion.p
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
              }}

              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
            >
              Speak directly with our lead architects
              and project engineers today.
            </motion.p>


            {/* COMMON BOOKING BUTTON */}

            <motion.div
              className="cta-form"

              initial={{
                opacity: 0,
                y: 35,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.45,
                duration: 0.9,
              }}
            >

             <motion.button
  type="button"
  className="cta-button"
  onClick={openBooking}
  whileHover={{
    scale: 1.05,
    y: -4,
    rotateX: -5,
  }}
  whileTap={{
    scale: 0.96,
  }}
>
  <span>Book Now</span>
  <span className="cta-arrow">↗</span>
</motion.button>

            </motion.div>

          </motion.div>

        </div>


        {/* DECORATIVE CORNERS */}

        <div
          className="cta-corner cta-corner-left"
        />

        <div
          className="cta-corner cta-corner-right"
        />


        {/* BOTTOM LINE */}

        <div className="cta-bottom-line" />

      </section>


      {/* SAME COMMON FORM */}

      <BookingModal
        isOpen={bookingOpen}
        onClose={() =>
          setBookingOpen(false)
        }
      />
    </>
  );
}