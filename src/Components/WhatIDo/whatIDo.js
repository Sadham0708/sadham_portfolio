import React, { useState } from 'react';
import ecommerce from '../../assets/ecommerce_website.webp';
import portfolio from '../../assets/portfolio.jpg';
import weather from '../../assets/weather-1.png';
import todolist from '../../assets/todolist-1.jpg';
import memorygame from '../../assets/memoryGame.jpeg';
import './whatIDo.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully functional e-commerce platform with product catalogs, a shopping cart, and a seamless checkout process.",
      image: ecommerce,
      link: "https://sadham0708.github.io/-INFINITY-E-commerce-website-/",
    },
    {
      title: "To-Do List App",
      description: "A task manager to help users organize, update, and track their daily tasks effortlessly.",
      image: todolist,
      link: "https://sadham0708.github.io/Todo-List/",
    },
    {
      title: "Memory Game",
      description: "A classic memory game where users match pairs of cards to win.",
      image: memorygame,
      link: "https://sadham0708.github.io/Memory_Game/",
    },
    {
      title: "Weather Forecasting",
      description: "An app to search weather conditions for any city using live API data.",
      image: weather,
      link: "https://sadham0708.github.io/weather_forecasting/",
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website showcasing my skills, projects, and professional journey as a web developer.",
      image: portfolio,
      link: "https://sadham0708.github.io/portfolio/",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="projects">
      <h2>What I Do</h2>
      <p className="projectDesc">
        Here are some of the projects I’ve created to showcase my skills in web development. Explore the slider to learn more about each project.
      </p>

      <div className="projectsSlider">
        <button className="sliderBtn prev" onClick={prevSlide}>&#10094;</button>
        <div className="projectCard">
          <img src={projects[currentIndex].image} alt={projects[currentIndex].title} />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].description}</p>
          <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <button className="sliderBtn next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Projects;
