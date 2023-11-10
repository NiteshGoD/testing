import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useState, useEffect } from 'react';
import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(() => {
               setLetterClass('text-animate-hover')
           }, 3000)
           //[] , this is for the first render only.
       },[])

    return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ","m","e"]} idx={15} />
            </h1>

        <p>
            I am a very ambitious web developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.

        </p>
        <p>
            I am quite confident, naturally curious and pertetually working on improving my chops and design problems at a time.
        </p>
        <p>
            And if I need to define myself in one sentence, then I would like to call myself a tech and FOSS enthusiast, loves playing around with various linux distros and learning to solve different kinds of problems.
        </p>
        <p align="justify">
        Having background in Computer Engineering, Very passionate about web technologies and new tools.
        </p>
        
        
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faPython} color="#FFE873" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#E34C26" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGit} color="#EC4D28" />
                </div>

            </div>
        </div>

    </div>
    <Loader type="pacman"></Loader>
    </>
    )
    
};

export default About;
