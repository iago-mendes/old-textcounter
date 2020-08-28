import React from 'react'

import logoDark from '../../assets/logo-dark.svg'

import './styles.css'

function MenuTabs()
{
    return (
        <div id="tabsContainer">
            <div className="logo">
                <img src={logoDark} alt="robot"/>
                <span>Text Counter</span>
            </div>
        </div>
    )
}

export default MenuTabs