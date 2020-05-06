import ProjectElement from './right_project_element.js';
const e = React.createElement;

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projectArray = [];
    for (let i = 0; i < this.props.projects.length; i++) {
      projectArray.push(e(ProjectElement, this.props.projects[i]));
      if (i == 5 || i == 12) {
        projectArray.push(e('div', { className: 'pageBreak' }));
      }
    }

    let lastDate = this.props.projects[0].period[1]
      ? new Date(this.props.projects[0].period[1])
      : new Date();

    let firstDate = new Date(
      this.props.projects[this.props.projects.length - 1].period[0]
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
  }
}

export default Projects;
