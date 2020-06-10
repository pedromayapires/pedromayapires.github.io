import RoleElement from './left_role_element.js';
const e = React.createElement;

const Roles = (props) => {
  let fromDate = null;
  let toDate = null;
  let currentProject = null;
  let roleObj = {};
  let yearFloatPeriod = 0;
  for (let i = 0; i < props.projects.length; i++) {
    currentProject = props.projects[i];
    fromDate = new Date(currentProject.period[0]);
    toDate = currentProject.period[1]
      ? new Date(currentProject.period[1])
      : new Date();

    yearFloatPeriod = (toDate - fromDate) / 31536000000;

    for (const key in currentProject.roles) {
      const element = currentProject.roles[key];
      if (!(element in roleObj)) {
        roleObj[element] = 0;
      }
      roleObj[element] += yearFloatPeriod;
    }
  }

  // sort
  let keysSorted = Object.keys(roleObj).sort(function(a, b) {
    return roleObj[b] - roleObj[a];
  });
  // check the number of roles in total
  // console.log(keysSorted.length);

  let roleElementArray = [];
  let maxLimit = null;
  // let maxLimit = keysSorted.length;
  let i = 0;
  for (const key in keysSorted) {
    i++;
    roleElementArray.push(
      e(RoleElement, {
        role: keysSorted[key],
        years: roleObj[keysSorted[key]].toFixed(1)
      })
    );
    if (maxLimit && i == maxLimit) {
      break;
    }
  }

  return e(
    'div',
    null,
    // e('h3', null, 'Top ' + roleElementArray.length + ' Roles (in years)'),
    e('div', { className: 'leftCategories' }, 'Roles learned (in years)'),
    e('div', { id: 'roles' }, roleElementArray)
  );
};

export default Roles;
