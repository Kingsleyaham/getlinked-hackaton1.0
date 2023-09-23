import {useRef, useEffect} from "react";
import {useMediaQuery} from "react-responsive";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar/index.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";

function App() {
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    const {pathname} = useLocation();

    const faqRef = useRef(null);
    const overviewRef = useRef(null);
    const timelineRef = useRef(null);
    useEffect(() => {
        if (pathname === "/faq") {
            setTimeout(() => {
                handleScroll(faqRef.current);
            }, 100);
        }

        if (pathname === "/overview") {
            setTimeout(() => {
                handleScroll(overviewRef.current);
            }, 100);
        }

        if (pathname === "/timeline") {
            setTimeout(() => {
                handleScroll(timelineRef.current);
            }, 100);
        }
    }, []);
    // const useEf

    const scrollToSection = (ev) => {
        // ev.preventDefault();

        let elem = null;

        if (ev.target.id === "faqLink") elem = faqRef.current;
        if (ev.target.id === "overviewLink") elem = overviewRef.current;
        if (ev.target.id === "timelineLink") elem = timelineRef.current;

        // if(pathname === "/#faq") elem =  faqRef.current;

        handleScroll(elem);
    };

    const handleScroll = (elem) => {
        window.scrollTo({
            top: elem.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const HomeElement = (
        <Home faqRef={faqRef} overviewRef={overviewRef}
                     timelineRef={timelineRef}/>
    );

    return (
        <div className="App">
            <Navbar isMobile={isMobile} scrollToSection={scrollToSection}/>
            <Routes>
                <Route
                    path="/"
                    element={
                        HomeElement
                    }
                ></Route>

                <Route
                    path="/faq"
                    element={
                        HomeElement
                    }
                ></Route>

                <Route
                    path="/overview"
                    element={
                        HomeElement
                    }
                ></Route>

                <Route
                    path="/timeline"
                    element={
                        HomeElement
                    }
                ></Route>

                <Route
                    path="/register"
                    element={<SignUp isMobile={isMobile}/>}
                ></Route>

                <Route
                    path="/contact"
                    element={<Contact isMobile={isMobile}/>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
