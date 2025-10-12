import RoleElement from "./left_role_element.js";
const e = React.createElement;

const Roles = (props) => {
  let roleObj = {};
  roleObj = props.role_duration;

  // sort
  let keysSorted = Object.keys(roleObj).sort(function (a, b) {
    return roleObj[b] - roleObj[a];
  });

  let roleElementArray = [];
  let maxLimit = null;
  let i = 0;
  for (const key in keysSorted) {
    i++;
    roleElementArray.push(
      e(RoleElement, {
        role: keysSorted[key],
        months: roleObj[keysSorted[key]].toFixed(1),
        key: "roleElement" + i,
      })
    );

    if (maxLimit && i == maxLimit) {
      break;
    }
  }

  return e(
    "div",
    null,
    // e('h3', null, 'Top ' + roleElementArray.length + ' Roles (in years)'),
    e("div", { className: "leftCategories" }, "Role experience"),
    e("div", { id: "roles" }, roleElementArray)
  );
};

export default Roles;
