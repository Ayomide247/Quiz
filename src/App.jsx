import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartMenu from "./pages/StartMenu";
import Questions from "./pages/Questions";
import Scores from "./pages/Scores";
import bgImgLight from "./assets/images/pattern-background-desktop-light.svg";
import bgImgDark from "./assets/images/pattern-background-desktop-dark.svg";
import { useTheme } from "./components/ThemeMode";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <div
        // style={{
        //   background: `url(${isDarkMode ? bgImgDark : bgImgLight})`,
        //   fontFamily: "Rubik, sans-serif",
        //   height:' 200px'
        // }}
        className={`flex flex-col bg-cover bg-center h-screen lg:p-10 font-rubik transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-[#313E51]"
        }`}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartMenu />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/scores" element={<Scores />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
