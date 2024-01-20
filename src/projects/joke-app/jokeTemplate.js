import React from "react"

import * as jokeStyles from './joke.module.scss'

function Joke(props) {
    return (
        <div className={jokeStyles.joke}>
            <h1 className={jokeStyles.question} style={{display: !props.question && "none"}}>{props.question}</h1>
            <h3 className={jokeStyles.answer} style={{color: !props.question && "#FFFAFF", fontSize: "42px"}}>{props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke