import React from 'react'
import {Link} from 'react-router-dom'

import logoDark from '../../assets/logo-dark.svg'

import './styles.css'

function MenuTabs()
{
    return (
        <div id="tabsContainer">
            <Link to="/" className="logo">
                <img src={logoDark} alt="robot"/>
                <span>Text Counter</span>
            </Link>
            <div className="buttons">
                <button className="theme">
                    <span>theme button</span>
                </button>
                <Link to="/about" className="about">
                    <span>About</span>
                </Link>
            </div>
        </div>
    )
}

export default MenuTabs