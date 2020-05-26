const e = React.createElement;

class ProjectElement extends React.Component {
  constructor(props) {
    super(props);
  }

  getPeriodRoles = (period, roles) => {
    let periodString = period[0] + ' to ' + (period[1] ? period[1] : 'Today');
    let rolesString = roles.join(', ');

    return e(
      'p',
      { className: 'projectPeriodRoles' },
      periodString + ' | ' + rolesString
    );
  };

  render() {
    return e(
      'div',
      { className: 'projectElement' },
      this.getPeriodRoles(this.props.period, this.props.roles),
      e(
        'p',
        { className: 'projectEntityProject' },
        this.props.entity + ' | ' + this.props.project
      ),
      e('div', { className: 'copyValueToClip' }, this.props.description),
      // e('p', null, this.props.accomplished),
      e(
        'p',
        { className: 'projectTechnologies' },
        e('label', { className: 'skillsUsed' }, 'Skills used:'),
        this.props.skills.join(', ')
      )
    );
  }
}

export default ProjectElement;
