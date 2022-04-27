import React from "react";
import './about.styles.css'
import profile from '../../assets/profile-pic/Akshat.jpeg'

const About = () => {

    return (

        <div className="about">
            <div className="profile-pic">
                <img src={profile} alt="profile-pic" />
            </div>

            <div className="profile-data">
                <p>Hello, I am <span className="pink"> Akshat Khandelwal</span>.
                    I am a UI Designer and Flutter, React.Js Developer.</p>

                <br></br>

                <p>I completed my 12th from St. Xavier Senior Secondary School
                    and currently I am a CSE Undergrad at <span className="orange">
                        IIIT Vadodara</span>.</p>

                <br />

                <p>I have a current on-going internship at <span className="pink">
                    SHOR Innovations</span> as a <span className="orange">
                        UI Designer</span>.</p>

                <br />

                <p>I love designing,<span className="pink"> illustrating</span>,
                    developing and <span className="orange">leetcoding</span>.</p>

            </div>
        </div>

    )
}

export default About;