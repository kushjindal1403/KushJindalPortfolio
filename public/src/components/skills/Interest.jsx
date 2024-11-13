import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>WHAT I DO?</span>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>Front End Development</h3>
          <p>
           I specialize in building responsive, high-performance websites using <b>ReactJS</b>, <b>Next.js</b>, <b>JavaScript</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>. With certifications across multiple platforms, I focus on creating seamless, user-friendly web applications that deliver exceptional performance and meet both user and business needs.
          </p>
        </div>
        {/* </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          > */}
        <div className={classes.app}>
          <h3>Full Stack Development</h3>
          <p>
            I specialize in building full-stack web applications using <b>ReactJS</b>, <b>Next.js</b>, <b>Node.js</b>, <b>GraphQL</b>, and <b>Java</b>. With experience in both frontend and backend development, I create seamless, high-performance applications that deliver excellent user experiences. My expertise spans from designing responsive UIs to developing robust backend APIs, ensuring end-to-end solutions that meet both technical and business requirements.
          </p>
        </div>
    
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            <b>Content Management & Data Visualization:</b> PHP/WordPress, Contentful, 
Chart.js<br/>
<b>Testing & Programming:</b> Jest Unit Testing, Storybook, C/C++, Unit Testing, 
Integration Testing <br/>
<b>Design Tools:</b> Figma, Adobe, Canva <br/>
<b>Project Management:</b> JIRA, Monday, Azure Boards, Agile, Scrum <br/>
<b>Operating Systems:</b> Windows, macOS, Ubuntu <br/>
<b>DevOps Tools:</b> GitHub, GitLab, Netlify, Render, ESLint, Husky, Prettier, 
Jenkins, Docker <br/>
<b>Others:</b> Amazon AWS, AI/ML, Google Search, RESTful APIs, Microservices 
Architecture
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
}
