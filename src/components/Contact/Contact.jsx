import React from 'react';
// import { firestore } from '../../firebase.js';
import SideBar from '../SideBar';
import '../../assets/styles.scss';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = {
            name: event.target[0].value,
            email: event.target[1].value,
            message: event.target[2].value
        }
        console.log(response)

        // firestore.collection('submission').doc().set(response);
    }

    return (
        <div className='content' id='contact' >
            <SideBar title='CONTACT' />
            <div className={`main ${styles.contact}`}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactDetails}>
                        <a href='mailto:kirstyhelenclark@gmail.com' target='_blank'>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.fa}/>
                        </a>
                        <a href='https://github.com/kirstyclark' target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className={styles.fa}/>
                        </a>
                        <a href='https://www.linkedin.com/in/kirstyclark101/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className={styles.fa} />
                        </a>
                        <a href='https://drive.google.com/file/d/13aKQQfxZLiyAspnlD1UW3etPwsiML_na/view?usp=sharing' target='_blank'>
                            <FontAwesomeIcon icon={faFilePdf} className={styles.fa} />
                        </a>
                    </div>
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <h3>Get in touch!</h3>
                        <label>Name</label>
                        <input/>
                        <label>Email</label>
                        <input/>
                        <label>Message</label>
                        <textarea/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
