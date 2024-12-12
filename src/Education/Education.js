import React from 'react';
    import './Education.css';
import {EducationCard, Heading} from "../MyComponents";

function Education() {
    return (
        <div className='Education-content'>
            <Heading text="Education"/>
            <div className='education'>
                <EducationCard imgsrc="../assets/pace_logo.png"
                               college="Pace University, New York"
                               degree="Master of Science in Human Centered Technology Design"
                />
                <EducationCard imgsrc="../assets/viaa_logo.png"
                               college="Viva Institute of Applied Art, Mumbai, MH, India"
                               degree="Bachelor of Fine Art in Applied Art "
                />
            </div>
        </div>
    );
}

export default Education;