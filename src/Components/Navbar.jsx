import React from "react";

import { useState, useEffect } from "react";
function Navbar() {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <header id="nav-menu" className={`${stickyClass}`}>
      <div className="header-inner">
        <a style={{textDecoration:"none"}} href="#home">

        <span className="logo">Mustaq.</span>
        </a>
        <div className="links">

          <a className="nav-link-home" id="link" href="#home">
            Home
          </a>
          <a className="nav-link-about" id="link" href="#about">
            About
          </a>
          <a className="nav-link-skills" id="link" href="#skills">
            Skills
          </a>
          <a className="nav-link-projects" id="link" href="#projects">
            Projects
          </a>
          <a className="nav-link-contact" id="link" href="#contact">
            Contact
          </a>
          {/* <div  className="nav-link resume">

          </div> */}
          <a id="resume-button-2" className="nav-link-resume" href="Mustaq_Shaikh_Resume.pdf" download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}>

          <button style={{color:"red",padding:"10px",cursor:"pointer"}} id="link" href="#projects">
            Resume
          </button>
          </a>
          {/* <Button colorScheme='blue'>Resume</Button> */}
          {/* <a className="link" href="#experiences">
            Experiences
          </a> */}
        </div>
        <span className="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? "active" : ""}`}>
        <a className="link" onClick={() => setActive(!active)} href="#home">
          Home
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#about">
          About
        </a>
        <a
          className="link"
          onClick={() => setActive(!active)}
          href="#skills"
        >
          Skills
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
        <a className="link" onClick={() => setActive(!active)} href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;
