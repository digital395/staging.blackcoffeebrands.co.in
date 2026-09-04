 "use client";

import { motion } from "framer-motion";
import "./CommunicationSection.css";

const communicationItems = [
  {
    title: "Daily WhatsApp Update",
    description:
      "Every project gets a dedicated communication group including the Client, assigned Site Engineer, and Lead Architect.",
  },
  {
    title: "Daily Email Logs",
    description:
      "Receive structured reports detailing daily progress, material deliveries, and upcoming milestones-ideal for NRI clients managing construction remotely.",
  },
];

export default function CommunicationSection() {
  return (
    <section className="communication-section">
      <div className="communication-container">
        <motion.div
          className="communication-heading"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>ABOUT US</span>
          <h2>Communication &amp; Tracking</h2>
        </motion.div>

        <div className="communication-list">
          {communicationItems.map((item, index) => (
            <motion.article
              className="communication-item"
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
