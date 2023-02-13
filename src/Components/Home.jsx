/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";

function Home() {
  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            {/* <div className="profile-picture-background"> */}

            <img className="home-img" src="/person6.png" alt="" />
            {/* </div> */}
          </div>
          <div style={{paddingLeft:"50px",width:"900px"}}  className="banner-content">
            <div className="links">
              {/* <a target={"_blank"} href="#">
            <i className="fab fa-twitter"></i>
          </a> */}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://www.linkedin.com/in/mustaqshaikh/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                id="contact-github"
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/Mustaqhasan"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
              id="contact-email"
                target={"_blank"}
                rel="noreferrer"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                <i className="fa fa-envelope-square" aria-hidden="true"></i>
              </a>
              {/* <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/mustaqhasan.shaikh.3">
            <i className="fab fa-facebook"></i>
          </a>
          <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/accounts/login/?hl=en">
            <i className="fab fa-instagram"></i>
          </a> */}
            </div>
            <h3 id="user-detail-name">Hello 👋🏻 , I'm Mustaq Shaikh</h3>
            <h1>
              {/* Full Stack Web Developer */}
              <Typical
                loop={Infinity}
                steps={[
                  "Enthusiastic Web Dev 😎",
                  2000,
                  "Full Stack Developer 👨‍💼",
                  2000,
                  "Dedicated Mern Dev 🤵",
                  2000,
                  "Cross Platform Dev 🌐",
                  2000,
                  "React Dev ❄️",
                  2000,
                ]}
              />
            </h1>
            <h2 id="user-detail-intro">Aspiring Web Developer</h2>
            {/* <p id="user-detail-intro">
            

            </p> */}
            <a
              className="btn"
              id="resume-button-2"
              href="Mustaq_Shaikh_Resume.pdf"
              download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
            >
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
