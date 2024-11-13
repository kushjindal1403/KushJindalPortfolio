import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import bitcoin from '../images/bitcoin.jpg'
import invoice from '../images/invoice-management-monitor.jpg';
import rise from '../images/Rise.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import profilee from '../images/profilee.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import launcher from '../images/launcher.png';
import github from '../images/github.png';
import Menu from '../images/Menu.webp';
import todo from '../images/TODO.png';
import frontenddev from '../images/frontenddev.png';
import solanaaid from '../images/solanaaid.png';
import jumpstart from '../images/jumpstart.png';

// Web projects
const webItem = [
  {
    link: 'https://risecannabis.com/',
    title: 'Rise Cannabis',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    image: rise,
    color: '#E5E483',
  },
  {
    link: 'https://github.com/kushjindal14/Bitcoin',
    title: 'Machine Learning - BitCoin Price Prediction',
    techStack:
      'Technology used: Machine Learning, python',
    desc: 'This web application predicts the price of the bitcoin for next 80 days from the dataset of previous 30 days. This project is implements on machine learning concepts and algorithm',
    image: bitcoin,
    color: '#D2E0FB'
  },
  {
    link: 'https://github.com/kushjindal14/Invoice-management-system',
    title: 'Full stack Project - Invoice Management System',
    techStack: 'Tech Stack: HTML5, CSS, PHP, SQL',
    desc: 'an Web Application for managing Invoices',
    image: invoice,
    color: '#0FFFFF',
  },
  {
    link: 'https://github.com/kushjindal14/KN-launcher',
    title: 'Mobile Application - KN Launcher',
    techStack: 'Tech Stack- Java, Andriod',
    desc: 'This Java based Mobile application provides best and easy experience to user of any age, It is a launcher for home provides easy travel through apps, amazing widgets and themes.',
    image: launcher,
    color: '#d5ebda',
  },
  {
    link: 'https://github.com/kushjindal14/kn-media',
    title: 'C++ Application - KN Media',
    techStack: 'Tech Stack- C++',
    desc: 'C++ terminal social media application',
    image: solanaaid,
    color: '#f3e4f1',
  },
  {
    link: 'https://github.com/kushjindal14/TODO-REACT-APP',
    title: 'TO-DO List App',
    techStack: 'Tech Stack: React, Typescript, MERN',
    desc: 'It is a simple TODO app. This is 100% typescript.',
    image: todo,
    color: '#FEA1A1',
  },
  {
    link: 'https://github.com/kushjindal14/Menu-app',
    title: 'Menu Application',
    techStack: 'Tech Stack: React JS, Tailwind CSS, Node JS, MongoDB',
    desc: '',
    image: Menu,
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
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>MY PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}
