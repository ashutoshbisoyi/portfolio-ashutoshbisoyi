import React, { useState } from 'react';
import filter from '../../../assets/icons/filter.png';
import react from '../../../assets/icons/react.png';
import sass from '../../../assets/icons/sass.png';
import html from '../../../assets/icons/html.png';
import css from '../../../assets/icons/css.png';
import js from '../../../assets/icons/js.png';
import api from '../../../assets/icons/api.png';
import { Col, Row } from 'react-bootstrap';
import ProjectData from '../../../Data/ProjectData';
import { MdFeedback } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';
const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('top');
  const filterAllProjects = () => {
    setSearchTerm('top');
  };
  const filterReactProjects = () => {
    setSearchTerm('react');
  };
  const filterHtmlProjects = () => {
    setSearchTerm('html');
  };
  return (
    <div className='container projects-container'>
      <div className='top-info'>
        <button className='filter-btn'>
          Filter
          <img src={filter} alt='react' className='ml-2' />
        </button>
        <h3>
          <span>Showing</span> 6 / {ProjectData.length}
        </h3>
      </div>
      <div className='options'>
        <button
          className={searchTerm === 'top' ? 'active' : ''}
          onClick={filterAllProjects}
        >
          <img src={react} alt='react' /> All
        </button>
        <button
          className={searchTerm === 'react' ? 'active' : ''}
          onClick={filterReactProjects}
        >
          <img src={react} alt='react' /> React
        </button>
        <button
          className={searchTerm === 'react' ? 'active' : ''}
          onClick={filterReactProjects}
        >
          <img src={sass} alt='react' />
          Sass
        </button>
        <button
          className={searchTerm === 'html' ? 'active' : ''}
          onClick={filterHtmlProjects}
        >
          <img src={html} alt='html' />
          HTML5
        </button>
        <button
          className={searchTerm === 'html' ? 'active' : ''}
          onClick={filterHtmlProjects}
        >
          <img src={css} alt='css' />
          CSS3
        </button>
        <button
          className={searchTerm === 'html' ? 'active' : ''}
          onClick={filterHtmlProjects}
        >
          <img src={js} alt='js' />
          JS
        </button>
        <button
          className={searchTerm === 'react' ? 'active' : ''}
          onClick={filterReactProjects}
        >
          <img src={api} alt='react' />
          API
        </button>
      </div>
      <div className='projects-wrapper'>
        <Row>
          {ProjectData.filter((value) => value.tag.includes(searchTerm))
            .slice(0, 6)
            .map((value, index) => {
              return (
                <Col md={4} key={index}>
                  <a href={value.link} target='_blank' rel='noreferrer'>
                    <div className='project-card'>
                      <div
                        className='space'
                        style={{ backgroundImage: `url(${value.image})` }}
                      >
                        <div className='overlay'>
                          <header>
                            <h4>{value.name}</h4>
                            <p>{value.headline}</p>
                            <button>Visit Site</button>
                          </header>
                        </div>
                      </div>
                    </div>
                  </a>
                </Col>
              );
            })}
        </Row>
      </div>
      <div className='btn-container'>
        <button className='btn-ow'>
          Give Feedback <MdFeedback />
        </button>
        <button className='btn-s'>
          More Projects <CgDetailsMore />
        </button>
      </div>
    </div>
  );
};

export default Projects;
