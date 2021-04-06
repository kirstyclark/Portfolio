import React, { useState } from 'react';
import SideBar from '../SideBar';
import styles from './Skills.module.scss';
import '../../assets/styles.scss';
import skillInfo from './skillInfo.js';

const Skills = () => {

    return (
        <div className='content' id='skills' >
            <SideBar title='SKILLS' />
            <div className={`main ${styles.skills}`}>
                <div className={styles.skillsContainer}>
                    {
                        skillInfo.map(skill => {
                            return (
                            <div className={styles.skillCard}>
                                <h5>{skill.name}</h5>
                                <ul>
                                    {skill.projects.map(project => {
                                        return <li>{project}</li>
                                    })}
                                </ul>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
