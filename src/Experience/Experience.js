import React from 'react';
import './Experience.css';
import {Heading} from "../MyComponents";

function Experience() {
    return (
        <div className='Experience-content'>
            <Heading text="Experience"/>
            <div className='experience'>
                <div className='job'>
                    <h3>Spotlight Digital, Mumbai, India</h3>
                    <p> Graphic Design Inter Sept 2022 Apr 2023</p>
                </div>
                <div className='job'>
                    <h3>Veridicus, Mumbai, India</h3>
                    <p> Graphic Design Inter Aug 2021 May 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;