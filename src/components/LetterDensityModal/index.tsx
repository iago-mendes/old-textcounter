import React from 'react'
import Modal from 'react-modal'

import './styles.css'

Modal.setAppElement('#root')

export interface Letters
{
    a?: number
    b?: number
    c?: number
    d?: number
    e?: number
    f?: number
    g?: number
    h?: number
    i?: number
    j?: number
    k?: number
    l?: number
    m?: number
    n?: number
    o?: number
    p?: number
    q?: number
    r?: number
    s?: number
    t?: number
    u?: number
    v?: number
    w?: number
    x?: number
    y?: number
    z?: number
}

interface LetterDensityParams
{
    isOpen: boolean
    setIsOpen: Function
    letters?: Letters
    setLetters?: Function
}

const LetterDensity: React.FC<LetterDensityParams> = ({isOpen, setIsOpen}) =>
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
                    justifyContent: 'space-between',
                    gap: 15
                }
            }}
            id="lettersContainer"
        >
            <p>LetterDensity</p>
            <button onClick={() => setIsOpen(false)} className="closeButton">Close</button>
        </Modal>
    )
}

export default LetterDensity