import React, { useState, ChangeEvent } from 'react'
import { FiCopy, FiMenu } from 'react-icons/fi'

import './styles.css'
import Options, {ShowInfo, defaultShowInfo} from '../../components/OptionsModal'

function Home()
{
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [showInfo, setShowInfo] = useState<ShowInfo>(defaultShowInfo)

    const [text, setText] = useState<string>('')
    const [info, setInfo] = useState(
    {
        words: 0,
        characters: 0,
        lines: 0,
        paragraphs: 0
    })

    function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>)
    {
        const {value} = e.target
        setText(value)
    }

    return (
        <div id="homeContainer">
            <Options isOpen={isOptionsOpen} setIsOpen={setIsOptionsOpen} showInfo={showInfo} setShowInfo={setShowInfo} />
            <div className="infoButtonsContainer">
                <div className="info">
                    {showInfo.words && <span className="showInfo">Words: {500}</span>}
                    {showInfo.characters && <span className="showInfo">Characters: {text.length}</span>}
                    {showInfo.paragraphs && <span className="showInfo">Paragraphs: {25}</span>}
                    {showInfo.letters && <div className="lettersContainer">
                        <button title="See letter density" className="letters">Letter Density</button>
                    </div>}
                </div>
                <div className="buttons">
                    <button title="Copy text" className="copy">
                        <FiCopy />
                    </button>
                    <button
                        title="See options"
                        onClick={() => setIsOptionsOpen(!isOptionsOpen)}
                        className="options"
                    >
                        <FiMenu />
                    </button>
                </div>
            </div>
            <textarea onChange={handleTextChange} name="textarea" className="textarea"></textarea>
        </div>
    )
}

export default Home