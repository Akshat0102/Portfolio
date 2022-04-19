// import React, { useState } from "react";
import './nav.styles.css'
import { Link } from "react-router-dom";

const Nav = () => {
    return (

        <div className="navbar">
            <nav className="nav-wrap">
                <Link to={'/'} className='link' ><p>HOME</p></Link>
                <Link to={'/about'} className='link'><p>ABOUT</p></Link>
                <Link to={'/skills'} className='link'><p>SKILLS</p></Link>
                <Link to={'/designs'} className='link' ><p>DESIGNS</p></Link>
                <Link to={'/projects'} className='link'><p>PROJECTS</p></Link>
                <Link to={'/resume'} className='link'><p>RESUME</p></Link>

            </nav>
        </div>
    )
}

export default Nav;