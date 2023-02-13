/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Zara (clone)",
      img: "/zara.png",
      gLink: "https://github.com/Mustaqhasan/absorbing-pail-1974/tree/main/zarai-2202",
      lLink: "https://gentle-crisp-7cf1bc.netlify.app/",
      desc:"Tried to clone zara.com, E-Commerce Website where user serach different produts where they can buy. Made functionality so user can add products into card. It was an individual project",
      tech:"HTML CSS javascript."
    },
    {
      title: "Unbounce (clone)",
      img: "/unbounce.png",
      gLink: "https://github.com/dan-josh/annoyed-geese-7107",
      lLink: "https://famous-douhua-abc855.netlify.app/",
     desc:"Cloned Unbounce.com to show Our Skills in HTML CSS and javascript, Unbounce helps to build your Pwn business and help to build landing pages, worked on Pricing page in that I have shown prices for monthly as well as yearly so user can register accordingly. It was a Group Project ",
      tech:"HTML CSS javascript."
    },
    {
      title: "Crickbuzz (clone)",
      img: "/crickbuzz.png",
      gLink: "https://github.com/Mustaqhasan/limping-protest-4858",
      lLink: "https://thunderous-caramel-77b6e4.netlify.app/",
      desc:"Crickbuzz shows live scores of Cricket for national and international cricket, It has all teams information. It was an individual project",
      tech:"HTML CSS."
    },
    {
      title: "Crickbuzz (clone)",
      img: "/crickbuzz.png",
      gLink: "https://github.com/Mustaqhasan/limping-protest-4858",
      lLink: "https://thunderous-caramel-77b6e4.netlify.app/",
      desc:"Crickbuzz shows live scores of Cricket for national and international cricket, It has all teams information. It was an individual project",
      tech:"HTML CSS."
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Mustaqhasan"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project-card" key={i+1}> 
            {/* project --> project-card */}
              
              <div className="description">
                <h4 className="project-title">{project.title}</h4>
                
                <div className="links">
                  <a className="project-github-link" href={project.gLink} target="_blank" rel="noreferrer">
                    {/* project-github-link */}
                    <i className="fab fa-github"></i>
                  </a>
                  <a className="project-deployed-link" href={project.lLink} target="_blank" rel="noreferrer">
                    {/* project-deployed-link */}
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
                <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
                
              </div>
              <p className="project-description">
                {/* project-description */}
                {project.desc}
              </p>
              <div className="project-tech-stack">
                  {/* project-tech-stack */}
                  <p>Tech Used: {project.tech}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
