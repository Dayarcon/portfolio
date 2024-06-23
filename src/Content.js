import React from 'react';

const Content = () => (
  <section className="content" id="home">
    <div className="main-content" data-aos="fade-in">
      <h4>Welcome to my Portfolio!</h4>
      <h1>I am <span>Rahul Kushwaha</span></h1>
      <p>a passionate web developer with a interest in creating user friendly and visually appealing website. With a solid background in front end and back end development, I bring creativity and technical expert in every project.</p>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100010980789218"><i className="ri-facebook-line"></i></a>
        <a href="https://www.instagram.com/_rahul.kushwaha_/"><i className="ri-instagram-line"></i></a>
        <a href="https://twitter.com/livespof"><i className="ri-twitter-x-line"></i></a>
        <a href="https://github.com/Dayarcon"><i className="ri-github-line"></i></a>
      </div>
      <div className="main-btn">
        <a href="#" className="btn">Hire me</a>
        <a href="#" className="btn btn2">Download Cv</a>
      </div>
    </div>
  </section>
);

export default Content;
