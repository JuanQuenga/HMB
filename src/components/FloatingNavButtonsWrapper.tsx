"use client";
import { useState } from "react";
import FloatingNavButtons from "./FloatingNavButtons";
import SpecialsPopup from "./SpecialsPopup";
import MenuPopup from "./MenuPopup";

export default function FloatingNavButtonsWrapper() {
  const [showSpecials, setShowSpecials] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSpecialsClick = () => {
    setShowSpecials(true);
  };

  const handleMenuClick = () => {
    setShowMenu(true);
  };

  return (
    <>
      <FloatingNavButtons
        onSpecialsClick={handleSpecialsClick}
        onMenuClick={handleMenuClick}
      />
      <SpecialsPopup
        isOpen={showSpecials}
        onClose={() => setShowSpecials(false)}
      />
      <MenuPopup isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
}
