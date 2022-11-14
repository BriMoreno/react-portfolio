import React from 'react';
import noteTaker from "../images/planner.jpg";
import password from "../images/password.png";
import planner from "../images/planner.jpg";
import logo from "../images/logo.png";
import dog from "../images/dog.jpg";
import ant from "../images/ant-cartoon-one.jpg";
import clouds from "../images/clouds.jpg";

export default function Project() {
    const projects = [
        {
            name: "Weather App",
            imgsrc: clouds,
            link: "https://brimoreno.github.io/weather-app/",
            repo: "https://github.com/BriMoreno/weather-app"
        },
        {
            name: "Note Taker",
            imgsrc: noteTaker,
            link: "https://hidden-inlet-57042.herokuapp.com/",
            repo: "https://github.com/BriMoreno/note-taker"
        },
        {
            name: "Password Generator",
            imgsrc: password,
            link: "https://brimoreno.github.io/PW-Creator/",
            repo: "https://github.com/BriMoreno/PW-Creator"
        },
        {
            name: "Work Planner",
            imgsrc: planner,
            link: "https://brimoreno.github.io/work-planner/",
            repo: "https://github.com/BriMoreno/work-planner"
        },
        {
            name: "DevMound",
            imgsrc: ant,
            link: "https://github.com/FrankFrackle/devMound",
            repo: "https://github.com/FrankFrackle/devMound"
        },
        {
            name: "Dog Fact Finder",
            imgsrc: dog,
            link: "https://cmullan602.github.io/dog-fact-finder/",
            repo: "https://github.com/cmullan602/dog-fact-finder"
        },
        {
            name: "Milestone",
            imgsrc: logo,
            link: "https://afternoon-plateau-28637.herokuapp.com/login",
            repo: "https://github.com/Kingnick253/MILESTONE"
        },

    ];


    return (
        <div>
            <h2>My Work</h2>
            <div id="gallery">
                {projects.map((project) => (
                    <div key={project.name}>
                        <div className="card" id="project"
                            style={{ backgroundImage: `url(${project.imgsrc})` }}>
                            <a href={project.link}>{project.name}</a>
                            <a href={project.repo}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}