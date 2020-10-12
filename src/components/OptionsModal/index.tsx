import React, { ChangeEvent, useEffect, useState } from 'react'
import Modal from 'react-modal'

import './styles.css'

Modal.setAppElement('#root')

export interface ShowInfo
{
    words: boolean
    characters: boolean
    paragraphs: boolean
    letters: boolean
}

export const defaultShowInfo =
{
    words: true,
    characters: true,
    paragraphs: false,
    letters: false
}

export interface Features
{
    suggestions: boolean
    save: boolean
}

export const defaultFeatures =
{
    suggestions: false,
    save: true
}

const desktopStyle: Modal.Styles =
{
    overlay:
    {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content:
    {
        height: '75vh',
        width: '75vh',
        top: '12.5vh',
        left: 'calc((100vw - 75vh) / 2)',
        border: '1px solid var(--text)',
        background: 'var(--secondary)',
        borderRadius: '2.5rem',
        padding: '3rem',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
    }
}

const mobileStyle: Modal.Styles =
{
    overlay:
    {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content:
    {
        height: '75vh',
        width: '75vw',
        top: '12.5vh',
        left: 'calc((100vw - 75vw) / 2)',
        border: '1px solid var(--text)',
        background: 'var(--secondary)',
        borderRadius: '2.5rem',
        padding: '3rem',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
    }
}

interface OptionsParams
{
    isOpen: boolean
    setIsOpen: Function
    showInfo: ShowInfo
    setShowInfo: Function
    features: Features
    setFeatures: Function
}

const Options: React.FC<OptionsParams> = ({isOpen, setIsOpen, showInfo, setShowInfo, features, setFeatures}) =>
{
    var tmpShowInfo: ShowInfo =
    {
        words: showInfo.words,
        characters: showInfo.characters,
        paragraphs: showInfo.paragraphs,
        letters: showInfo.letters
    }
    var tmpFeatures: Features =
    {
        suggestions: features.suggestions,
        save: features.save
    }

    const [width, setWidth] = useState(1000)
    useEffect(() => setWidth(window.outerWidth), [])
    window.addEventListener('resize', () => setWidth(window.outerWidth))

    function handleChange(e: ChangeEvent<HTMLInputElement>)
    {
        const {name} = e.target

        if (name === 'words') tmpShowInfo['words'] = !tmpShowInfo.words
        if (name === 'characters') tmpShowInfo['characters'] = !tmpShowInfo.characters
        if (name === 'paragraphs') tmpShowInfo['paragraphs'] = !tmpShowInfo.paragraphs
        if (name === 'letters') tmpShowInfo['letters'] = !tmpShowInfo.letters
        if (name === 'suggestions') tmpFeatures['suggestions'] = !tmpFeatures.suggestions
        if (name === 'save') tmpFeatures['save'] = !tmpFeatures.save
    }

    function handleApplyChanges()
    {
        let savedOptions = ''
        for (let [key, value] of Object.entries(tmpShowInfo))
        {
            if (value === true) savedOptions += `,${key}`
        }
        for (let [key, value] of Object.entries(tmpFeatures))
        {
            if (value === true) savedOptions += `,${key}`
        }
        localStorage.setItem('@text-counter/options', savedOptions)

        setShowInfo(tmpShowInfo)
        setFeatures(tmpFeatures)
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen = {isOpen}
            style = {width > 700 ? desktopStyle : mobileStyle}
            id="optionsContainer"
        >
            <div className="options">
                <label>What do you want me to show you?</label>
                <ul>
                    <li>
                        {/* <div className="checkboxContainer">
                            <input type="checkbox" onChange={() => {}}  name="words" id="words"/>
                            <span />
                        </div> */}
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.words}
                            onChange={handleChange}
                            name="words" 
                            id="words"
                        />
                        <span>Number of words</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.characters}
                            onChange={handleChange}
                            name="characters"
                            id="characters"
                        />
                        <span>Number of characters</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.paragraphs}
                            onChange={handleChange}
                            name="paragraphs"
                            id="paragraphs"
                        />
                        <span>Number of paragraphs</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.letters}
                            onChange={handleChange}
                            name="letters"
                            id="letters"
                        />
                        <span>Letter density</span>
                    </li>
                </ul>
            </div>
            <div className="options">
                <label>Choose which features you want.</label>
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpFeatures.save}
                            onChange={handleChange}
                            name="save"
                            id="save"
                        />
                        <span>Save text to next visit</span>
                    </li>
                </ul>
            </div>
            <div className="buttons">
                <button onClick={() => setIsOpen(false)}>
                    Close
                </button>
                <button onClick={handleApplyChanges}>
                    Apply
                </button>
            </div>
        </Modal>
    )
}

export default Options