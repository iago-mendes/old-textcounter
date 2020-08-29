import React from 'react'
import {Link} from 'react-router-dom'
import ToggleButton from 'react-theme-toggle-button'

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
                <ToggleButton isDark={false} onChange={() => {}} />
                <Link to="/about" className="about">
                    <span>About</span>
                </Link>
            </div>
        </div>
    )
}

export default MenuTabs