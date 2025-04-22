import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "Paradise Pulse - Resort Management System",
    description:
      "Designed an interactive front-end for booking rooms, guest check-ins, and billing. Implemented automated invoicing and real-time status updates using dynamic DOM manipulation.",
    url: "https://github.com/DGking474/Paradise-Pulse--Resort-Management-System-",
  },
  {
    title: "Job Recruitment System",
    description:
      "Developed a web portal for job matching with resume builder, job tracking, and AI suggestions. Focused on user experience design and responsive layouts.",
    url: "https://github.com/DGking474/Job-Recruitment-System_Frontend",
  },
  {
    title: "VegBazaar",
    description:
      "Built a full-stack grocery web app with CRUD operations, cart management, and product listing. Integrated RESTful APIs to fetch and manage data dynamically. Designed responsive UI using Tailwind CSS, enhancing mobile and desktop usability",
    url: "https://github.com/DGking474/VegBazaar",
  },
  {
    title: "My Shop - Personal Project",
    description:
      "Developed a product management system with authentication, role-based access, and admin dashboard. Used React Hooks, Axios, and Context API for seamless state and data flow.",
    url: "https://github.com/DGking474/myshop-strapi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
