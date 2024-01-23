import "../index.css";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, showButton } = props;

  const handleSectionChange = (sectionId) => {
    // Close the menu
    setMenuOpened(false);

    // Scroll to the corresponding section
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    const isSectionHidden = (sectionId) => {
      // Add your logic to check if the section should be hidden
      return sectionId === "section-1";
    };
  };

  return (
    <>
      {showButton && (
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-black w-11 h-11 rounded-md"
        >
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full my-1 ${
              menuOpened ? "hidden" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 rounded-md w-full transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
      )}
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
        style={{ backgroundColor: "#d8d8d8" }}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton
            label="About"
            onClick={() => handleSectionChange("section-2")}
          />
          <MenuButton
            label="Education"
            onClick={() => handleSectionChange("section-4")}
          />
          <MenuButton
            label="Work Experience"
            onClick={() => handleSectionChange("section-5")}
          />
          <MenuButton
            label="Projects"
            onClick={() => handleSectionChange("section-6")}
          />
          <MenuButton
            label="Contact"
            onClick={() => handleSectionChange("section-7")}
          />
        </div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer transition-colors text"
      hidden={false}
    >
      {label}
    </button>
  );
};
