import React, { useState } from 'react';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Skills from '../Skills';
import styles from './Scroll.module.scss';

const Scroll = () => {

    const [current, setCurrent] = useState(false);

    const [logo, setLogo] = useState('KC');
    //if the next top bar is visible, change the styling of the current top bar to white


    return (
        <div className='mainApp'>
            <div className={`navbar ${styles.navbarStyle}`}>
                <div className={styles.logoContainer}>
                    <a href='#home' onMouseEnter={() => setLogo('Kirsty Clark')} onMouseLeave={() => setLogo('KC')}>{logo}</a>
                </div>
            </div>
            <a href='#projects' className={`topbar ${styles.topbarStyle} ${styles.projectsTop}`}>
                Projects
            </a>
            <Projects />
            <a href='#about' className={`topbar ${styles.topbarStyle} ${styles.aboutTop}`}>
                About
            </a>
            <About />
            <a href='#skills' className={`topbar ${styles.topbarStyle} ${styles.skillsTop}`}>
                Skills
            </a>
            <Skills />
            <a href='#contact' className={`topbar ${styles.topbarStyle} ${styles.contactTop}`}>
                Contact
            </a>
            <Contact />
        </div>
    )
}

export default Scroll
