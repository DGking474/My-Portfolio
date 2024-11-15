import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a Web Developer student studying at LDRP of Institute and Research University. I enjoy creating unique and simplistic Website in creative ways.";
const skillsList = [
  "Web development",
  "User experience",
  "Enclusive design",
  "Leadership",
  "Attractive websites",
  "Better ability to understand",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web developer experience I continually look for new and better ways to make tech accessible by all.";

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
