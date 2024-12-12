import React from 'react';
import './About.css';

function About() {
    return (
        <div id="about_me" className='My-intro'>
            <div>
                <h2>Hi, I'm Riya</h2>
                <h3>Nice to meet you.</h3>
                <p className='intro'>As a passionate UI designer, I specialize in creating intuitive and visually compelling interfaces that enhance user experiences. With a keen eye for detail and a user-centered approach, I strive to transform complex ideas into seamless designs that prioritize accessibility, functionality, and aesthetics.</p>
                <p className='intro'>My goal is to craft solutions that not only meet user needs but also align with business objectives, ensuring every interaction feels natural and engaging.</p>
                <p className='intro'>Thank you for visiting!</p>
            </div>
            <div className='image-container'>
                <img src={'./assets/profile_photo.jpeg'} alt='profile_photo'/>
            </div>
        </div>
    );
}

export default About;