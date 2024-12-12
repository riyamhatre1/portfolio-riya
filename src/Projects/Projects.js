import React from 'react';
import './Project.css';
import Projects from './Projects.json';
import {Heading, ProjectCard} from "../MyComponents";

function Project() {
    return (
        <div id="projects" className='project-contents'>
            <Heading text="Projects" />
            <div className="project-list">
                {Projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Project;