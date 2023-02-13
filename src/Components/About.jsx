import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-title" style={{ margin: "auto", width: "auto", textAlign:"center",marginTop:"150px",marginBottom:"50px" }}>
        <h3>About Me</h3>
      </div>
      {/* <div
        style={{
          border: "1px solid red",
          height: "300px",
          width: "80%",
          margin: "auto",
        }}
      >
          <Box>
            <Heading>I am Shaikh Mustaq Hasan Muneer</Heading>
          </Box>
          <Box>
          Dedicated and Efficient Full Stack Developer
with 1000+ hours Coding Experience. Certified
in Front End Technologies such as HTML and
CSS. Also Learned JS and UI libraries like React
JS. Looking for the opportunity to leverage my
skills and knowledge to contribute to the
organization and to grow as a professional.
          </Box>

      </div> */}

      <Box>
        <Heading >I am Shaikh Mustaq Hasan Muneer</Heading>

      </Box>
      <Box id="user-detail-intro" className="about-content">
          Dedicated and Efficient Full Stack Developer
with 1000+ hours Coding Experience. Certified
in Front End Technologies such as HTML and
CSS. Also Learned JS and UI libraries like React
JS. Looking for the opportunity to leverage my
skills and knowledge to contribute to the
organization and to grow as a professional.
          </Box>
    </div>
  );
};

export default About;
