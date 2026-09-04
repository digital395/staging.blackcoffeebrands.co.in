"use client";

import { useEffect, useState } from "react";
import BookingModal from "./Contact/BookingModal";

export default function BookingProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => {
      setIsOpen(true);
    };

    window.addEventListener(
      "open-booking-popup",
      handleOpenBooking
    );

    return () => {
      window.removeEventListener(
        "open-booking-popup",
        handleOpenBooking
      );
    };
  }, []);

  return (
    <BookingModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
}