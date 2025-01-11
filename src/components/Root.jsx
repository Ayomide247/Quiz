import React from "react";
import { ThemeProvider } from "../components/ThemeMode";
import App from "../App";
import { QuizProvider } from "./QuizContext";
import { QuizSelectionProvider } from "./SelectedContext";

const Root = () => {
  return (
    <QuizProvider>
      <ThemeProvider>
        <QuizSelectionProvider>
          <App />
        </QuizSelectionProvider>
      </ThemeProvider>
    </QuizProvider>
  );
};

export default Root;
