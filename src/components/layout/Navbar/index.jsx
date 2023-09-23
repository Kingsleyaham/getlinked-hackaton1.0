import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import RegisterButton from "../../RegisterButton.jsx";
import Title from "./Title.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = ({isMobile}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const showMobileNavbar = () => {
    setShowMobileNav(!showMobileNav);
  };

  const closeFromRouteClick = () => {
    setShowMobileNav(false);
  };

  return (
    <nav className="nav flex items-center justify-between select-none pt-8 pb-3 px-20 sm:px-24 md:px-8 lg:px-28">
      <Title />
      <ul
        className={`${
          isMobile && showMobileNav ? "mobile" : ""
        } flex justify-end items-center gap-4 lg:gap-8`}
      >
        {showMobileNav && isMobile && (
            <div className="absolute top-14 right-14">
              <BsXLg color="#F8F8F8" onClick={showMobileNavbar} className="text-[20px]"/>
            </div>

        )}

        <li onClick={closeFromRouteClick}>
          <Link to="/" className="link">
            Timeline
          </Link>
        </li>
        <li onClick={closeFromRouteClick}>
          <Link to="/about">Overview</Link>
        </li>
        <li onClick={closeFromRouteClick}>
          <Link to="/stories">FAQs</Link>
        </li>
        <li onClick={closeFromRouteClick}>
          <Link to="/events">Contact</Link>
        </li>
        <li>
          <RegisterButton />
        </li>


      </ul>
      {!showMobileNav && isMobile && (
        <GiHamburgerMenu
          fontSize={25}
          color="white"
          onClick={showMobileNavbar}
        />
      )}
    </nav>
  );
};

export default Navbar;
