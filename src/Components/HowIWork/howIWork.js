import React from 'react';
import './howIWork.css';
import html from '../../assets/html_48.png';
import css from '../../assets/css_48.png';
import js from '../../assets/javascript_48.png';
import react from '../../assets/react.png';
import mongodb from '../../assets/mongodb.png';
import php from '../../assets/php_48.png';
import mysql from '../../assets/mysql.png';
import gitHub from '../../assets/github_48.png';

const HowIWork = () => {
  return (
    <section id="skills">
      <h2 className="skillTitle">How I Work</h2>
      <p className="skillDesc">
        Constantly learning and building projects, I specialize in crafting user-friendly and functional web solutions. With a passion for web design and development, I focus on creating responsive, interactive, and visually appealing websites while continuously improving my skills.
      </p>
      <div className="skillBars">
        {[
          { img: html, title: "Structuring the Web", desc: "Structured web pages effectively using clean and semantic HTML." },
          { img: css, title: "Designing with Style", desc: "Created responsive designs and enhanced user experience with CSS." },
          { img: js, title: "Bringing Web Pages to Life", desc: "Built dynamic and interactive features with JavaScript." },
          { img: react, title: "Building Dynamic Interfaces", desc: "Explored React for creating reusable components and dynamic web apps." },
          { img: mysql, title: "Organizing Relational Data", desc: "Managed relational data in small projects using MySQL." },
          { img: mongodb, title: "Managing NoSQL Databases", desc: "Used MongoDB for handling data in modern web applications." },
          { img: php, title: "Powering the Backend", desc: "Built simple backends and connected databases to web applications with PHP." },
          { img: gitHub, title: "Collaborating on GitHub", desc: "Managed version control and collaborated on open-source projects using GitHub." },
        ].map((skill, index) => (
          <div className="skillBar" key={index}>
            <img src={skill.img} alt={skill.title} className="skillBarImg" />
            <div className="skillBarText">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowIWork;
