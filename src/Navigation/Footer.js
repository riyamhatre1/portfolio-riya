import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagramSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div id="footer" className='Footer-column'>
            <h3>Lets stay connected!</h3>
            <ul className='Footer-links'>
                <li>
                    <a href="mailto:riyasantoshmhatre@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} className="icon email" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/riya-mhatre-6b7693257/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/dry.palette/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagramSquare} className="icon instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/riyamhatre1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} className="icon github" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
