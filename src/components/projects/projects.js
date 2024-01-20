import React from 'react'
import './projects.scss'
import projectData from './projectData'

const Projects = () => {
  return (
    <div id="projects" className={'section'}>
      <div className={'titleBox'}>
        <h1 className={'title'}>Projects</h1>
      </div>
      <div className={'projects'}>
        {projectData.map((project, index) => (
          <div key={index} className={'projects__box'}>
            <img className={'projects__img'} src={project.imgSrc} alt={`${project.appName} Page`} />
            <div className={'projects__overlay'}>
              <h2 className={'projects__appName'}>{project.appName}</h2>
              <div className={'projects__btns'}>
                <a className={'button'} href={project.tryLink} target="_blank" rel="noreferrer">
                  Try It
                </a>
                <a className={'button'} href={project.codeLink} target="_blank" rel="noreferrer">
                  Code It
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects