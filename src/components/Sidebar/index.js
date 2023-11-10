import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './index.scss';
import LogoS from '../../assets/images/logo-sn.png';
import LogoSubtitle from '../../assets/images/logo_subn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { click } from '@testing-library/user-event/dist/click';

const Sidebar = () => {
    const [clicked,setClicked] = useState(false);
    const handleClick= () =>{
        setClicked(!clicked);
    }
    return (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src = {LogoS} alt="logo" />
            <img className= "sub-logo" src = {LogoSubtitle} alt="nitesh" />
        </Link>
        <nav id='nav_content' className={clicked ? "#nav_content active" : "#nav_content"}>
            <NavLink exact = "true" activeclassname = "active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact = "true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>

          
        
        </nav>

        <div id="mobile" onClick={handleClick}>
            {/* <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i> */}
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
              // onClick={this.props.handleClick}
            ></i>
          </div>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/nitesh-ranjitkar-857293143/'>
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/NiteshGoD'>
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.youtube.com/@TheAlmightyNitesh'>
                    <FontAwesomeIcon icon = {faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.skype.com/en/'>
                    <FontAwesomeIcon icon = {faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
    );
}

export default Sidebar