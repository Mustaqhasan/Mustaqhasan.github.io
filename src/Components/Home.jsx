/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";

function Home() {
  return (
    <section  className="banner" id="home">
      <div className="container">
        <div style={{height:"auto"}} className="banner-wrapper">
          <div className="banner-img">
            {/* <div className="profile-picture-background"> */}

            <img className="home-img" src="/002.jpg" alt="" />
            {/* </div> */}
          </div>
          <div style={{paddingLeft:"50px",width:"900px"}}  className="banner-content">
            <div className="links">
             
              <a
              id="contact-linkedin"
                target={"_blank"}
                rel="noreferrer"
                href="https://www.linkedin.com/in/mustaqshaikh/"
              >
                <h1 className="fa fa-linkedin">.</h1>
              </a>
              <a
                id="contact-github"
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/Mustaqhasan"
              >
                <h1 className="fa fa-github">.</h1>
              </a>
              <a
              id="contact-email"
                target={"_blank"}
                rel="noreferrer"
                href="mailto:shaikhmustaq7714@gmail.com"
              >
                <h1 className="fa fa-envelope-square" aria-hidden="true"></h1>
              </a>
              {/* <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/mustaqhasan.shaikh.3">
            <i className="fab fa-facebook"></i>
          </a>
          <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/accounts/login/?hl=en">
            <i className="fab fa-instagram"></i>
          </a> */}
            </div>
            <h3 id="user-detail-name">Hello 👋🏻 , I'm Mustaq Shaikh</h3>
            <h2 id="user-detail-intro">Aspiring Web Developer</h2>
            <div id="typical">
              {/* Full Stack Web Developer */}
              <Typical
                loop={Infinity}
                wrapper="h3"
                steps={[
                  "Enthusiastic Web Dev 😎",
                  2000,
                  "Full Stack Web Developer 👨‍💼",
                  2000,
                  "Dedicated Mern Dev 🤵",
                  2000,
                  "Cross Platform Dev 🌐",
                  2000,
                  "React Dev ❄️",
                  2000,
                ]}
              />
            </div>
            
            {/* <p id="user-detail-intro">
            

            </p> */}
            {/* <a
              className="btn"
              id="resume-link-2"
              href="Mustaq_Shaikh_Resume.pdf"
              download={"Mustaq_Shaikh_Resume Mustaq_Shaikh_Resume.pdf"}
            >
              <button style={{border:"none",color:"white"}} id="resume-button-2">

              Get Resume
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
