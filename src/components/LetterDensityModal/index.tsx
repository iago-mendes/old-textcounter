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
        >
            <p>LetterDensity</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
        </Modal>
    )
}

export default LetterDensity