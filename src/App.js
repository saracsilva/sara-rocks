import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import DivisionBar from "./components/DivisionBar";
/* import ErrorPage from "./pages/ErrorPage";
import AboutPage from "./pages/AboutPage"; */
import { Routes, Route } from "react-router-dom";
import Project01 from "./components/Project01";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-yellow">
      <Navbar
        className="bg-purple"
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-full mx-auto md:h-5/6 bg-purple rounded-b-[100px] flex justify-center items-center">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <DivisionBar />
      <div className="w-full mx-autorounded-b-3xl bg-light-blue rounded-t-[100px]">
        <Projects />
        <img src="../assets/sara_logo.svg" />
      </div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Landing />} />
        <Route path="/project01" element={<Project01 />} />
        {/* <Route path="/about" element={<AboutPage />} />
         */}
      </Routes>
    </div>
  );
}

export default App;
