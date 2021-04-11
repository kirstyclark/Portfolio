import React, { useState } from 'react';
import '../../../assets/styles.scss';
import styles from './ProjectContent.module.scss';
import projectInfo from './projectInfo.js';


const ProjectContent = (props) => {

    const { project } = props;
    let projectExpand;

    if (project === 'ipa') {
        projectExpand = projectInfo[0]
    } else if (project === 'kiki'){
        projectExpand = projectInfo[1]
    } else if (project === 'knowaste'){
        projectExpand = projectInfo[2]
    } else if (project === 'calc'){
        projectExpand = projectInfo[3]
    } else if (project === 'game'){
        projectExpand = projectInfo[4]
    } else if (project === 'morse') {
        projectExpand = projectInfo[5]
    }

    return (
        <div className={styles.projectContent}>
            <video src={projectExpand.img} autoplay="true"></video>
            <h2>{projectExpand.name}</h2>
            <ul>
                {projectExpand.tools.map(tool => <li>{tool}</li>)}
            </ul>
            <p>{projectExpand.description}</p>
            <a href={projectExpand.githubPage} target='_blank'>Github Pages</a>
            <a href={projectExpand.code} target='_blank'>Code</a>
        </div>
    )
}

export default ProjectContent;


