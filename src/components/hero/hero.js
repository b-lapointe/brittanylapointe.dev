import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import * as heroStyles from './hero.module.scss'
import onLaptop3 from '../../assets/onLaptop3.png'

const Hero = () => {
    return (
        <div className={heroStyles.section}>
            <div className={heroStyles.hero}>
                <div className={heroStyles.intro}>
                    <h1 className={heroStyles.introText}>Hello!</h1>
                    <h1 className={heroStyles.introText}>I'm Brittany,
                    <br></br> a software developer</h1>
                    <button onClick={() => scrollTo('#contact')} className={'button'}>Contact</button>
                </div>
                <div className={heroStyles.imageBox}>
                    <img className={heroStyles.laptop} src={onLaptop3} alt={"Hi, I'm Brittany LaPointe a software developper!"}/>
                </div>
             </div>
        </div>
    )
}

export default Hero
