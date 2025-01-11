import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useTheme } from "../components/ThemeMode";
import { useQuizSelection } from "../components/SelectedContext";
import { useNavigate } from "react-router-dom";

const OPTION_LABEL = ["A", "B", "C", "D"];

const Questions = () => {
  const { isDarkMode } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [clickedOptionIndex, setClickedOptionIndex] = useState(null);
  const [authStyle, setAuthStyle] = useState({});
  const [selectedOptionStyle, setSelectedOptionStyle] = useState({});
  const [errorMsg, setErrorMsg] = useState("hidden");
  // const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const { selectedQuiz, setTotalScore } = useQuizSelection();

  useEffect(() => {
    setCurrentQuestion(selectedQuiz?.questions?.[questionNumber]);
    setProgress(((questionNumber + 1) / selectedQuiz?.questions.length) * 100);
    setSelectedOption(null);
    setClickedOptionIndex(null);
    setAuthStyle({});
    setSelectedOptionStyle({});
    // setErrorMsg("hidden");
  }, [questionNumber, selectedQuiz]);

  const handleClickedOption = (option, index) => {
    setSelectedOption(option);
    setClickedOptionIndex(index);
    setErrorMsg("hidden");

    // Apply the scale effect directly to the clicked option
    setSelectedOptionStyle((prevStyles) => ({
      ...prevStyles,
      [index]: "scale(0.95)",
    }));

    // Reset the scale effect after a short delay
    setTimeout(() => {
      setSelectedOptionStyle((prevStyles) => ({
        ...prevStyles,
        [index]: "",
      }));
    }, 200);
  };

  const handleSubmitQuestion = () => {
    if (!selectedOption) {
      setErrorMsg("");
      return;
    }

    const isCorrect = selectedOption === currentQuestion?.answer;
    const updatedScore = isCorrect ? score + 1 : score;

    setAuthStyle((prevStyles) => ({
      ...prevStyles,
      [clickedOptionIndex]: isCorrect ? "green" : "red",
    }));

    setScore(updatedScore);

    setTimeout(() => {
      if (questionNumber + 1 < selectedQuiz.questions.length) {
        setQuestionNumber((prev) => prev + 1);
      } else {
        setTotalScore(updatedScore); // Use the updated score here
        navigate("/Scores");
      }
    }, 1000);
  };

  return (
    <div>
      <NavBar />
      <div
        className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
        }`}
      >
        {selectedQuiz && selectedQuiz.questions ? (
          <div className="container flex flex-col gap-10 px-4 py-10 mx-auto lg:flex-row lg:justify-between">
            {/* Question Section */}
            <div className="flex flex-col items-start lg:w-[50%]">
              <div className="my-5 font-rubik italic text-sm leading-[150%]">
                <p>
                  Question {questionNumber + 1} of{" "}
                  {selectedQuiz.questions.length}
                </p>
              </div>
              <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
                {currentQuestion?.question}
              </p>
              <div className="bg-white w-full lg:w-[80%] rounded-lg mt-10">
                <p
                  className="p-1 rounded-lg"
                  style={{
                    width: `${progress}%`,
                    background: progress > 0 ? "#A729F5" : "",
                  }}
                ></p>
              </div>
            </div>

            {/* Options Section */}
            <div
              className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
                isDarkMode
                  ? "bg-gray-800 text-white border border-gray-700"
                  : "bg-slate-100 text-black"
              }`}
            >
              {currentQuestion?.options?.map((option, i) => (
                <div
                  key={i}
                  className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 border-2 transition-colors duration-500 ${
                    isDarkMode ? "border-gray-700" : "border-2 border-slate-50"
                  }`}
                  onClick={() => handleClickedOption(option, i)}
                  style={{
                    borderColor: authStyle[i] || "",
                    transform: selectedOptionStyle[i],
                  }}
                >
                  <div
                    className={`w-[33px] py-1 px-2 rounded-md text-center ${
                      isDarkMode
                        ? "bg-gray-700 text-white"
                        : "bg-[#f6f6f6] text-black"
                    }`}
                  >
                    {OPTION_LABEL[i]}
                  </div>
                  <li className="font-semibold list-none">{option}</li>
                </div>
              ))}

              <p
                className="italic font-thin text-red-500"
                style={{
                  visibility: errorMsg,
                }}
              >
                Please select an option before submitting.
              </p>
              <button
                className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-2 hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500"
                onClick={handleSubmitQuestion}
              >
                Submit Answer
              </button>
            </div>
          </div>
        ) : (
          navigate("/")
        )}
      </div>
    </div>
  );
};

export default Questions;
