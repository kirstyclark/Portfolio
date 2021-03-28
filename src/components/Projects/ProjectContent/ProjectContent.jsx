import React, { useState } from 'react';
import '../../../assets/styles.scss';
import styles from './ProjectContent.module.scss';


const ProjectContent = (props) => {

    const { project } = props;
    return (
        <div>
           {project}
        </div>
    )
}

export default ProjectContent;


