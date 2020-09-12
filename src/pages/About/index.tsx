import React from 'react'

import logoDark from '../../assets/logo-dark.svg'
import creator from '../../assets/creator.jpg'

import './styles.css'

function About()
{
    return (
        <div id="aboutContainer">
            <div className="greetings">
                <h1>Hi there!</h1>
                <h2>So, do you want to know more about me? That’s awesome!</h2>
            </div>
            <div className="card">
                <h2>Who am I?</h2>
                <ul>
                    <img src={logoDark} alt="robot"/>
                    <p>My name is Text Counter and I can help you count your text (who would’ve guessed, right?).<br/><br/>You can use me as a simple counter of words and characters or you can enable some of my show options and features. It’s your choice!</p>
                </ul>
            </div>
            <div className="card">
                <h2>Who is my creator?</h2>
                <ul>
                    <p>I was developed by Iago Mendes, who is a college student passionate about coding. You can see more info about him in his GitHub and LikedIn accounts.<br/><br/>He also made me as an open source application, so you can see my repository here.</p>
                    <img src={creator} alt="creator" style={{borderRadius: 175}} />
                </ul>
            </div>
        </div>
    )
}

export default About