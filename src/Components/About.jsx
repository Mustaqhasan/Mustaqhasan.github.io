// import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import file from "./file/Mustaq_Shaikh_Resume_F.pdf"
import download from './handleClick'

const About = () => {
  // const handleClick = () => {
  //   // window.location.href="https://drive.google.com/file/d/1d0D2wn0zcDIR76hPmvmhXZRc-fda0vqo/view?usp=share_link"

  //   window.open(
  //     "https://drive.google.com/file/d/1d0D2wn0zcDIR76hPmvmhXZRc-fda0vqo/view?usp=share_link",
  //     "_blank" // <- This is what makes it open in a new window.
  //   );
  // };
  return (
    <section id="about" className="about section">
      <div className="about-div1">
        <div className="about-title">
          <h3 style={{ marginBottom: "60px" }} className="section">
            About Me
          </h3>
          <div id="user-detail-intro" className="about-content">
            <h3 id="user-detail-name">I am Shaikh Mustaq Hasan Muneer</h3>
            Results-driven DevOps Engineer with expertise in automating,
            streamlining, and optimizing software delivery pipelines. Skilled in
            CI/CD implementation, infrastructure-as-code, containerization, and
            cloud platforms to accelerate development cycles and improve
            deployment reliability. Proficient in tools such as Jenkins, Docker,
            Kubernetes, Terraform, Ansible, and cloud services (AWS). Strong
            background in monitoring, troubleshooting, and ensuring high
            availability of applications in production environments. Adept at
            collaborating with cross-functional teams to bridge the gap between
            development and operations, enabling faster, more reliable software
            delivery.
          </div>
          {/* <button onClick={handleClick} id="resume-button-1">
                <a
                  id="resume-link-1"
                  href="Mustaq_Shaikh_Resume.pdf"
                  download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
                  target="_blank"
                >
                  Resume
                </a>
              </button> */}
          <div
            style={{
              fontSize: "20px",
              textShadow: "-moz-initial",
              color: "Highlight",
            }}
          >
            {/* <a
              id="resume-link-2"
              href="Mustaq_Shaikh_Resume.pdf"
              download={"fw20_0567-Mustaq-Shaikh-Resume.pdf"}
              target="_blank"
              rel="noreferrer"
            >
              <button
                onClick={handleClick}
                id="resume-button-2"
                className="btn"
              >
                Get Resume
              </button>
            </a> */}

            <button id="resume-button-2">
              <a
                // href="https://drive.google.com/uc?export=download&id=1d0D2wn0zcDIR76hPmvmhXZRc-fda0vqo"
                href={file}
                download={"Mustaq_Shaikh_Resume_F.pdf"}
                onClick={download}
                id="resume-link-2"
              >
                <button className="btn">Get Resume</button>
              </a>
            </button>
          </div>
          {/* <div
            style={{
              fontSize: "20px",
              textShadow: "-moz-initial",
              color: "Highlight",
            }}
          >
            <a
              id="resume-link-2"
              href="https://drive.google.com/file/d/1d0D2wn0zcDIR76hPmvmhXZRc-fda0vqo/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <a
                href="Mustaq_Shaikh_Resume.pdf"
                download={"fw20_0567-Mustaq-Shaikh-Resume.pdf"}
              >
                <button
                  onClick={handleClick}
                  id="resume-button-2"
                  className="btn"
                >
                  Get Resume
                </button>
              </a>
            </a>
          </div> */}
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
