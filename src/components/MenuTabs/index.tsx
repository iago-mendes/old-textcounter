import React, { useState, ChangeEvent } from 'react'
import {Link} from 'react-router-dom'
import Switch from 'react-switch'

import logoDark from '../../assets/logo-dark.svg'

import './styles.css'

function MenuTabs()
{
    const [isDark, setIsDark] = useState(false)

    async function handleChangeTheme()
    {
        await setIsDark(!isDark)
        
        if (!isDark) // dark theme
        {
            localStorage.setItem('@text-counter/theme', 'dark')
            document.documentElement.style.setProperty('--primary', '#282a36')
            document.documentElement.style.setProperty('--secondary', '#44475a')
            document.documentElement.style.setProperty('--secondary-strong', '#6272a4')
            document.documentElement.style.setProperty('--text', '#f8f8f2')
            document.documentElement.style.setProperty('--textarea', '#bd93f9')
            document.documentElement.style.setProperty('--textarea-focus', '#ff79c6')
        }

        if (isDark) // light theme
        {
            localStorage.setItem('@text-counter/theme', 'light')
            document.documentElement.style.setProperty('--primary', '#f5f5f5')
            document.documentElement.style.setProperty('--secondary', '#44475a')
            document.documentElement.style.setProperty('--secondary-strong', '#6272a4')
            document.documentElement.style.setProperty('--text', '#44475a')
            document.documentElement.style.setProperty('--textarea', '#bd93f9')
            document.documentElement.style.setProperty('--textarea-focus', '#ff79c6')
        }
    }

    return (
        <div id="tabsContainer">
            <Link to="/" className="logo">
                <img src={logoDark} alt="robot"/>
                <span>Text Counter</span>
            </Link>
            <div className="buttons">
                <Switch
                    checked={isDark}
                    onChange={handleChangeTheme}
                />
                <Link to="/about" className="about">
                    <span>About</span>
                </Link>
            </div>
        </div>
    )
}

export default MenuTabs