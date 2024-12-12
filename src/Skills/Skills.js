import React from 'react';
import './Skills.css';
import Skills from './Skills.json';
import {Heading, SkillButton, SkillHeading} from "../MyComponents";

function Skill() {
    const mySkills = Skills;
    const skill_heading = Object.keys(mySkills);

    return (
        <div className='Skills-contents'>
            <Heading text="Skills"/>
            {skill_heading.map((key, index) => (<div key={index}>
                    <SkillHeading key={index} text={key}/>
                    {mySkills[key].map((skill, subindex) => (
                        <SkillButton key={subindex} text={skill}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Skill;