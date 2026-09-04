"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./BookingModal.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
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
      source: "Book Now",
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

      setTimeout(() => {
        onClose();
        setStatus("");
      }, 1800);

    } catch (error) {
      console.error("BOOKING FORM ERROR:", error);

      setStatus(
        "Unable to send your enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >

          <motion.div
            className="booking-modal"
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* HEADER */}

            <div className="booking-modal-header">

              <div>
                <span className="booking-modal-label">
                  LUXE CONSTRUCTION & CONSULTANCY
                </span>

                <h2>
                  Start your{" "}
                  <em>project.</em>
                </h2>
              </div>

              <button
                type="button"
                className="booking-close"
                onClick={onClose}
                aria-label="Close booking form"
              >
                ×
              </button>

            </div>


            {/* DESCRIPTION */}

            <p className="booking-description">
              Tell us about your project and our team
              will get back to you with the next steps.
            </p>


            {/* FORM */}

            <form
              className="booking-form"
              onSubmit={handleSubmit}
            >

              <div className="booking-grid">

                {/* NAME */}

                <div className="booking-field">

                  <input
                    type="text"
                    id="booking-name"
                    name="name"
                    placeholder=" "
                    autoComplete="name"
                    required
                  />

                  <label htmlFor="booking-name">
                    Your Name
                  </label>

                </div>


                {/* EMAIL */}

                <div className="booking-field">

                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    placeholder=" "
                    autoComplete="email"
                    required
                  />

                  <label htmlFor="booking-email">
                    Email Address
                  </label>

                </div>


                {/* PHONE */}

                <div className="booking-field">

                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    placeholder=" "
                    autoComplete="tel"
                    required
                  />

                  <label htmlFor="booking-phone">
                    Phone Number
                  </label>

                </div>


                {/* LOCATION */}

                <div className="booking-field">

                  <input
                    type="text"
                    id="booking-location"
                    name="location"
                    placeholder=" "
                  />

                  <label htmlFor="booking-location">
                    Project Location
                  </label>

                </div>


                {/* PROJECT */}

                <div className="booking-field booking-full">

                  <select
                    id="booking-project"
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

                <div className="booking-field booking-full">

                  <textarea
                    id="booking-message"
                    name="message"
                    placeholder=" "
                    rows={4}
                  />

                  <label htmlFor="booking-message">
                    Tell us about your project
                  </label>

                </div>

              </div>


              {/* STATUS */}

              {status && (
                <motion.div
                  className={`booking-status ${
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
                className="booking-submit"
                disabled={loading}
                whileHover={
                  !loading
                    ? {
                        y: -3,
                        scale: 1.01,
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

                <span>
                  {loading ? "..." : "↗"}
                </span>

              </motion.button>

            </form>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}