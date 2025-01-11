import React, { createContext, useState, useEffect } from "react";
import data from "../utils/data.json";
// Create Context
export const QuizContext = createContext();

// Provider Component
export const QuizProvider = ({ children }) => {
  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
   
    const quizData = {
      quizs: data,
    };
    setQuizs(quizData.quizs.quizzes);
  }, []); 

  return <QuizContext.Provider value={quizs}>{children}</QuizContext.Provider>;
};
