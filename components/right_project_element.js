const e = React.createElement;

let auxGetDateMonthYearFormat = (dateObj) => {
  // // code to test:
  // const options = { year: "numeric", month: "long", day: "numeric" };
  // const date = new Date(2020, 11, 31) // 2020-12-31T03:00:00.000Z
  // console.log(date.toLocaleDateString("pt-br", options))
  // // 31 de dezembro de 2020
  // console.log(date.toLocaleDateString("pt-br", { ...options, month: 'numeric'}))
  // // 31/12/2020

  // ugly way to get the right month number and appending a 0 if it's a
  // single digit
  return (
    dateObj.getFullYear() + ' - ' + ('0' + (dateObj.getMonth() + 1)).slice(-2)
  );
};

const ProjectElement = (props) => {
  let europeanDateFormat = null;
  let monthYearFormat = null;

  const getPeriodRoles = (period, roles) => {
    let toDateString = 'Today';
    if (period[1]) {
      toDateString = auxGetDateMonthYearFormat(new Date(period[1]));
    }

    let fromDateString = auxGetDateMonthYearFormat(new Date(period[0]));
    let periodString = fromDateString + ' to ' + toDateString;
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
