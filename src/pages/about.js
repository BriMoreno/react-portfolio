import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function about() {
    return (
      <div>
        <h2>About Me</h2>
        <h5>
          I'm Britania Moreno from Washington. I am an Mexican immigrant 
        </h5>
        <hr></hr>
        <h4>Languages:</h4>
        <p> English, HTML, CSS, JavaScript, JQuery, JSX, React, SQL,</p>
        <h4>Libraries: </h4>
        <p>
          React, Sequelize, Materialize, Bootstrap, MondoDB, Mongoose, Handlebars,
          inquirer, PWAs, APIs, Apollo, Graph QL, etc.
        </p>
        <h4>Education:</h4>
        <p>
          University of Colorado @ Boulder - BA in History & DU Coding Bootcamp
          (current)
        </p>
      </div>
    );
  }