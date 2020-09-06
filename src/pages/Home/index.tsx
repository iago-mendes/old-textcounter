import React, { useState, ChangeEvent, useEffect } from 'react'
import { FiCopy, FiMenu } from 'react-icons/fi'

import './styles.css'
import Options, {ShowInfo, defaultShowInfo, Features, defaultFeatures } from '../../components/OptionsModal'

function Home()
{
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [showInfo, setShowInfo] = useState<ShowInfo>(defaultShowInfo)
    const [features, setFeatures] = useState<Features>(defaultFeatures)

    const [text, setText] = useState<string>('')
    const [info, setInfo] = useState(
    {
        words: 0,
        characters: 0,
        paragraphs: 0
    })

    useEffect(() =>
    {
        const getWords = text.length === 0 ? [] : text.replace('\n', ' ').split(' ').filter(item => {return item !== ''})
        const getParagraphs = text.split('\n').filter(item => {return item !== ''})
        const tmpInfo =
        {
            words: getWords.length,
            characters: text.length,
            paragraphs: getParagraphs.length
        }

        setInfo(tmpInfo)
    }, [text])

    function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>)
    {
        const {value} = e.target
        setText(value)
    }

    function handleCopyText()
    {
        document.addEventListener('copy', (e: ClipboardEvent) =>
        {
            e.clipboardData?.setData('text/plain', text)
            e.preventDefault()
        })
        document.execCommand('copy')
    }

    return (
        <div id="homeContainer">
            <Options
                isOpen={isOptionsOpen}
                setIsOpen={setIsOptionsOpen}
                showInfo={showInfo}
                setShowInfo={setShowInfo}
                features={features}
                setFeatures={setFeatures}
            />
            <div className="infoButtonsContainer">
                <div className="info">
                    {showInfo.words && <span className="showInfo">Words: {info.words}</span>}
                    {showInfo.characters && <span className="showInfo">Characters: {info.characters}</span>}
                    {showInfo.paragraphs && <span className="showInfo">Paragraphs: {info.paragraphs}</span>}
                    {showInfo.letters && <div className="lettersContainer">
                        <button title="See letter density" className="letters">Letter Density</button>
                    </div>}
                </div>
                <div className="buttons">
                    <button title="Copy text" onClick={handleCopyText} className="copy">
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
            <textarea onChange={handleTextChange} name="textarea" className="textarea" ></textarea>
        </div>
    )
}

export default Home