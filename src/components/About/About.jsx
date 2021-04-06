import React from 'react';
import SideBar from '../SideBar';
import '../../assets/styles.scss';
import styles from './About.module.scss';
import me from '../../assets/images/Screenshot 2020-10-21 at 11.23.31.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <div className='content' id='about' >
            <SideBar title='ABOUT'/>
            <div className={`main ${styles.about}`}>
                <div className={styles.aboutContainer}>
                    <img src={me}/>
                    <div className={styles.aboutInfo}>
                        <p>
                        I am a Trainee Software Developer based in London. <br/>
                        As well as a growing knowledge of technical skills, I am a confident content
                        producer, who works well with people and in fast paced situations.
                        I graduated from University of Oxford in 2019 with a 2:1 Bachelors of Fine Art degree.
                        <br/>
                        <br/>
                        Click 
                        <a href='https://drive.google.com/file/d/13aKQQfxZLiyAspnlD1UW3etPwsiML_na/view?usp=sharing' target='_blank'> here </a>
                        to view my CV.
                        </p>
                        <div className={styles.faBox}>
                            <a href='https://github.com/kirstyclark' target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className={styles.fa}/>
                            </a>
                            <a href='https://www.linkedin.com/in/kirstyclark101/' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className={styles.fa} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
