import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styles from './SkillTile.module.scss';

const SkillTile = (props) => {

    const {name, icon, project, link} = props;

    const [isShown, showSkill] = useState(false);

    return (
        <div 
        className={styles.skillCard}
        onMouseEnter={() => showSkill(true)}
        onMouseLeave={() => showSkill(false)}
        >
            <h5 className={styles.skillName}>{name}</h5>
            {
                isShown ? 
                <a href={link} target='_blank' className={styles.skillProject}>
                    <p>{project}</p>
                    <FontAwesomeIcon icon={faCode} className={styles.git}/>
                </a>
                :
                <FontAwesomeIcon icon={icon} className={styles.fa}/>
            }
        </div>
    )
}

export default SkillTile;
