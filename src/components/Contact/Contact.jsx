import React from 'react';
import emailjs from 'emailjs-com';
import SideBar from '../SideBar';
import '../../assets/styles.scss';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('gmail', 'service_etwfaml', e.target, 'user_R4rZYB0FdGhBBa4xQFSQ0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        event.target.reset();
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
                    <form className={`contactForm ${styles.contactForm}`} onSubmit={sendEmail}>
                        <h3>Get in touch!</h3>
                        <label>Name</label>
                        <input type="text" name="name"/>
                        <label>Email</label>
                        <input type="email" name="email"/>
                        <label>Message</label>
                        <textarea name="message" />
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
