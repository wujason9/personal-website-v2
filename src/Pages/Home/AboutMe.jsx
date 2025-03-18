export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a passionate software developer with a strong foundation in computer science, 
          machine learning, and software engineering. With a degree from the University of 
          Toronto and hands-on experience at Moneris, I have built scalable web applications using 
          React.js and Spring Boot, optimized backend systems, and improved performance through efficient database integration.
          </p>
          <p className="hero--section-description">
          My expertise extends to deep learning and machine learning, where I have developed models for 
          speech emotion analysis and image classification, leveraging CNNs, RNNs, and advanced data 
          processing techniques. I thrive in collaborative, Agile-driven environments and am always eager 
          to tackle complex problems with innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
