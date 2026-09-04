"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BookingModal from "../Contact/BookingModal";

import "./Navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "How It Works", href: "/how-it-works" },
  //{ label: "Why Us", href: "/why-us" },
 // { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  function openBooking() {
    setMenuOpen(false);
    setBookingOpen(true);
  }

  function closeBooking() {
    setBookingOpen(false);
  }

  return (
    <>
      <motion.header
        className="navbar"
        initial={{
          opacity: 0,
          y: -25,
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

        <div className="navbar-inner">

          {/* LOGO */}

          <a
            href="/"
            className="navbar-logo"
          >
            <img
              src="/images/luxe-logo.png"
              alt="Luxe Construction Consultancy"
            />
          </a>


          {/* DESKTOP NAV */}

          <nav className="desktop-nav">

            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="nav-link"

                initial={{
                  opacity: 0,
                  y: -10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: 0.15 + index * 0.06,
                  duration: 0.5,
                }}

                whileHover={{
                  y: -2,
                }}
              >
                <span>
                  {item.label}
                </span>

                <span className="nav-line" />
              </motion.a>
            ))}


            {/* DESKTOP BOOK NOW */}

          <motion.button
  type="button"
  className="nav-book"
  onClick={() => {
    window.dispatchEvent(
      new Event("open-booking-popup")
    );
  }}
  whileHover={{
    scale: 1.04,
  }}
  whileTap={{
    scale: 0.96,
  }}
>
  Book Now
</motion.button>

          </nav>


          {/* MOBILE MENU BUTTON */}

          <button
            className={`menu-button ${
              menuOpen ? "active" : ""
            }`}

            onClick={() =>
              setMenuOpen(!menuOpen)
            }

            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

        </div>

      </motion.header>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (
          <motion.div
            className="mobile-menu"

            initial={{
              opacity: 0,
              clipPath:
                "inset(0 0 100% 0)",
            }}

            animate={{
              opacity: 1,
              clipPath:
                "inset(0 0 0% 0)",
            }}

            exit={{
              opacity: 0,
              clipPath:
                "inset(0 0 100% 0)",
            }}

            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {navItems.map(
              (item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}

                  onClick={() =>
                    setMenuOpen(false)
                  }

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    delay:
                      0.15 + index * 0.07,
                  }}
                >
                  <span className="mobile-number">
                    0{index + 1}
                  </span>

                  {item.label}
                </motion.a>
              )
            )}


            {/* MOBILE BOOK NOW */}

            <button
              type="button"
              className="mobile-book"
              onClick={openBooking}
            >
              Book Now
            </button>

          </motion.div>
        )}

      </AnimatePresence>


      {/* COMMON BOOKING FORM */}

      <BookingModal
        isOpen={bookingOpen}
        onClose={closeBooking}
      />
    </>
  );
}