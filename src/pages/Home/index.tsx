import React, { useState } from 'react'
import { FiCopy, FiMenu } from 'react-icons/fi'

import './styles.css'
import Options, {ShowInfo, defaultShowInfo} from '../../components/OptionsModal'

function Home()
{
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [showInfo, setShowInfo] = useState<ShowInfo>(defaultShowInfo)

    return (
        <div id="homeContainer">
            <Options isOpen={isOptionsOpen} setIsOpen={setIsOptionsOpen} showInfo={showInfo} setShowInfo={setShowInfo} />
            <div className="info">
                {showInfo.words && <span className="showInfo">Words: {500}</span>}
                {showInfo.characters && <span className="showInfo">Characters: {2000}</span>}
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
                {showInfo.lines && <span className="showInfo">Lines: {100}</span>}
                {showInfo.paragraphs && <span className="showInfo">Paragraphs: {25}</span>}
                {showInfo.letters && <div className="lettersContainer">
                    <button title="See letter density" className="letters">Letter Density</button>
                </div>}
            </div>
            <textarea name="textarea" className="textarea"></textarea>
        </div>
    )
}

export default Home