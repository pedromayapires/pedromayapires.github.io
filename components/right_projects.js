import ProjectElement from './right_project_element.js';

const e = React.createElement;

const Projects = (props) => {
  let projectArray = [];
  for (let i = 0; i < props.projects.length; i++) {
    projectArray.push(
      e(ProjectElement, {
        key: 'projectElement' + i,
        ...props.projects[i]
      })
    );
    if (i == 5 || i == 12) {
      projectArray.push(
        e('div', { key: 'pageBreakAt' + i, className: 'pageBreak' })
      );
    }
  }

  let lastDate = props.projects[0].period[1]
    ? new Date(props.projects[0].period[1])
    : new Date();

  let firstDate = new Date(
    props.projects[props.projects.length - 1].period[0]
  );

  let experienceInYears = (lastDate - firstDate) / 31536000000;
  return e(
    'div',
    null,
    e(
      'div',
      { id: 'projectsHeader' },
      // experienceInYears.toFixed(2) + ' years of work experience'
      'Over ' + Math.floor(experienceInYears) + ' years of work experience'
    ),
    projectArray
  );
};

export default Projects;
