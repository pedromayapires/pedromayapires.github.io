import RoleElement from "./left_role_element.js";
const e = React.createElement;

const Roles = (props) => {
  let fromDate = null;
  let toDate = null;
  let currentClient = null;
  let roleObj = {};
  let yearFloatPeriod = 0;

  // for (let i = 0; i < props.clients.length; i++) {
  //   currentClient = props.clients[i];
  //   fromDate = new Date(currentClient.period[0]);
  //   toDate = currentClient.period[1]
  //     ? new Date(currentClient.period[1])
  //     : new Date();

  //   yearFloatPeriod = (toDate - fromDate) / 31536000000;

  //   for (const key in currentClient.roles) {
  //     const element = currentClient.roles[key];
  //     if (!(element in roleObj)) {
  //       roleObj[element] = 0;
  //     }
  //     roleObj[element] += yearFloatPeriod;
  //   }
  // }

  roleObj = props.role_duration;

  // sort
  let keysSorted = Object.keys(roleObj).sort(function (a, b) {
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
        years: roleObj[keysSorted[key]].toFixed(1),
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
    e("div", { className: "leftCategories" }, "Role experience (years)"),
    e("div", { id: "roles" }, roleElementArray)
  );
};

export default Roles;
