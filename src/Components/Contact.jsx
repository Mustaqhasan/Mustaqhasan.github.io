import { Box, Flex, textDecoration } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div
        className="contact-title"
        style={{ margin: "auto", width: "80%", textAlign: "center",border:"2px solid black" , borderBottom:"none", borderLeft:"none", borderRight:"none",paddingTop:"20px" }}
      >
        <h3>Contact</h3>

       
      </div>

      <div
        style={{
          border: "2px solid black",
          borderTop:"none",
          borderLeft:"none",
          borderRight:"none",
          height: "auto",
          width: "80%",
          margin: "auto",
          textAlign:"center",
          justifyContent:"center",
          fontSize:"30px",
          textDecoration:"none",
          paddingTop:"70px",
          paddingBottom:"150px"
        }}
      >
          <Box  >
            <a style={{textDecoration:"none"}} href="https://github.com/Mustaqhasan">
              <p  id="contact-github">
              <i style={{marginRight:"10px"}} className="fa fa-github"></i>
              Mustaqhasan
              </p>
            </a>
          </Box>
          <Box>
            <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/mustaqshaikh/">
              <p  id="contact-linkedin">
              <i style={{marginRight:"10px"}}  className="fa fa-linkedin"></i>
                mustaqshaikh
              </p>
            </a>
          </Box>
          <Box>
            <a target={"_blank"}>
              <p id="contact-phone">
                <i style={{marginRight:"10px"}} className="fa fa-phone"></i>
                +91 9763827714
              </p>
            </a>
          </Box>
          <Box>
            <a style={{textDecoration:"none"}} href="mailto:shaikhmustaq7714@gmail.com" target={"_blank"}>
              <p id="contact-email">
                <i style={{marginRight:"10px"}} className="fa fa-envelope"></i>
                shaikhmustaq7714@gmail.com
              </p>
            </a>
          </Box>

      </div>
    </section>
  );
};

export default Contact;

/*
    <footer>
      <div className="container">
        <span className="logo">Hafiz.</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Hafiz
        </p>
      </div>
    </footer>
*/
