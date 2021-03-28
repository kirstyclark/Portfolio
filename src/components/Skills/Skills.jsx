import React from 'react';
import SideBar from '../SideBar';
import styles from './Skills.module.scss';
import '../../assets/styles.scss';

const Skills = () => {
    return (
        <div className='content' id='skills' >
            <SideBar title='SKILLS' />
            <div className={`main ${styles.skills}`}>
            </div>
        </div>
    )
}

export default Skills
