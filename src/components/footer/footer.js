import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import './footer.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={'footer'}>
            <p className={'footer__text'}>
                © Totally copyrighted<span role="img" aria-label="eye roll emoji"> 🙄 </span> 
                | Created by {data.site.siteMetadata.author} | 2024 
                | <a className={'button'} href='https://github.com/b-lapointe/portfolio' target="_blank" rel="noreferrer"> My Code </a>
            </p>
        </footer>
    )
}

export default Footer