import React from 'react';
import { Col, Row } from 'react-bootstrap';
import profilePicture from '../../assets/profilepicture.png';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/js.png';
import react from '../../assets/icons/react.png';
import sass from '../../assets/icons/sass.png';
import wordpress from '../../assets/icons/wordpress.png';
import fb from '../../assets/icons/fb.png';
import ig from '../../assets/icons/ig.png';
import gh from '../../assets/icons/gh.png';
import li from '../../assets/icons/li.png';
import fbc from '../../assets/icons/fbc.png';
import igc from '../../assets/icons/igc.png';
import ghc from '../../assets/icons/ghc.png';
import lic from '../../assets/icons/lic.png';
import freelance from '../../assets/freelance.gif';
import aboutme from '../../assets/svg/about.svg';
import bestprice from '../../assets/svg/bestprice.svg';
import ontime from '../../assets/svg/ontime.svg';
import free from '../../assets/svg/free.svg';
import Projects from '../UIComponents/home/Projects';
import ExperienceData from '../../Data/ExperienceData';
import { CgWebsite } from 'react-icons/cg';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { ImGithub } from 'react-icons/im';
import { GrMail, GrLinkedin } from 'react-icons/gr';

const Home = () => {
  return (
    <div className='home-page'>
      <section className='landing-section'>
        <div className='contents'>
          <Row>
            <Col md={6}>
              <div className='img-container'>
                <div className='first-circle'>
                  <div className='second-circle'>
                    <img
                      src={profilePicture}
                      alt='ashutosh bisoyi frontend web developer'
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className='content-container'>
                <div className='content'>
                  <header>
                    <h4>Hey There! 👋 I am</h4>
                    <h1>Ashutosh Bisoyi</h1>
                    <p>
                      I am a <span>front-end</span> web developer, <br />
                      and I develope your <span>Idea</span> in to
                      <span> Reality</span>
                    </p>
                    <div className='logo-container'>
                      <img src={html} alt='html' />
                      <img src={css} alt='html' />
                      <img src={js} alt='html' />
                      <img src={react} alt='html' />
                      <img src={sass} alt='html' />
                      <img src={wordpress} alt='html' />
                    </div>
                  </header>
                  <div className='btn-group'>
                    <button className='btn-p'>Hire Me</button>
                    <button className='btn-o'>Contact Me</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ul className='sm-bar'>
          <li>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={gh} alt='ashutoshbisoyi-facebook' />
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={li} alt='ashutoshbisoyi-facebook' />
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={ig} alt='ashutoshbisoyi-facebook' />
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={fb} alt='ashutoshbisoyi-facebook' />
            </a>
          </li>
        </ul>
        <div className='box-container'>
          <div className='box'></div>
        </div>
      </section>
      <section className='about'>
        <div className='container'>
          <Row>
            <Col md={7}>
              <div className='content-div'>
                <div className='content'>
                  <h2>About Me</h2>
                  <h5>Brief you need to know</h5>
                  <p>
                    I am Ashutosh from Odisha, India. I am a Front End developer
                    with a year experience in building websites and web
                    applications. As a Front End Developer, My role is to write
                    and style the front-end components that meet the
                    requirements of mocks and fulfill the user stories. With
                    this, I am also experienced in making interactive web
                    applications and API integrations. Major technologies I use:
                    React JavaScript, SASS.
                  </p>
                  <p>
                    Besides developing web applications, I am quite passionate
                    about dancing, anchoring, and acting. Want to know more? We
                    are just a message away.
                  </p>
                  <ul className='sm-bar'>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <img src={ghc} alt='ashutoshbisoyi-facebook' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <img src={lic} alt='ashutoshbisoyi-facebook' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <img src={igc} alt='ashutoshbisoyi-facebook' />
                      </a>
                    </li>
                    <li>
                      <a href='#' target='_blank' rel='noreferrer'>
                        <img src={fbc} alt='ashutoshbisoyi-facebook' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className='img-container'>
                <img
                  src={aboutme}
                  alt='about ashutosh bisoyi'
                  className='img-fluid'
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className='projects'>
        <header>
          <h2>My Projects</h2>
          <p>Result of the sleepless nights</p>
        </header>
        <Projects />
      </section>
      <section className='experience'>
        <header>
          <h2>My Experience</h2>
          <hr />
        </header>
        <div className='history-tl-container container'>
          <ul classname='tl'>
            {ExperienceData.map((value, index) => {
              return (
                <li
                  class='tl-item'
                  ng-repeat='item in retailer_history'
                  key={index}
                >
                  <div class='timestamp pc'>
                    {value.startedOn}
                    <br /> {value.duration}
                  </div>
                  <h4 class='item-title'>{value.companyName}</h4>
                  <p class='item-subtitle'>{value.role}</p>
                  <p class='timestamp-mob'>
                    {value.startedOn}
                    <br /> {value.duration}
                  </p>
                  <p class='item-detail'>{value.desc}</p>
                  <div className='btn-group'>
                    <button className='btn-o'>
                      Organisation Website <CgWebsite />
                    </button>
                    <button className='btn-p'>
                      Certificate <AiFillSafetyCertificate />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className='connect'>
        <div className='container'>
          <h2>Intrested in collaborating ?</h2>
          <p>I’m always open to discuss new ideas evolving around your head</p>
          <div className='btn-group'>
            <button>
              Mail Me <GrMail />
            </button>
            <button>
              LinkedIn <GrLinkedin />
            </button>
          </div>
        </div>
      </section>
      <section className='freelancing' id=''>
        <div class='container'>
          <Row>
            <Col md={6}>
              <img
                src={freelance}
                alt='ashtosh bisoyi freelancing'
                className='img-fluid'
              />
            </Col>
            <Col md={6} className='content-container'>
              <div className='content'>
                <header>
                  <h2>
                    I'm also doing <span>Freelacing</span>
                  </h2>
                  <p>Let's build your business</p>
                </header>
                <Row className='card-container'>
                  <Col md={4}>
                    <div className='card'>
                      <img
                        src={ontime}
                        alt='on time freelancing'
                        className='img-fluid'
                      />
                      <h5>On Time</h5>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='card'>
                      <img
                        src={bestprice}
                        alt='best price freelancing'
                        className='img-fluid'
                      />
                      <h5>Best Price</h5>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='card'>
                      <img
                        src={free}
                        alt='free logo for your business'
                        className='img-fluid'
                      />
                      <h5>Free Logo</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <div className='footer'>
        <p>
          <ImGithub className='mr-1' />
          ashutoshbisoyi
        </p>
      </div>
    </div>
  );
};

export default Home;
