import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function footer(){
    return(
        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link class="navbar-item" href="https://github.com/BriMoreno" target="_blank">GitHub</Link>
    
            <Link class="navbar-item" href="https://www.linkedin.com/in/bree-m-1632a923a/" target="_blank">LinkedIn</Link>
          
            <div class="navbar-item has-dropdown is-hoverable">
              <Link class="navbar-link">Contact</Link>
    
                  <div class="navbar-dropdown">
                    <Link class="navbar-item" href="https://tinyurl.com/2s49uma2" target="_blank">Email</Link>
                    <Link class="navbar-item">Jobs</Link>
                  </div>    
            </div>
          </div>
        </div>
        </nav>
    );
}

export default footer;