import React from 'react';
import './projects.scss';
import projectData from './projectData';

const Projects = () => {
  const firstProject = projectData[0];
  const otherProjects = projectData.slice(1, 7);

  return (
    <div id="projects" className={'section'}>
      <div className={'titleBox'}>
        <h1 className={'title'}>Projects</h1>
      </div>
      <div className={'projects'}>
        <div className={'projects__first'}>
          <div className={'projects__demoGif'}>
            <img src={firstProject.gifSrc} alt={`${firstProject.appName} Demo`} />
          </div>
          <div className={'projects__box'}>
            <img className={'projects__img'} src={firstProject.imgSrc} alt={`${firstProject.appName} Page`} />
            <div className={'projects__overlay'}>
              <h2 className={'projects__appName'}>{firstProject.appName}</h2>
              <div className={'projects__btns'}>
                {firstProject.tryLink && (
                  <a className={'button'} href={firstProject.tryLink} target="_blank" rel="noreferrer">
                    Try It
                  </a>
                )}
                {firstProject.codeLink && (
                  <a className={'button'} href={firstProject.codeLink} target="_blank" rel="noreferrer">
                    Code It
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={'projects__other'}>
          {otherProjects.map((project, index) => (
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
    </div>
  );
};

export default Projects;