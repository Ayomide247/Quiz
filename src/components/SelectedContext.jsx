import React, { createContext, useState, useContext } from "react";

const QuizSelectionContext = createContext();

export const QuizSelectionProvider = ({ children }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  return (
    <QuizSelectionContext.Provider
      value={{
        selectedQuiz,
        setSelectedQuiz,
        totalScore,
        setTotalScore,
      }}
    >
      {children}
    </QuizSelectionContext.Provider>
  );
};

export const useQuizSelection = () => useContext(QuizSelectionContext);
