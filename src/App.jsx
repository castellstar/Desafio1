import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('skills');

  const projects = [
    {
      name: "SalveDrew",
      image: "images/logo.png",
      link: "https://ephemeral-longma-a5672b.netlify.app",
    },
  ];

  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript & TypeScript", level: 85 },
    { name: "React & Native", level: 80 },
  ];

  const handleProjectClick = (project) => {
    window.open(project.link, '_blank');
  };

  const handleIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Thiago Castelão Silva</h1>
        <h2>Desenvolvedor Front-End</h2>
        <p>22 Anos, Cursando Pós em ADS e Todo dia estudando JS :D</p>
        
        <div className="icons">
          <GithubIcon
            className="icon"
            size={32}
            onClick={() => handleIconClick('https://github.com/castellstar')}
          />
          <LinkedinIcon
            className="icon"
            size={32}
            onClick={() => handleIconClick('https://www.linkedin.com/in/thiago-castelão-silva-659871245/')}
          />
          <Mail
            className="icon"
            size={32}
            onClick={() => handleIconClick('https://mail.google.com/mail/u/1/#inbox')}
          />
        </div>

        <div className="tabs">
          <button
            onClick={() => setActiveTab('skills')}
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          >
            Hard Skills
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          >
            Projetos
          </button>
        </div>

        {activeTab === 'skills' && (
          <div className="skills-section">
            <h3>Hard Skills</h3>
            {skills.map(skill => (
              <div key={skill.name} className="skill">
                <span>{skill.name}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="projects-section">
            <h3>Projetos Recentes</h3>
            {projects.map(project => (
              <div key={project.name} className="project" onClick={() => handleProjectClick(project)}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: '150px', cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="user-image">
        <img
          src="images/minhafoto.jpg"
          alt="Foto de Thiago"
          className="profile-pic"
        />
      
        <div className="instagram-link" style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="https://www.instagram.com/castellstar/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.pinimg.com/originals/be/2c/18/be2c18ba35868d34a6b61da668e0772f.jpg"
              alt="Instagram"
              className="instagram-icon"
              style={{ display: 'block', margin: '0 auto', width: '24px', height: '24px' }}
            />
          </a>
          <span style={{ color: 'yellow', fontFamily: 'Arial, sans-serif', display: 'block', textAlign: 'center' }}>
            Saiba mais sobre mim
          </span>
        </div>
      </div>
    </div>
  );
}
