import React from 'react';
import '../../assets/styles.scss';
import styles from './Home.module.scss';
import wave from '../../assets/images/wavinghand.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className={styles.home} id='home'>
            <div className={styles.homeContainer}>
                <img src={wave}/>
                <span className={styles.homeText}>
                    <h2>
                        Hey! <br/> 
                        My name is Kirsty Clark and <br/> 
                        I am a Software Developer <br/>
                        based in London.</h2>
                </span>
            </div>
            <a href='#projects' className={styles.scrollContainer}>
                <h4>Scroll down to view</h4>
                <FontAwesomeIcon icon={faChevronDown} className={styles.fa} />
            </a>
        </div>
    )
}

export default Home
