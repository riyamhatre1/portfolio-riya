import React from 'react';
import './Header.css';
import {handleEvent} from "../App";

function Header() {

    return (
        <div className="App-header">
            <div className='Header-column'>
                <h2>&lt;/&gt;</h2>
                <ul className="Header-links">
                    <li onClick={() => handleEvent("about_me")}>About me</li>
                    <li onClick={() => handleEvent("projects")}>Projects</li>
                    <li><a href={"./assets/Resume_MhatreRiya.pdf"} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li onClick={() => handleEvent("footer")}>Connect</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
