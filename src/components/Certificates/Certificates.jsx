import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Certificates.module.css';
import github from '../images/github.png';
import AWS from '../images/AWS.jpeg';
import udemy from '../images/Udemy.png';
import robotics from '../images/robotics.png';
import google from '../images/google.png';

// Web projects
const webItem = [
  {
    title: 'Getting Started with AWS - Amazon',
    image: AWS,
    color: '#E5E483',
  },
  {
    
    title: 'Robotics Process Automation - Automation Anywhere',
    image: robotics,
    color: '#D2E0FB'
  },
  {
   title: 'Complete Web Development - Udemy',
    image: udemy,
    color: '#0FFFFF',
  },
  {
    title: 'Java Programming - Udemy',
    image: udemy,
    color: '#d5ebda',
  },
  {
    title: 'Python Programming - Udemy',
    image: udemy,
    color: '#f3e4f1',
  },
  {
    title: 'Digital Marketing - Udemy',
    image: udemy,
    color: '#FEA1A1',
  },
  {
    title: 'Google Technical Support - Google',
    image: google,
    color: '#C1A4AA',
  },
  
  {
    title: 'Graphics Designing - Udemy',
    image: udemy,
    color: '#C1A4AA',
  },
];


export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='certificates'>
      <span className={classes.head}>MY CERTIFICATIONS</span>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}
