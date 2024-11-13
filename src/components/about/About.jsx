import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>Hi! I’m <b>Kush Jindal</b>, your friendly neighborhood code ninja with a flair for all things web! When I'm not transforming caffeine into code, I’m crafting apps that are fast, functional, and fun. From making eCommerce sites load like a dream to boosting conversion rates by 20%, I’m all about creating digital experiences that users <b>actually</b> enjoy.

<p className={classes.br}>My tech stack includes some of my favorite sidekicks—ReactJS, Next.js, JavaScript, and GraphQL. Together, we’ve tackled everything from headless architecture transformations to automating workflows that make developers’ lives easier. Think of me as your go-to for quirky, smooth, and efficient web magic.</p>

<p className={classes.br}>Beyond the code, I’m obsessed with optimizing and experimenting—whether it’s ramping up accessibility, turning up the SEO, or getting creative with design tools like Figma and Adobe. So, if you’re ready to add some sparkle to your next project, dive into my portfolio and let’s get building something unforgettable! ✨</p>
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
