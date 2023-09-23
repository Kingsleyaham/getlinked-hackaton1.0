import {useMediaQuery} from "react-responsive";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar/index.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SignUp from "./pages/Signup";

function App() {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="App">
      <Navbar isMobile={isMobile}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp isMobile={isMobile}/>}></Route>
        <Route path="/contact" element={<Contact isMobile={isMobile}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
