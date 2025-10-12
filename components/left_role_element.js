import { getYearsAndMonths } from "../utils/aux_methods.js";
const e = React.createElement;

const RoleElement = (props) => {
  const yearsAndMonthsArray = getYearsAndMonths(props.months);
  const years = yearsAndMonthsArray[0] ? yearsAndMonthsArray[0] + " years" : "";
  const months = yearsAndMonthsArray[1]
    ? " " + yearsAndMonthsArray[1] + " months"
    : "";

  return e(
    "div",
    { className: "techRoleP" },
    e("div", { className: "techRoleLabel" }, props.role + ":"),
    e("div", { className: "techRoleDuration" }, e("label", {}, years + months))
  );
};

export default RoleElement;
