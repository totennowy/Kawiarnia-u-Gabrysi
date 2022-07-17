import React from "react";
import img from "../../assets/coffee-g2cb39cea5_1920.jpg";

const About = () => {
  return (
    <section className="about container" id="about">
      <div className="about__img">
        <img src={img} alt="coffee on the book" />
      </div>
      <div className="about__text">
        <h2>O nas</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipse
          et dolore magna aliquyam erat, accusamearebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
        </p>
      </div>
    </section>
  );
};

export default About;
