"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import "./Footer.css";

/* =========================================================
   SOCIAL ICONS
========================================================= */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7c1.8 1 3.5 1.4 5.4 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.5-8.4ZM12.1 21.7c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.3a9.8 9.8 0 1 1 8.2 4.6Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.5 1.9.8 2.7.9 3.7.8.6-.1 1.8-.7 2.1-1.3.3-.6.3-1.2.2-1.3 0-.2-.2-.3-.5-.4Z"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1.2"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L3 2h6.2l4.3 5.7L18.9 2Zm-1.1 17.8h1.7L8.3 4.1H6.5l11.3 15.7Z"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 10h4v11H3V10Zm7 0h3.8v1.5h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.7 2.6 4.7 6v5.4h-4v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.9h-4V10Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 2.5 9.1 2c.7-.1 1.3.3 1.5 1l1.1 3.4c.2.6 0 1.2-.5 1.6L9.6 9.2c1.2 2.5 2.7 4.1 5.2 5.2l1.2-1.6c.4-.5 1-.7 1.6-.5l3.4 1.1c.7.2 1.1.8 1 1.5l-.5 2.5c-.1.7-.7 1.1-1.4 1.1C11.8 18.5 5.5 12.2 5.5 4.1c0-.7.4-1.4 1.1-1.6Z"
      />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const footerLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "How It Works",
    href: "/how-it-works",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=919889886440&text=Hi!%20Luxe%20Team,%20I'm%20interested%20in%20your%20projects",
    icon: WhatsAppIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/luxe-construction-consulting/",
    icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/luxe_construction_company/",
    icon: InstagramIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/consulting_luxe",
    icon: TwitterIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Luxe-Construction-Consulting-100367949229841/",
    icon: FacebookIcon,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  return (
    <footer className="lux-footer">
      {/* Cinematic background layers */}
      <div className="lux-footer-noise" aria-hidden="true" />

      <div
        className="lux-footer-glow lux-footer-glow-one"
        aria-hidden="true"
      />

      <div
        className="lux-footer-glow lux-footer-glow-two"
        aria-hidden="true"
      />

      {/* Decorative 3D lines */}
      <div
        className="lux-footer-line lux-footer-line-one"
        aria-hidden="true"
      />

      <div
        className="lux-footer-line lux-footer-line-two"
        aria-hidden="true"
      />

      <motion.div
        className="lux-footer-inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
      >
        {/* =================================================
            LEFT NAVIGATION
        ================================================= */}

        <motion.div
          className="lux-footer-navigation"
          variants={itemVariants}
        >
          <div className="lux-footer-nav-label">
            Navigation
          </div>

          <nav aria-label="Footer navigation">
            {footerLinks.map((link, index) => (
              <Link
                href={link.href}
                key={link.name}
                className="lux-footer-nav-link"
              >
                <span className="lux-footer-nav-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="lux-footer-nav-text">
                  {link.name}
                </span>

                <span
                  className="lux-footer-nav-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* =================================================
            CENTER
        ================================================= */}

        <motion.div
          className="lux-footer-center"
          variants={itemVariants}
        >
          <motion.div
            className="lux-footer-logo-box"
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.03,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Image
              src="/images/luxe-logo.png"
              alt="Luxe Construction & Consultancy"
              width={330}
              height={120}
              className="lux-footer-logo"
            />
          </motion.div>

          <address className="lux-footer-address">
            <p>Luxe Construction Consulting,</p>

            <p>
              12/20, 17th E St, Kamaraj Nagar,
              Thiruvanmiyur, Chennai,
              Tamil Nadu 600041
            </p>
          </address>

          <a
            href="tel:+919889886440"
            className="lux-footer-phone"
            aria-label="Call Luxe Construction Consulting"
          >
            <span
              className="lux-footer-phone-icon"
              aria-hidden="true"
            >
              <PhoneIcon />
            </span>

            <span>+91 98898 86440</span>
          </a>
        </motion.div>

        {/* =================================================
            RIGHT SOCIAL
        ================================================= */}

        <motion.div
          className="lux-footer-social"
          variants={itemVariants}
        >
          <div className="lux-footer-social-title">
            Follow us
          </div>

          <div className="lux-social-icons">
            {socialLinks.map(
              ({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="lux-social-icon"
                  whileHover={{
                    y: -7,
                    rotateY: 18,
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom luxury line */}
      <div
        className="lux-footer-bottom-line"
        aria-hidden="true"
      />
    </footer>
  );
}