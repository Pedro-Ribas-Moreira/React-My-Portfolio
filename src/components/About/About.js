import { useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
// import man from "../../assets/Scrollgroup.svg";
import BackgroundPattern from "../../assets/BackgroundPattern";
import resume from "../../assets/resume.pdf";
import "./About.css";
import React from "react";

const About = () => {
  const { name, role, description, social } = about;

  useEffect(() => {
    const interval = setInterval(() => {
      const bits = document.querySelector("#code").childNodes;
      const colors = ["#2978B5", "#E6E6E6", "#fff"];

      bits.forEach((e) => {
        const number = Math.floor(Math.random() * colors.length);
        if (colors[number] === -1) {
          e.setAttribute("fill", "#fff");
        } else {
          e.setAttribute("fill", colors[number]);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero__container" id="about">
      <div className="about ">
        {name && (
          <div>
            <h1>
              <span className="about__name first-name">{name}</span>
            </h1>
          </div>
        )}

        {role && <h2 className="about__role">A {role}.</h2>}
        <p className="about__desc">{description && description}</p>

        <div className="about__contact center">
          {resume && (
            <a href={resume} download>
              <span type="button" className="btn btn--outline">
                Resume
              </span>
            </a>
          )}

          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label="github"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label="linkedin"
                  className="link link--icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
        </div>
      </div>
      <div className="div__img">
        <BackgroundPattern />
      </div>
    </section>
  );
};

export default About;
