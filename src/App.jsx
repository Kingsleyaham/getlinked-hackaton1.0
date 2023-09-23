import {useRef, useState} from "react";
import {useMediaQuery} from "react-responsive";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar/index.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const faqRef = useRef(null);
  const overviewRef = useRef(null);
  const timelineRef = useRef(null);
    const [selectedLink, setSelectedLink] = useState(null);

  const scrollToSection = (ev) => {
      // ev.preventDefault();
      ev.stopPropagation();
    let elem = null;

    if (ev.target.id === "faqLink") elem =  faqRef.current;
    if (ev.target.id === "overviewLink") elem = overviewRef.current;
    if (ev.target.id === "timelineLink") elem = timelineRef.current;

    handleScroll(elem);
  };

  const handleScroll = (elem) => {
    window.scrollTo({
      top: elem.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar isMobile={isMobile} scrollToSection={scrollToSection} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              faqRef={faqRef}
              overviewRef={overviewRef}
              timelineRef={timelineRef}
            />
          }
        ></Route>
        <Route
          path="/register"
          element={<SignUp isMobile={isMobile} />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact isMobile={isMobile} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
