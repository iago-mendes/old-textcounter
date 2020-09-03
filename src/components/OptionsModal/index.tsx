import React, { useState, ChangeEvent, useEffect } from 'react'
import Modal from 'react-modal'

import './styles.css'

export interface ShowInfo
{
    words: boolean
    characters: boolean
    lines: boolean
    paragraphs: boolean
    letters: boolean
}

export const defaultShowInfo =
{
    words: true,
    characters: true,
    lines: false,
    paragraphs: false,
    letters: false
}

interface OptionsParams
{
    isOpen: boolean
    setIsOpen: Function
    showInfo: ShowInfo
    setShowInfo: Function
}

const Options: React.FC<OptionsParams> = ({isOpen, setIsOpen, showInfo, setShowInfo}) =>
{
    var tmpShowInfo: ShowInfo =
    {
        words: showInfo.words,
        characters: showInfo.characters,
        lines: showInfo.lines,
        paragraphs: showInfo.paragraphs,
        letters: showInfo.letters
    }

    function handleShowInfoChange(e: ChangeEvent<HTMLInputElement>)
    {
        const {name} = e.target

        if (name === 'words') tmpShowInfo['words'] = !tmpShowInfo.words
        if (name === 'characters') tmpShowInfo['characters'] = !tmpShowInfo.characters
        if (name === 'lines') tmpShowInfo['lines'] = !tmpShowInfo.lines
        if (name === 'paragraphs') tmpShowInfo['paragraphs'] = !tmpShowInfo.paragraphs
        if (name === 'letters') tmpShowInfo['letters'] = !tmpShowInfo.letters
    }

    function handleApplyChanges()
    {
        setShowInfo(tmpShowInfo)
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={isOpen}
            style=
            {{
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
                    justifyContent: 'space-between'
                }
            }}
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
                            onChange={handleShowInfoChange}
                            name="words" 
                            id="words"
                        />
                        <span>Number of words</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.characters}
                            onChange={handleShowInfoChange}
                            name="characters"
                            id="characters"
                        />
                        <span>Number of characters</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.lines}
                            onChange={handleShowInfoChange}
                            name="lines"
                            id="lines"
                        />
                        <span>Number of lines</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.paragraphs}
                            onChange={handleShowInfoChange}
                            name="paragraphs"
                            id="paragraphs"
                        />
                        <span>Number of paragraphs</span>
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            defaultChecked={tmpShowInfo.letters}
                            onChange={handleShowInfoChange}
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
                        <input type="checkbox" name="auto-correction" id="auto-correction"/>
                        <span>Auto-correction</span>
                    </li>
                    <li>
                        <input type="checkbox" name="save" id="save"/>
                        <span>Save text until next visit</span>
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