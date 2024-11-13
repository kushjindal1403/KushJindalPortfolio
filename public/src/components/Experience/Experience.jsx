import React, { Component } from 'react';
import classes from './Experience.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdWork } from 'react-icons/md';

class Experience extends Component {
  render() {
    return (
      <div className={classes.box} id='experience'>
       
        <span className={classes.head}>MY CAREER</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>JANUARY(2024)-OCTOBER(2024)</span>
                      </h2>
                      <p>
                        I worked as <b>Software Developer Engineer</b> at{' '}
                        <a target='_blank' href='https://photon.com/'>
                          <b>Photon Interactives</b>
                        </a>{' '}
                        <i>
                          (Photon, a global leader in AI and digital solutions, helps clients accelerate AI adoption and embrace Digital HyperExpansion)
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                    </div>
                  </article>
                    <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>OCTOBER(2022)-DECEMBER(2023)</span>
                      </h2>
                      <p>
                        I worked as <b>Front End Engineer</b> at{' '}
                        <a target='_blank' href='https://grsshoppers.com/'>
                          <b>Grsshoppers by LeavesTech Private Limited</b>
                        </a>{' '}
                        <i>
                          (design cutting edge technology solutions to fulfill business priorities in complex industries like Cannabis retail and e-commerce platforms)
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                    </div>
                  </article>
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <p>Completed one month Internship in Full Stack Web Development with DigiAdd Technologies.</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Experience;
