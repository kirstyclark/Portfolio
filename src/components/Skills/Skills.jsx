import React from 'react';
import SideBar from '../SideBar';
import SkillTile from './SkillTile/SkillTile.jsx';
import styles from './Skills.module.scss';
import skillInfo from './skillInfo.js';

const Skills = () => {

    return (
        <div className='content' id='skills' >
            <SideBar title='SKILLS' />
            <div className={`main ${styles.skills}`}>
                <div className={styles.skillsContainer}>
                    {
                        skillInfo.map(skill => {
                            return <SkillTile name={skill.name} link={skill.link} icon={skill.icon} project={skill.project}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills
