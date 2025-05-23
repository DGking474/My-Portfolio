import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I’m a passionate Full-Stack Developer eager to create dynamic, user-friendly web applications.";
const skillsList = [
  "Web Developer",
  "ReactJS Developer",
  "Make Responsive Design",
  "Team Lead",
  "Git and Github",
  "Deep Learner",
];

const detailOrQuote =
  "Work Experience at the Special Character at Ahmedabad, India as Developer - Intern role.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
