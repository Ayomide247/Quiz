import React from "react";
import iconMoonLight from "../assets/images/icon-moon-light.svg";
import iconMoonDark from "../assets/images/icon-moon-dark.svg";
import iconSunLight from "../assets/images/icon-sun-light.svg";
import iconSunDark from "../assets/images/icon-sun-dark.svg";
import images from "../utils/Images";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { useTheme } from "./ThemeMode";
import { useQuizSelection } from "./SelectedContext";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { selectedQuiz } = useQuizSelection();
  // console.log([selectedQuiz?.title?.toLowerCase() + "Img"]);

  return (
    <div
      className={`flex justify-between mx-5 md:mb-10 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
      } p-3 rounded-lg`}
    >
      <div className="flex items-center gap-3">
        {selectedQuiz && (
          <img
            src={images[selectedQuiz?.title?.toLowerCase() + "Img"]}
            alt="accessibility"
            className={`w-[33px] rounded-md ${
              isDarkMode ? "bg-gray-700" : "bg-[#ecdcf6]"
            }`}
          />
        )}
        <p className="font-semibold">{selectedQuiz?.title}</p>
      </div>

      <div className="flex items-center gap-5">
        <img
          src={isDarkMode ? iconSunLight : iconSunDark}
          alt="Sun Icon"
          className="w-5"
        />

        {isDarkMode ? (
          <MdToggleOn
            className="text-[35px] text-[#A729F5] cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <MdToggleOff
            className="text-[35px] text-[#A729F5] cursor-pointer"
            onClick={toggleTheme}
          />
        )}

        <img
          src={isDarkMode ? iconMoonLight : iconMoonDark}
          alt="Moon Icon"
          className="w-5"
        />
      </div>
    </div>
  );
};

export default NavBar;
