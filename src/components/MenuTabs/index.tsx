import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Switch from 'react-switch'
import { FiSun, FiMoon } from 'react-icons/fi'

import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'

import './styles.css'
import changeTheme from '../../utils/changeTheme'

function MenuTabs()
{
    const [isDark, setIsDark] = useState(false)

    useEffect(() =>
    {
        const theme = localStorage.getItem('@text-counter/theme')
        if (theme === 'dark')
        {
            changeTheme('dark')
            setIsDark(true)
        }
        else if (theme === 'light')
        {
            changeTheme('light')
            setIsDark(false)
        }
        else
        {
            localStorage.setItem('@text-counter/theme', 'light')
            changeTheme('light')
            setIsDark(false)
        }
    }, [])

    async function handleChangeTheme()
    {
        await setIsDark(!isDark)
        
        if (!isDark) // dark theme
        {
            localStorage.setItem('@text-counter/theme', 'dark')
            changeTheme('dark')
        }

        if (isDark) // light theme
        {
            localStorage.setItem('@text-counter/theme', 'light')
            changeTheme('light')
        }
    }

    return (
        <div id="tabsContainer">
            <Link to="/" className="logo">
                {isDark ? <img src={logoDark} alt="robot"/> : <img src={logoLight} alt="robot"/>}
                <span>Text Counter</span>
            </Link>
            <div className="buttons">
                <Switch
                    checked={isDark}
                    onChange={handleChangeTheme}
                    offColor="#ffe4ad"
                    offHandleColor="#ffad05"
                    uncheckedIcon={<div style={{color: "#ffad05"}} className="themeIcon"><FiSun/></div>}
                    onColor="#44475a"
                    onHandleColor="#6272a4"
                    checkedIcon={<div style={{color: "#6272a4"}} className="themeIcon"><FiMoon/></div>}
                    height={30}
                    width={65}
                />
                <Link to="/about" className="about">
                    <span>About</span>
                </Link>
            </div>
        </div>
    )
}

export default MenuTabs