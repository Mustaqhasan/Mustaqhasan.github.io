// import React from "react";

// import { useState, useEffect } from "react";
// function Navbar() {
//   const [stickyClass, setStickyClass] = useState("");
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", stickNavbar);

//     return () => {
//       window.removeEventListener("scroll", stickNavbar);
//     };
//   }, []);

//   const stickNavbar = () => {
//     if (window !== undefined) {
//       let windowHeight = window.scrollY;
//       windowHeight > 100 ? setStickyClass("sticky") : setStickyClass("");
//     }
//   };

//   return (
//     <header id="nav-menu" className={`${stickyClass}`}>
//       <div className="header-inner">
//         <a style={{ textDecoration: "none" }} href="#home">
//           <span className="logo">Mustaq.</span>
//         </a>
//         <div className="nav-link">
//           <a className="home" id="link" href="#home">
//             Home
//           </a>
//           <a className="about" id="link" href="#about">
//             About
//           </a>
//           <a className="skills" id="link" href="#skills">
//             Skills
//           </a>
//           <a className="projects" id="link" href="#projects">
//             Projects
//           </a>
//           <a className="contact" id="link" href="#contact">
//             Contact
//           </a>

//           <a
//             className="resume"
//             id="resume-button-1"
//             href="Mustaq_Shaikh_Resume.pdf"
//             download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
//           >
//             <button
//               id="resume-button-1"
//               style={{ color: "red", padding: "10px", cursor: "pointer" }}
//             >
//               Resume
//             </button>
//           </a>
//         </div>
//         <span className="menu" onClick={() => setActive(!active)}>
//           <i className="fas fa-bars"></i>
//         </span>
//       </div>
//       <div className={`mobile-links ${active ? "active" : ""}`}>
//         <a className="link" onClick={() => setActive(!active)} href="#home">
//           Home
//         </a>
//         <a className="link" onClick={() => setActive(!active)} href="#about">
//           About
//         </a>
//         <a className="link" onClick={() => setActive(!active)} href="#skills">
//           Skills
//         </a>
//         <a className="link" onClick={() => setActive(!active)} href="#projects">
//           Projects
//         </a>
//         <a className="link" onClick={() => setActive(!active)} href="#contact">
//           Contact
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Navbar;

import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
function Header() {
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
      windowHeight > 50 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    // <header id={`${stickyClass}`}>
    <header id={`sticky`}>
      <div  id="nav-menu">
        <div id="header-inner">
          <a href="#home">
            <span id="logo">Mustaq.</span>
          </a>
          <div className="nav-links" id="links">
            <div className="nav-link home">
              <a id="link" href="#home">
                Home
              </a>
            </div>
            <div className="nav-link about">
              <a id="link" href="#about">
                About
              </a>
            </div>
            <div className="nav-link skills">
              <a id="link" href="#skills">
                Skills
              </a>
            </div>
            <div className="nav-link projects">
              <a id="link" href="#projects">
                Projects
              </a>
            </div>
            <div>
              <a className="nav-link contact" id="link" href="#contact">
                Contact
              </a>
            </div>
            <div className="nav-link resume">
              <a
                id="resume-link-1"
                href="Mustaq_Shaikh_Resume.pdf"
              download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
              >
                <button id="resume-button-1" >Resume</button>
              </a>
            </div>
          </div>

          <div style={{marginTop:"10px"}} id="menu" >
            <Menu colorScheme={"blue"}>
              <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
                id={`mobile-links ${active ? "active" : ""}`}
              >
                File
              </MenuButton>
              <MenuList>
                <div id="menulist">
                  <div >
                    <a id="link" href="#home">
                      Home
                    </a>
                  </div>
                  <div>
                    <a id="link" href="#about">
                      About
                    </a>
                  </div>
                  <div >
                    <a id="link" href="#skills">
                      Skills
                    </a>
                  </div>
                  <div >
                    <a id="link" href="#projects">
                      Projects
                    </a>
                  </div>
                  <div>
                    <a id="link" href="#contact">
                      Contact
                    </a>
                  </div>
                </div>
              </MenuList>
            </Menu>
          </div>



          {/* <span id="menu" onClick={() => setActive(!active)}>
          <i className="fas fa-bars"></i>
        </span> */}
        </div>
        {/* <div id={`mobile-links ${active ? "active" : ""}`}>
        <a id="link" onClick={() => setActive(!active)} href="#banner">
          Home
        </a>
        <a id="link" onClick={() => setActive(!active)} href="#services">
          Sevices
        </a>
        <a
          id="link"
          onClick={() => setActive(!active)}
          href="#experiences"
        >
          Experience
        </a>
        <a id="link" onClick={() => setActive(!active)} href="#projects">
          Projects
        </a>
      </div> */}
      </div>
    </header>
  );
}

export default Header;

/*
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command='⌘T'>
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command='⌘O'>
      Open File...
    </MenuItem>
  </MenuList>
</Menu>
*/
