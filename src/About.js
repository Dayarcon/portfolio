import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="about-img" data-aos="zoom-in-down">
      <img src="rahul_1(2).jpeg" alt="Rahul Kushwaha" />
    </div>
    <div className="about-text" data-aos="zoom-in-up">
      <h2>I am Web <span>Developer</span></h2>
      <div className="expe">
        <p className="exp">Experience: <span>Fresher</span></p>
        <p className="exp">Skills: <span>HTML, CSS, Javascript, Github, Aws Trained</span></p>
        <p className="exp">Address: <span>New Delhi, India</span></p>
        <p className="exp">Email: <span>rahul.kushwaha9140@gmail.com</span></p>
        <p className="exp">Linkedin:<a herf='www.linkedin.com/in/rahul-kushwaha-796282213'><span>rahul-kushwaha-796282213</span></a></p>
        <p className="exp">Phone: <span>+91 8882173537</span></p>
        <p className="exp">Freelancer: <span>Available</span></p>
      </div>
      <a href="#" className="btn">View Projects</a>
    </div>
  </section>
);

export default About;
