import React from 'react'
import Modal from 'react-modal'
import { callbackify } from 'util'

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
                    padding: '2rem'
                }
            }}
        >
            <p>Hello, world!</p>
            <div className="buttons">
                <button onClick={() => setIsOpen(!isOpen)}>
                    Close
                </button>
            </div>
        </Modal>
    )
}

export default Options