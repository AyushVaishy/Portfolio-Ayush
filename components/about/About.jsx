// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./about.css";
import AboutImg from "../../src/assets/my pic.jpg";
import Resume from "../../src/assets/Ayush_Vaishy_Resume.pdf"
// CV Import
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Intoduction</span>

        <div className="about__container container grid">
          <img src={AboutImg} alt="" className="about__img" />

          <div className="about__data">
            <Info />

            <p className="about__description">Frontend Developer, I create web pages with UI / UX user interface, I create web pages with the skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website vision to life.</p>

            <a href={Resume} download className="button button--flex">
            Download Resume
          </a>
          </div>
        </div>
    </section>
  )
}

export default About