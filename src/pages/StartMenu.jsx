import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import images from "../utils/Images";
import { useQuizSelection } from "../components/SelectedContext";
import { useTheme } from "../components/ThemeMode";
import { QuizContext } from "../components/QuizContext";

const StartMenu = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const quizze = useContext(QuizContext);
  const { selectedQuiz, setSelectedQuiz } = useQuizSelection();
  const navigate = useNavigate();

  const handleQuizClick = (quiz) => {
    setSelectedQuiz(quiz);
    navigate("/questions");

    // console.log(selectedQuiz);

    // if (selectedQuiz === null) {
    //   console.log("Select a Topic");
    // } else {
    //   console.log(selectedQuiz);
    //   navigate("/questions");
    // }
  };

  return (
    <div>
      <NavBar />
      <div
        className={`min-h-screen flex flex-col items-center transition-colors duration-500 bg-slate-100 text-black dark:bg-gray-900 dark:text-white`}
      >
        <div className="container flex flex-col items-center px-4 py-10 mx-auto">
          <div className="flex flex-col w-full gap-10 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h1 className="text-[44px] md:text-[54px] font-light">
                Welcome to the
              </h1>
              <h1 className="text-[44px] md:text-[54px] font-semibold mt-2">
                FrontEnd Quiz!
              </h1>
              <div className="my-5 font-rubik italic text-sm leading-[150%]">
                <p>Pick a subject to get started</p>
              </div>
            </div>

            <div
              className={`flex flex-col items-center lg:w-[50%] p-10 rounded-lg scale-105 shadow-md transition-colors duration-500${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-slate-100 text-black"
              } `}
            >
              <div className="w-full">
                <ul className=" bg-inherit">
                  {quizze && quizze.length > 0 ? (
                    quizze.map((quiz, index) => (
                      <span
                        // {selectedQuiz ? "/questions" : "#"}
                        onClick={() => handleQuizClick(quiz)}
                        key={index}
                        className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 hover:border-[#A729F5] transition-colors duration-500 cursor-pointer ${
                          isDarkMode
                            ? "bg-gray-800 text-white border border-gray-700"
                            : "bg-white text-black border-2 border-slate-50"
                        } `}
                      >
                        <img
                          src={images[quiz.title.toLowerCase() + "Img"]}
                          //   alt={`${quiz.title} icon`}
                          className="w-[33px] p-2 bg-[#ffe5e5] rounded-md"
                          style={{ background: quiz.iconBgColor }}
                        />
                        <span className="font-semibold">{quiz.title}</span>
                      </span>
                    ))
                  ) : (
                    <p>Loading quizzes...</p>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
