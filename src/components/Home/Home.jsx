import React from 'react';
import '../../assets/styles.scss';
import styles from './Home.module.scss';
import mouse from '../../assets/images/mouse.webp'

const Home = () => {
    return (
        <div className={styles.home} id='home'>
            <img src={mouse}/>
        </div>
    )
}

export default Home
