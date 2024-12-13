import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-[#1e1e1e] min-h-screen w-auto">
        {/* <About/> */}
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
