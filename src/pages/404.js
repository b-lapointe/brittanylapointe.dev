import React from 'react'

import Head from '../components/head.js'
import nothing from '../assets/nothing.gif'
import './404.scss'

const NotFound = () => {
  return (
    <div className={'wrongPage'}>
        <Head title="404"/>
        <div className={'wrongPage__erorr'}>
            <div className={'wrongPage__gifGroup'}>
                <h1 className={'wrongPage__four'}>4 0 4</h1>
                <img className={'wrongPage__gif'} src={nothing} alt="You didn't see anything. GIF"></img>
            </div>
            <p className={'wrongPage__text'}>Uh oh! Unfortunately this page does not exist. Let's take you back to one that does!</p>
            <div className={'buttons'}>
                <a href="/" className={'option1'}>Take me back</a> 
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className={'option2'}>Take me to a better developper</a>
            </div>
        </div>
    </div>
)
}

export default NotFound