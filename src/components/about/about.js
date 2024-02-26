import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import './about.scss'
import profile from '../../assets/profile.jpg'
import skillData from './skillData';

const aboutContent = require('./aboutContent.txt')

const About = () => {
    return (
        <div id="about" className={'section'}>
            <div className={'titleBox'}>
                <h1 className={'title'}>About</h1>
            </div>
            <div className={'about'}>
                <img className={'about__profile'} src={profile} alt={"Hi, I'm Brittany LaPointe a software developper!"}/>
                <div className={'about__text'}>
                    {aboutContent.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button onClick={() => scrollTo('#contact')} className={'button'}>Contact Me</button>
                </div>
            </div>
            <div className={'about__skills'}>
                {skillData.map((skill, index) => (
                    <img
                        key={index}
                        className={'about__skills-icon'}
                        src={skill.imgSrc}
                        alt={skill.altText}
                        title={skill.title}
                        height={skill.height}
                        width={skill.width}
                    />
                ))}
            </div>
        </div>
    )

}

export default About 