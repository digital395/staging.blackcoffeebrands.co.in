"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      project: formData.get("project"),
      message: formData.get("message"),
      source: "Contact Form",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setStatus(
        "Thank you. Your enquiry has been sent successfully."
      );

      form.reset();

    } catch (error) {
      console.error("FORM ERROR:", error);

      setStatus(
        "Unable to send your enquiry. Please try again."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* INTRO */}

        <motion.div
          className="contact-form-intro"

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          viewport={{
            once: true,
            amount: 0.25,
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span>CONTACT US</span>

          <h2>
            Start your
            <br />
            <em>project.</em>
          </h2>

          <p>
            Tell us about your project and our team
            will get back to you with the next steps.
          </p>

        </motion.div>


        {/* FORM */}

        <motion.div
          className="contact-form-card"

          initial={{
            opacity: 0,
            y: 70,
            rotateX: 8,
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
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="contact-form-card-top">

            <span>01</span>

            <strong>
              INTERACTIVE CONSULTATION FORM
            </strong>

            <i>↗</i>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="contact-form-grid">

              {/* NAME */}

              <div className="contact-field">

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  autoComplete="name"
                  required
                />

                <label htmlFor="name">
                  Your Name
                </label>

              </div>


              {/* EMAIL */}

              <div className="contact-field">

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  autoComplete="email"
                  required
                />

                <label htmlFor="email">
                  Email Address
                </label>

              </div>


              {/* PHONE */}

              <div className="contact-field">

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  autoComplete="tel"
                  required
                />

                <label htmlFor="phone">
                  Phone Number
                </label>

              </div>


              {/* LOCATION */}

              <div className="contact-field">

                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder=" "
                />

                <label htmlFor="location">
                  Project Location
                </label>

              </div>


              {/* PROJECT */}

              <div className="contact-field contact-field-full">

                <select
                  id="project"
                  name="project"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select Project Type
                  </option>

                  <option value="Residential Construction">
                    Residential Construction
                  </option>

                  <option value="Commercial Construction">
                    Commercial Construction
                  </option>

                  <option value="Interior Design">
                    Interior Design
                  </option>

                  <option value="Renovation">
                    Renovation
                  </option>

                  <option value="Project Management">
                    Project Management
                  </option>

                  <option value="Construction Consultancy">
                    Construction Consultancy
                  </option>

                </select>

                <label className="select-label">
                  Project Type
                </label>

              </div>


              {/* MESSAGE */}

              <div className="contact-field contact-field-full">

                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  rows={5}
                />

                <label htmlFor="message">
                  Tell us about your project
                </label>

              </div>

            </div>


            {/* STATUS */}

            {status && (
              <motion.div
                className={`contact-form-status ${
                  status.includes("successfully")
                    ? "success"
                    : "error"
                }`}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                {status}
              </motion.div>
            )}


            {/* BUTTON */}

            <motion.button
              type="submit"
              className="contact-submit"
              disabled={loading}

              whileHover={
                !loading
                  ? {
                      y: -4,
                      scale: 1.02,
                    }
                  : {}
              }

              whileTap={
                !loading
                  ? {
                      scale: 0.97,
                    }
                  : {}
              }
            >

              <span>
                {loading
                  ? "SENDING..."
                  : "SEND ENQUIRY"}
              </span>

              <i>
                {loading ? "..." : "↗"}
              </i>

            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}