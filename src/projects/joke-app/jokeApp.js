import React from "react"

import Head from '../../components/head'

import Joke from "./jokeTemplate"
import jokesData from "./jokesData"
import * as jokeStyles from './joke.module.scss'

const JokeApp = () => {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div className={jokeStyles.program}>
            <Head title="Joke-App"/>
            <div className={jokeStyles.header}>
                <span className={jokeStyles.laugh} role="img" aria-label="face with tears of joy emoji">😂</span>
                <h1 className={jokeStyles.title}>Joke App</h1>
                <span className={jokeStyles.laugh} role="img" aria-label="face with tears of joy">😂</span>
            </div>
            <div className={jokeStyles.app}>
                {jokeComponents}            
            </div>
        </div>
    )
}

export default JokeApp