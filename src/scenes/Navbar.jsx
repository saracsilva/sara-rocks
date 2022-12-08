import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
//import AnchorLink from "react-anchor-link-smooth-scroll";
import saraLogo from "../assets/sara_logo.svg";
import "./Button.css";
import { Link as LinkRouter } from "react-scroll";

/* const Linking = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <Link
      to={`#${lowerCasePage}`}
      spy={true}
      smooth={true}
      offset={500}
      duration={500}
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
}; */

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px )");
  /*  const navbarBackground = isTopOfPage ? " " : "bg-red"; */
  return (
    <nav className={`bg-purple z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <div className="w-2/6">
          {" "}
          <img src={saraLogo} alt="logo Sara" className={"w-1/2 max-h-16"} />
        </div>

        {/*  Desktop Nav */}

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold w-3/6">
            <div className="flex justify-start gap-8 w-1/6">
              <ul>
                <li>
                  <LinkRouter
                    to={`home`}
                    spy={true}
                    smooth={true}
                    offset={500}
                    duration={500}
                  >
                    Home
                  </LinkRouter>
                </li>
                <li>
                  <LinkRouter
                    to={`projects`}
                    spy={true}
                    smooth={true}
                    offset={500}
                    duration={500}
                  >
                    Projects
                  </LinkRouter>
                </li>
              </ul>
              {/*  <Linking
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Linking
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Linking
                page="Project01"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
            </div>{" "}
            <div>
              <button className="button-54">Let's Talk!</button>
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-blue p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu icon" src="../assets/menu-icon.svg" />
          </button>
        )}
        {/* Mobile Menu */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* Menu Itens */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
