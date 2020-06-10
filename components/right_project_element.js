const e = React.createElement;

const ProjectElement = (props) => {
  let europeanDateFormat = null;
  let monthYearFormat = null;

  const getPeriodRoles = (period, roles) => {
    let periodString = period[0] + ' to ' + (period[1] ? period[1] : 'Today');
    let rolesString = roles.join(', ');

    return e(
      'p',
      { className: 'projectPeriodRoles' },
      e('div', { className: 'copyValueToClip' }, periodString),
      ' | ',
      e('div', { className: 'copyValueToClip' }, rolesString)
    );
  };

  let bla = document.getElementsByName('dateFormats');
  bla.onChange = (e) => {
    console.log(periodString);
  };

  return e(
    'div',
    { className: 'projectElement' },
    getPeriodRoles(props.period, props.roles),
    e(
      'p',
      { className: 'projectEntityProject' },
      e('div', { className: 'copyValueToClip' }, props.entity),
      ' | ',
      e('div', { className: 'copyValueToClip' }, props.project)
    ),
    e('div', { className: 'copyValueToClip' }, props.description),
    // e('p', null, props.accomplished),
    e(
      'p',
      { className: 'projectTechnologies' },
      e('label', { className: 'skillsUsed' }, 'Skills used:'),
      e('div', { className: 'copyValueToClip' }, props.skills.join(', '))
    )
  );
};

export default ProjectElement;
