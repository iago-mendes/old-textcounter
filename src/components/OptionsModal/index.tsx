import React from 'react'
import Modal from 'react-modal'

import './styles.css'

interface OptionsParams
{
    isOpen: boolean
    setIsOpen: Function
}

const Options: React.FC<OptionsParams> = ({isOpen, setIsOpen}) =>
{
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
                        <input type="checkbox" name="words" id="words"/>
                        <span>Number of words</span>
                    </li>
                    <li>
                        <input type="checkbox" name="characters" id="characters"/>
                        <span>Number of characters</span>
                    </li>
                    <li>
                        <input type="checkbox" name="lines" id="lines"/>
                        <span>Number of lines</span>
                    </li>
                    <li>
                        <input type="checkbox" name="paragraphs" id="paragraphs"/>
                        <span>Number of paragraphs</span>
                    </li>
                    <li>
                        <input type="checkbox" name="letters" id="letters"/>
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
                <button onClick={() => setIsOpen(!isOpen)}>
                    Close
                </button>
                <button onClick={() => setIsOpen(!isOpen)}>
                    Apply
                </button>
            </div>
        </Modal>
    )
}

export default Options