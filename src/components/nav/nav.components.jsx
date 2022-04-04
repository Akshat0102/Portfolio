import React, { useState } from "react";
import './nav.styles.css'
import { Link } from "react-router-dom";

const Nav = () => {
    const [index, useIndex] = useState(1);

    const handleUnderline = (newIndex) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useIndex(newIndex);
    }
    console.log(index);
    return (

        <div className="navbar">
            <nav className="nav-wrap">
                <Link to={'/'} className='link' onClick={() => { handleUnderline(1) }}>
                    <p>HOME</p><div className={index === 1 ? 'active' : 'underline'}></div></Link>
                <Link to={'/about'} className='link' onClick={() => { handleUnderline(2) }}>
                    <p>ABOUT</p><div className={index === 2 ? 'active' : 'underline'}></div></Link>
                <Link to={'/designs'} className='link' onClick={() => { handleUnderline(3) }}>
                    <p>DESIGNS</p><div className={index === 3 ? 'active' : 'underline'}></div></Link>
                <Link to={'/projects'} className='link' onClick={() => { handleUnderline(4) }}>
                    <p>PROJECTS</p><div className={index === 4 ? 'active' : 'underline'}></div></Link>
            </nav>
        </div>
    )

}

export default Nav;