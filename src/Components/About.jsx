// import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="about section">
      <div
        style={{
          border: "2px solid black",
          borderLeft: "none",
          borderRight: "none",
          marginTop: "100px",
        }}
      >
        <div
          className="about-title"
          style={{
            margin: "auto",
            width: "auto",
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          <h3 style={{ marginBottom: "60px" }} className="section">
            About Me
          </h3>
          <div id="user-detail-intro" className="about-content">
            <h3 id="user-detail-name">I am Shaikh Mustaq Hasan Muneer</h3>
            Dedicated and Efficient Full Stack Developer with 1000+ hours Coding
            Experience. Certified in Front End Technologies such as HTML and
            CSS. Also Learned JS and UI libraries like React JS. Looking for the
            opportunity to leverage my skills and knowledge to contribute to the
            organization and to grow as a professional.
          </div>
          <div
            style={{
              fontSize: "20px",
              textShadow: "-moz-initial",
              color: "Highlight",
            }}
          >
            <a
              id="resume-link-2"
              href="Mustaq_Shaikh_Resume.pdf"
              download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
            >
              <button
                style={{ border: "1px solid", color: "black" }}
                id="resume-button-2"
              >
                Get Resume
              </button>
            </a>
          </div>
        </div>

        {/* <div>
          <h3 className="section">I am Shaikh Mustaq Hasan Muneer</h3>
        </div>
        <div id="user-detail-intro" className="about-content">
          Dedicated and Efficient Full Stack Developer with 1000+ hours Coding
          Experience. Certified in Front End Technologies such as HTML and CSS.
          Also Learned JS and UI libraries like React JS. Looking for the
          opportunity to leverage my skills and knowledge to contribute to the
          organization and to grow as a professional.
        </div> */}
      </div>
    </section>
  );
};

export default About;
