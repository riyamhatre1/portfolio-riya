import React from 'react';
import './MyComponents.css';

export function Heading ({text}) {
  return (
    <p className='heading'><b>{text}</b></p>
  )
}
export function SkillHeading ({text}) {
  return (
    <p className='skill-heading'><b>{text}</b></p>
  )
}

export function SkillButton({ text }) {
    return (
      <button className="skill-button">
        {text}
      </button>
    );
  }

export function EducationCard({imgsrc, college, degree}) {
  return (
    <div className='education_container'>
      <div className='education_container_img'>
        <img src={imgsrc} alt={imgsrc} />
      </div>
      <p style={{fontSize: "20px", height: "50px"}}><b>{college}</b></p>
      <p style={{fontSize: "16px"}}>{degree}</p>
    </div>
  )
}


export function ProjectCard({ project }) {
  const { name, img_url, pdf_url } = project;

  return (
      <div className="project_card">
          <h3>{name}</h3>
          {img_url && (
              <img
                  src={img_url}
                  alt={name}
                  className="project_image"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
          )}
          <a href={pdf_url} target="_blank" rel="noopener noreferrer">View Project Details</a>
      </div>
  );
}