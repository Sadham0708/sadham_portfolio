import React from 'react';
import './whoIAm.css';

const WhoIAm = () => {
  return (
    <section id="whoIAm">
      <div className="whoIAmContent">
        <h2>Who I Am</h2>
        <p>
          I am a passionate <span className="highlightwrd">web developer</span> with a strong foundation in front-end technologies like HTML, CSS, and JavaScript, and I’m continuously learning to expand my skillset.  
          My journey started with curiosity about how websites work, and now, I create interactive and visually appealing web applications.  
          I thrive on solving complex problems and transforming ideas into digital solutions.
        </p>
        <p>
          Beyond coding, I value creativity, attention to detail, and a commitment to delivering exceptional user experiences.  
          My goal is to craft meaningful projects that not only meet requirements but also exceed expectations.<br/>
          <span className="highlight">
            It feels almost godlike—a sense of creation where the application or website does exactly what you instruct it to do through code.
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhoIAm;
