import React from 'react'
import { FiCopy, FiMenu } from 'react-icons/fi'

import './styles.css'

function Home()
{
    return (
        <div id="homeContainer">
            <div className="info">
                <span className="showInfo">Words: {500}</span>
                <span className="showInfo">Characters: {2000}</span>
                <div className="buttons">
                    <button title="Copy text" className="copy">
                        <FiCopy />
                    </button>
                    <button title="See options" className="options">
                        <FiMenu />
                    </button>
                </div>
                <span className="showInfo">Lines: {100}</span>
                <span className="showInfo">Paragraphs: {25}</span>
                <div className="lettersContainer">
                    <button title="See letter density" className="letters">Letter Density</button>
                </div>
            </div>
            <textarea name="textarea" className="textarea"></textarea>
        </div>
    )
}

export default Home