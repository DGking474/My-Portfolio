import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./index.css";

const siteProps = {
  name: "Divyansh Patel",
  title: "Web Developer",
  email: "divyanshgopal474@gmail.com",
  gitHub: "DGking474",
  instagram: "_itz_dg__6",
  linkedIn: "divyansh-patel-829557239",
  medium: "",
  // twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
