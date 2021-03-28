import React, { useState } from 'react';
import SideBar from '../SideBar';
import ProjectContent from './ProjectContent';
import '../../assets/styles.scss';
import styles from './Projects.module.scss';


const Projects = () => {

    const [project, setProject] = useState('kiki')

    const handleClick = (event) => {
        let clickedProject = event.target.id;
        setProject(clickedProject)
    }

    return (
        <div className='content' id='projects' >
            <SideBar title='PROJECTS'/>
            <div className={`main ${styles.projects}`}>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectsList}>
                        <div id='ipa' onClick={handleClick} className={styles.projectBox}><h5>API IPA</h5></div>
                        <div id='morse' onClick={handleClick} className={styles.projectBox}><h5>Morse Translator</h5></div>
                        <div id='knowaste' onClick={handleClick} className={styles.projectBox}><h5>KnoWaste</h5></div>
                        <div id='calc' onClick={handleClick} className={styles.projectBox}><h5>JS Calculator</h5></div>
                        <div id='game' onClick={handleClick} className={styles.projectBox}><h5>Noughts + Crosses</h5></div>
                        <div id='kiki' onClick={handleClick} className={styles.projectBox}><h5>Kiki's Sounds</h5></div>
                    </div>
                    <div className={styles.projectInfo}>
                        <ProjectContent project={project}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;


