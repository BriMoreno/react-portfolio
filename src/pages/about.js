import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
    return (
      <div>
        <h2>About Me</h2>
        <h5>
          I'm Britania Moreno from Washington.
        </h5>
        <hr></hr>
        <h4>Languages:</h4>
        <p> English, Spanish, HTML, CSS, JavaScript, JQuery, React, SQL, Python</p>
        <h4>Libraries: </h4>
        <p>
          React, Sequelize, Bootstrap, MondoDB, Mongoose, Handlebars,
          inquirer, PWAs, APIs, Apollo, Graph QL, etc.
        </p>
      </div>
    );
  }