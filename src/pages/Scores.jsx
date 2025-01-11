import React from "react";
import NavBar from "../components/NavBar";
import images from "../utils/Images";
import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeMode";
import { useQuizSelection } from "../components/SelectedContext";
import { useNavigate } from "react-router-dom";

const Scores = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { selectedQuiz, totalScore } = useQuizSelection();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  // console.log(totalScore);

  return (
    <div>
      <NavBar />
      <div
        className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
        } `}
      >
        <div className="container flex flex-col px-4 py-10 mx-auto ">
          <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-[44px] md:text-[54px] font-light">
                Quiz Completed
              </h1>
              <h1 className="text-[44px] md:text-[54px] font-semibold mt-2">
                You scored...
              </h1>
              <span className="text-[40px]">
                {totalScore <= 4
                  ? "Opsss...That was bad 😞"
                  : totalScore <= 6
                  ? "Nice one 😋"
                  : "You are a Genius 🫡"}
              </span>
            </div>
            <div
              className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-slate-100 text-black"
              }`}
            >
              {/* <div className="flex items-center justify-center w-full gap-5 p-3 md:w-1/2">
                <img
                  src={images?.[selectedQuiz?.title?.toLowerCase() + "Img"]}
                  alt="Accessibility Icon"
                  className="w-[33px] p-2 bg-[#ecdcf6] rounded-md"
                />
                <p className="font-semibold">{selectedQuiz?.title}</p>
              </div> */}
              <h1 className="text-[70px] font-bold my-6">{totalScore}</h1>
              <div className="text-[25px] font-semibold flex items-center">
                <p>out of 10...</p>{" "}
                {/* <span className="text-[40px]">
                  {totalScore <= 4 ? "😞" : totalScore <= 6 ? "😋" : "🥳"}
                </span> */}
              </div>
              {/* <Link to="/" className="w-full"> */}
              <button
                onClick={handleSubmit}
                className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-10  hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500"
              >
                Try Again
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scores;
