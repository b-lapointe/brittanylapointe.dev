import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import './about.scss'
import profile from '../../assets/profile.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript2 from '../../assets/javascript2.png'
import angular from '../../assets/angular.png'
import react from '../../assets/react.png'
import wordpress from '../../assets/wordpress.png'
import gatsby from '../../assets/gatsby.png'
import adobeXD from '../../assets/adobeXD.png'
import adobeIll from '../../assets/adobeIllustrator.png'    
import sass from '../../assets/sass.png'    

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
                    <img className={'about__skills-icon'} src={html} alt={"HTML icon"} title="HTML" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={css} alt={"CSS icon"} title="CSS" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={javascript2} alt={"JavaScript icon"} title="JavaScript" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={react} alt={"React icon"} title="React" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={angular} alt={"Angular icon"} title="Angular" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={sass} alt={"SASS icon"} title="SASS" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={wordpress} alt={"Wordpress icon"} title="Wordpress" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={gatsby} alt={"Gatsby icon"} title="Gatsby" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={adobeIll} alt={"Adobe Illustrator icon"} title="Adobe Illustrator" height={'200px'} width={'200px'}/>
                    <img className={'about__skills-icon'} src={adobeXD} alt={"Adobe XD icon"} title="Adobe XD" height={'200px'} width={'200px'}/>
            </div>
        </div>
    )

}

export default About 