import React from 'react';
import '../../assets/styles.scss';
import styles from './SideBar.module.scss';

const SideBar = (props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.textContainer}>
                {props.title}
            </div>
        </div>
    )
}

export default SideBar
