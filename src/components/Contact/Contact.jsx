import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SideBar from '../SideBar';
import '../../assets/styles.scss';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const [confirm, setConfirm] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_etwfaml', 'template_r873u9x', event.target, 'user_R4rZYB0FdGhBBa4xQFSQ0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset();
        setConfirm(true);
    }

    return (
        <div className='content' id='contact' >
            <SideBar title='CONTACT' />
            <div className={`main ${styles.contact}`}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactDetails}>
                        <a href='https://github.com/kirstyclark' target='_blank'>
                            <FontAwesomeIcon icon={faGithub} className={styles.fa}/>
                        </a>
                        <a href='https://www.linkedin.com/in/kirstyclark101/' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className={styles.fa} />
                        </a>
                        <a href='https://drive.google.com/file/d/1-ksSsGhA2aRZFoPKaPimnnMk9zq7HeMh/view?usp=sharing' target='_blank'>
                            <FontAwesomeIcon icon={faFilePdf} className={styles.fa} />
                        </a>
                    </div>
                    <form className={`contactForm ${styles.contactForm}`} onSubmit={(event)=>sendEmail(event)}>
                        <h3>Get in touch!</h3>
                        <label>Name</label>
                        <input type="text" name="name"/>
                        <label>Email</label>
                        <input type="email" name="email"/>
                        <label>Message</label>
                        <textarea name="message" />
                        <button type='submit'>Submit</button>
                        {
                            confirm ? <h5>Thanks!</h5> : <h5></h5>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
