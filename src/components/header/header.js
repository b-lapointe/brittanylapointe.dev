import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'

import './header.scss'
import Navbar from '../menu/menu.js'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header id="home" className='header'>
            <h1 className='header__logo'>
                <Link to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className='header__nav-list'>
                    <li><button onClick={() => scrollTo('#about')} className='header__nav-item'>About</button></li> 
                    <li><button onClick={() => scrollTo('#projects')} className='header__nav-item'>Projects</button></li>
                    <li><button onClick={() => scrollTo('#contact')} className='header__nav-item'>Contact</button></li> 
                </ul>
            </nav>
            <Navbar/> 
        </header>
    )
}

export default Header