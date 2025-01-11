  {/* <img
                  src={images.htmlImg}
                  alt="HTML"
                  className="w-[33px] p-2 bg-[#ffe5e5] rounded-md"
                />

                <p className="font-semibold">HTML</p> */}
              // </div>
              {/* <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
                <img
                  src={images.cssImg}
                  alt="CSS"
                  className="w-[33px] p-2 bg-[#e5ffeb] rounded-md"
                />
                <p className="font-semibold">CSS</p>
              </div>
              <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
                <img
                  src={images.javascriptImg}
                  alt="JavaScript"
                  className="w-[33px] p-2 bg-[#e6e5ff] rounded-md"
                />
                <p className="font-semibold">JavaScript</p>
              </div>
              <Link
                to="/questions"
                className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500"
              >
                <img
                  src={images.accessibilityImg}
                  alt="Accessibility"
                  className="w-[33px] p-2 bg-[#ecdcf6] rounded-md"
                />
                <p className="font-semibold">Accessibility</p>
              </Link> */}




              // QUESTIONS


//               import React from "react";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import { useTheme } from "../components/ThemeMode";
// import { useQuizSelection } from "../components/SelectedContext";

// const Questions = () => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   const { selectedQuiz } = useQuizSelection();

//   console.log(selectedQuiz);

//   return (
//     <div>
//       <NavBar />
//       <div
//         className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
//           isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
//         } `}
//       >
//         {selectedQuiz && selectedQuiz.questions ? (
//           selectedQuiz.questions.map((quiz, index) => (
//             <div key={index} className="mb-5">
//               {/* Question */}
//               <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
//                 {quiz.question}
//               </p>

//               {/* Options */}
//               <ul className="ml-5 list-disc">
//                 {quiz.options.map((option, i) => (
//                   <li key={i} className="my-2">
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         ) 

//           {selectedQuiz && selectedQuiz.questions ? (
//           selectedQuiz.questions.map((quiz, index) => (

//         <div key={index} className="container flex flex-col gap-10 px-4 py-10 mx-auto lg:flex-row lg:justify-between">
//           <div className="flex flex-col items-start lg:w-[50%]">
//             <div className="my-5 font-rubik italic text-sm leading-[150%]">
//               <p>Question 1 of 10</p>
//             </div>

//             <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
//               {quiz.question}
//             </p>

//             <div className="bg-white w-full lg:w-[80%] rounded-lg mt-10">
//               <p className="bg-[#A729F5] p-1 w-[40%] rounded-lg"></p>
//             </div>
//           </div>
//           <div
//             className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
//               isDarkMode
//                 ? "bg-gray-800 text-white border border-gray-700"
//                 : "bg-slate-100 text-black"
//             }`}
//           >
//             <div
//               className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 border-2 hover:border-[#A729F5] transition-colors duration-500 ${
//                 isDarkMode
//                   ? "bg-gray-800 text-white border border-gray-700"
//                   : "bg-white text-black border-2 border-slate-50"
//               } `}
//             >
//               // <div
//               //   className={`w-[33px] py-1 px-2 rounded-md text-center ${
//               //     isDarkMode
//               //       ? "bg-gray-700 text-white "
//               //       : "bg-[#f6f6f6] text-black "
//               //   } `}
//               // >
//               //   A
//               // </div>

//                   <ul className="ml-5 list-disc">
//                 {quiz.options.map((option, i) => (
//                   <li key={i} className="font-semibold">
//                     {option}
//                   </li>
//                 ))}
//               </ul>
//               <p className="font-semibold">4.5 : 1</p>


//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 B
//               </div>
//               <p className="font-semibold">3 : 1</p>
//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 C
//               </div>
//               <p className="font-semibold">2.5 : 1</p>
//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 D
//               </div>
//               <p className="font-semibold">5 : 1</p>
//             </div>
//             <Link to="/scores" className="w-full">
//               <button className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-2 hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500">
//                 Submit Answer
//               </button>
//             </Link>
//           </div>
//         </div>
        
        
//         : (
//           <p>Select a Question</p>
//         )}


        
//       </div>
//     </div>
//   );
// };

// export default Questions;




// import React from "react";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import { useTheme } from "../components/ThemeMode";
// import { useQuizSelection } from "../components/SelectedContext";

// const Questions = () => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   const { selectedQuiz } = useQuizSelection();

//   console.log(selectedQuiz);

