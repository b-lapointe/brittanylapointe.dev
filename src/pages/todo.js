import React from "react"

import Head from '../components/head.js'
import ToDoApp from '../projects/to-do-app/todoApp'

const ToDoPage = () => {
  return (
      <div>
            <Head title="To-Do-App"/>
            <ToDoApp/>
      </div>
  )
}

export default ToDoPage