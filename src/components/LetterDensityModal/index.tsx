import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'

import './styles.css'

Modal.setAppElement('#root')

export interface Letters
{
    [letter: string]: {number: number, percentage: number}
}

const defaultLetters =
{
    a: {number: 0, percentage: 0},
    b: {number: 0, percentage: 0},
    c: {number: 0, percentage: 0},
    d: {number: 0, percentage: 0},
    e: {number: 0, percentage: 0},
    f: {number: 0, percentage: 0},
    g: {number: 0, percentage: 0},
    h: {number: 0, percentage: 0},
    i: {number: 0, percentage: 0},
    j: {number: 0, percentage: 0},
    k: {number: 0, percentage: 0},
    l: {number: 0, percentage: 0},
    m: {number: 0, percentage: 0},
    n: {number: 0, percentage: 0},
    o: {number: 0, percentage: 0},
    p: {number: 0, percentage: 0},
    q: {number: 0, percentage: 0},
    r: {number: 0, percentage: 0},
    s: {number: 0, percentage: 0},
    t: {number: 0, percentage: 0},
    u: {number: 0, percentage: 0},
    v: {number: 0, percentage: 0},
    w: {number: 0, percentage: 0},
    x: {number: 0, percentage: 0},
    y: {number: 0, percentage: 0},
    z: {number: 0, percentage: 0}
}

const desktopStyle: Modal.Styles =
{
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
        gap: 15,
    }
}

const mobileStyle: Modal.Styles =
{
    overlay:
    {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content:
    {
        height: '75vh',
        width: '75vw',
        top: '12.5vh',
        left: 'calc((100vw - 75vw) / 2)',
        border: '1px solid var(--text)',
        background: 'var(--secondary)',
        borderRadius: '2.5rem',
        padding: '1rem',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
    }
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

    const [width, setWidth] = useState(1000)
    useEffect(() => setWidth(window.outerWidth), [])
    window.addEventListener('resize', () => setWidth(window.outerWidth))

    useEffect(() =>
    {
        const alfabet =
        [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ]

        const characters = text.toLowerCase().split('')
        let tmpLetters: Letters = {}
        let length = 0

        alfabet.map(letter => tmpLetters[letter] = {number: 0, percentage: 0})
        
        characters.map(char =>
        {
            if (alfabet.includes(char))
            {
                length += 1
                tmpLetters[char].number += 1
            }
            return 'fix warning'
        })
        
        if (length !== 0)
        {
            for (let [letter, quantity] of Object.entries(tmpLetters))
            {
                tmpLetters[letter].percentage = Number((quantity.number/length*100).toFixed(2))
            }
            setLetters(tmpLetters)
        }
        else setLetters(defaultLetters)
    }, [text])

    return (
        <Modal
            isOpen={isOpen}
            style = {width > 700 ? desktopStyle : mobileStyle}
            id="lettersContainer"
        >
            <h1>Letter Density</h1>
            <ul>
                {alfabet.map(letter =>
                {
                    if (letters[letter].number !== 0) return (
                        <li key={letter} className="letterInfo">
                            <label className="letter">{letter.toUpperCase()} &rarr; </label>
                            <label className="quantity">{letters[letter].number} ({letters[letter].percentage}%)</label>
                        </li>
                    )
                    else return null
                })}
            </ul>
            <button onClick={() => setIsOpen(false)} className="closeButton">Close</button>
        </Modal>
    )
}

export default LetterDensity