//   return (
//     <div>
//       <NavBar />
//       <div
//         className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
//           isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
//         } `}
//       >
//         {selectedQuiz && selectedQuiz.questions ? (
//           selectedQuiz.questions.map((quiz, index) => (
//             <div
//               key={index}
//               className="container flex flex-col gap-10 px-4 py-10 mx-auto lg:flex-row lg:justify-between"
//             >
//               <div className="flex flex-col items-start lg:w-[50%]">
//                 <div className="my-5 font-rubik italic text-sm leading-[150%]">
//                   <p>Question 1 of 10</p>
//                 </div>

//                 <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
//                   {quiz.question}
//                 </p>

//                 <div className="bg-white w-full lg:w-[80%] rounded-lg mt-10">
//                   <p className="bg-[#A729F5] p-1 w-[40%] rounded-lg"></p>
//                 </div>
//               </div>

//               <div
//                 className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
//                   isDarkMode
//                     ? "bg-gray-800 text-white border border-gray-700"
//                     : "bg-slate-100 text-black"
//                 }`}
//               >
//                 <ul
//                   className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 border-2 hover:border-[#A729F5] transition-colors duration-500 ${
//                     isDarkMode
//                       ? "bg-gray-800 text-white border border-gray-700"
//                       : "bg-white text-black border-2 border-slate-50"
//                   } `}
//                 >
//                   <div
//                     className={`w-[33px] py-1 px-2 rounded-md text-center ${
//                       isDarkMode
//                         ? "bg-gray-700 text-white "
//                         : "bg-[#f6f6f6] text-black "
//                     } `}
//                   >
//                     A
//                   </div>

//                   {quiz.options.map((option, i) => (
//                     <li key={i} className="font-semibold">
//                       {option}
//                     </li>
//                   ))}
//                 </ul>

//                 <Link to="/scores" className="w-full">
//                   <button className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-2 hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500">
//                     Submit Answer
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Select a Question</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questions;




// Question page 

// import React from "react";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import { useTheme } from "../components/ThemeMode";
// import { useQuizSelection } from "../components/SelectedContext";

// const Questions = () => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   const { selectedQuiz } = useQuizSelection();

//   console.log(selectedQuiz);

//   return (
//     <div>
//       <NavBar />
//       <div
//         className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
//           isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
//         } `}
//       >
//         <div className="container flex flex-col gap-10 px-4 py-10 mx-auto lg:flex-row lg:justify-between">
//           <div className="flex flex-col items-start lg:w-[50%]">
//             <div className="my-5 font-rubik italic text-sm leading-[150%]">
//               <p>Question 1 of 10</p>
//             </div>

//             <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
//               What is React?
//             </p>

//             <div className="bg-white w-full lg:w-[80%] rounded-lg mt-10">
//               <p className="bg-[#A729F5] p-1 w-[40%] rounded-lg"></p>
//             </div>
//           </div>
//           <div
//             className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
//               isDarkMode
//                 ? "bg-gray-800 text-white border border-gray-700"
//                 : "bg-slate-100 text-black"
//             }`}
//           >
//             <div
//               className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 border-2 hover:border-[#A729F5] transition-colors duration-500 ${
//                 isDarkMode
//                   ? "bg-gray-800 text-white border border-gray-700"
//                   : "bg-white text-black border-2 border-slate-50"
//               } `}
//             >
//               <div
//                 className={`w-[33px] py-1 px-2 rounded-md text-center ${
//                   isDarkMode
//                     ? "bg-gray-700 text-white "
//                     : "bg-[#f6f6f6] text-black "
//                 } `}
//               >
//                 A
//               </div>
//               <p className="font-semibold">4.5 : 1</p>
//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 B
//               </div>
//               <p className="font-semibold">3 : 1</p>
//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 C
//               </div>
//               <p className="font-semibold">2.5 : 1</p>
//             </div>
//             <div className="flex justify-start items-center gap-5 p-3 bg-white rounded-lg w-full my-2 border-2 border-slate-50 hover:border-[#A729F5] transition-colors duration-500">
//               <div className="w-[33px] py-1 px-2 bg-[#f6f6f6] rounded-md text-center">
//                 D
//               </div>
//               <p className="font-semibold">5 : 1</p>
//             </div>
//             <Link to="/scores" className="w-full">
//               <button className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-2 hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500">
//                 Submit Answer
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Questions;

