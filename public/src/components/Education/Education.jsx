import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
       
        <span className={classes.head}>MY EDUCATION</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation at Aacharya Institute of Technology, Bangalore <span>2018-2022</span>
                      </h2>
                      <p>
                        I completed my undergraduation in ISE (Information Science and Engineering)
                        from <a href='https://www.acharya.ac.in/'>AIT</a> with overall 7.6 CGPA.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2016-2018</span>
                      </h2>
                      <p>
                        I have completed my higher education from SCPUC with major subject as
                        Computer Science with 76% merit in board.{' '}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
