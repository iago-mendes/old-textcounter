import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import './styles.css'

Modal.setAppElement('#root')

export interface Letters
{
    [letter: string]: number
}

const defaultLetters =
{
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
}

interface LetterDensityParams
{
    isOpen: boolean
    setIsOpen: Function
    text: string
}

const LetterDensity: React.FC<LetterDensityParams> = ({isOpen, setIsOpen, text}) =>
{
    const [letters, setLetters] = useState<Letters>(defaultLetters)
    const alfabet =
    [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]

    useEffect(() =>
    {
        const characters = text.toLowerCase().split('')
        let tmpLetters: Letters = {}
        let length = 0

        alfabet.map(letter => tmpLetters[letter] = 0)
        
        characters.map(char =>
        {
            if (alfabet.includes(char))
            {
                length += 1
                tmpLetters[char] += 1
            }
        })
        
        if (length !== 0)
        {
            for (let [letter, quantity] of Object.entries(tmpLetters))
            {
                tmpLetters[letter] = Number((quantity/length*100).toFixed(2))
            }
            setLetters(tmpLetters)
        }
        else setLetters(defaultLetters)
    }, [text])

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
            <h1>LetterDensity</h1>
            <div>
                {alfabet.map(letter =>
                {
                    if (letters[letter] !== 0) return (
                        <p key={letter}>{letter}: {letters[letter]}%</p>
                    )
                })}
            </div>
            <button onClick={() => setIsOpen(false)} className="closeButton">Close</button>
        </Modal>
    )
}

export default LetterDensity