// FINNISHED PRODUCT 

// import React, { useState, useEffect } from "react";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import { useTheme } from "../components/ThemeMode";
// import { useQuizSelection } from "../components/SelectedContext";

// const OPTION_LABEL = ["A", "B", "C", "D"];
// const Questions = () => {
//   const { isDarkMode, toggleTheme } = useTheme();
//   const [currentQuestion, setCurrentQuestion] = useState({});
//   const [questionNumber, setQuestionNumber] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const { selectedQuiz } = useQuizSelection();
//   // const currentQuestion = selectedQuiz?.questions?.[questionNumber] ?? {};

//   console.log(clickedOption);
//   const handleSubmitQuestion = () => {
//     let currentNumber =
//       questionNumber + 1 < selectedQuiz.questions.length
//         ? questionNumber + 1
//         : questionNumber;

//     // console.log((questionNumber + 1 / selectedQuiz.questions.length) * 100);

//     setQuestionNumber(currentNumber);
//     // console.log(currentNumber);

//     setQuestionNumber((prevState) => prevState++);
//   };
//   // console.log(questionNumber);

//   useEffect(() => {
//     setCurrentQuestion(selectedQuiz?.questions?.[questionNumber]);
//     setProgress((questionNumber / selectedQuiz.questions.length) * 100);
//   }, [questionNumber]);

//   return (
//     <div>
//       <NavBar />
//       <div
//         className={`min-h-screen flex flex-col items-center transition-colors duration-500 ${
//           isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-black"
//         } `}
//       >
//         {selectedQuiz && selectedQuiz.questions ? (
//           // selectedQuiz?.questions?.[questionNumber].map((quiz, index) => (
//           <div
//             // key={index}
//             className="container flex flex-col gap-10 px-4 py-10 mx-auto lg:flex-row lg:justify-between"
//           >
//             <div className="flex flex-col items-start lg:w-[50%]">
//               <div className="my-5 font-rubik italic text-sm leading-[150%]">
//                 <p>Question {questionNumber + 1} of 10</p>
//               </div>

//               <p className="font-bold text-lg lg:text-xl text-wrap w-full lg:w-[70%]">
//                 {currentQuestion?.question}
//               </p>

//               <div className="bg-white w-full lg:w-[80%] rounded-lg mt-10">
//                 <p
//                   className="p-1 rounded-lg "
//                   style={{
//                     width: `${progress === 90 ? 100 : progress}%`,
//                     background: progress > 0 ? "#A729F5" : "",
//                   }}
//                 ></p>
//               </div>
//             </div>

//             <div
//               className={`flex flex-col items-center lg:w-[50%] p-5 rounded-lg shadow-md transition-colors duration-500 ${
//                 isDarkMode
//                   ? "bg-gray-800 text-white border border-gray-700"
//                   : "bg-slate-100 text-black"
//               }`}
//             >
//               {currentQuestion?.options?.map((option, i) => (
//                 <div
//                   key={i}
//                   className={`flex justify-start items-center gap-5 p-3 rounded-lg w-full my-2 border-2 hover:border-[#A729F5] transition-colors duration-500 ${
//                     isDarkMode
//                       ? "bg-gray-800 text-white border border-gray-700"
//                       : "bg-white text-black border-2 border-slate-50"
//                   } `}
//                 >
//                   <div
//                     className={`w-[33px] py-1 px-2 rounded-md text-center ${
//                       isDarkMode
//                         ? "bg-gray-700 text-white "
//                         : "bg-[#f6f6f6] text-black "
//                     } `}
//                   >
//                     {OPTION_LABEL[i]}
//                   </div>

//                   <li
//                     className="font-semibold list-none"
//                     onClick={handleClickedOption}
//                   >
//                     {option}
//                   </li>
//                   {/* {currentQuestion?.options?.map((option, i) => ( */}
//                   {/* ))} */}
//                 </div>
//               ))}

//               {/* <Link to="/scores" className="w-full"> */}
//               <button
//                 className="gap-5 p-3 bg-[#A729F5] text-white rounded-lg w-full my-2 hover:scale-105 hover:bg-[#dea9ff] text-center transition-transform duration-500"
//                 onClick={handleSubmitQuestion}
//               >
//                 Submit Answer
//               </button>
//               {/* </Link> */}
//             </div>
//           </div>
//         ) : (
//           // ))
//           <p>Select a Question</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questions;

