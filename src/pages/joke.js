import React from "react"

import Head from '../components/head.js'
import JokeApp from '../projects/joke-app/jokeApp'

const JokePage = () => {
  return (
      <div>
            <Head title="Joke-App"/>
            <JokeApp/>
      </div>
  )
}

export default JokePage