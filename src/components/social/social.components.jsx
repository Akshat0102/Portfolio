import React from "react";
import git from '../../assets/social/GitHub.png'
import linked from '../../assets/social/LinkedIn.png'
import insta from '../../assets/social/Instagram.png'
import mail from '../../assets/social/Mail.png'
import './social.styles.css';

const Social = () => {

    return (
        <div className="social-wrapper">
            <div className="social">
                <a href="https://github.com/Akshat0102"><img src={git} alt="git" className="social-links git" /></a>
                <a href="https://www.linkedin.com/in/akshat-khandelwal-118275202/"><img src={linked} alt="linked" className="social-links linked" /></a>
                <a href="https://instagram.com/oblivion_ineffable"><img src={insta} alt="insta" className="social-links insta" /></a>
                <a href="mailto:cruise.akshat@gmail.com"><img src={mail} alt="mail" className="social-links mail" /></a>
            </div>
        </div>

    )
}

export default Social;