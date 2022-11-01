import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function header() {
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <Link class="navbar-brand" to="/">Britania Moreno</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <Link class="nav-item nav-link active" to= "/">Biography<span class="sr-only">(current)</span></Link>
            <Link class="nav-item nav-link" to= "/contact">Contact</Link>
            <Link class="nav-item nav-link" to= "/projects">Projects</Link>
        </div>
    </div>
    </nav>
    );
}

export default header;