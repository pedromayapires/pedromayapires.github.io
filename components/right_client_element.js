// import { Context } from "../utils/store.js";

const e = React.createElement;

let auxGetDateMonthYearFormat = (dateObj) => {
  // // code to test:
  // const options = { year: "numeric", month: "long", day: "numeric" };
  // const date = new Date(2020, 11, 31) // 2020-12-31T03:00:00.000Z
  // console.log(date.toLocaleDateString("pt-br", options))
  // // 31 de dezembro de 2020
  // console.log(date.toLocaleDateString("pt-br", { ...options, month: 'numeric'}))
  // // 31/12/2020

  // TODO
  // convert date to something like "From January 2025 to February 2026"

  // ugly way to get the right month number and appending a 0 if it's a
  // single digit
  return (
    dateObj.getFullYear() + " - " + ("0" + (dateObj.getMonth() + 1)).slice(-2)
  );
};

const ClientElement = (props) => {
  // const { useEffect, useContext } = React;
  // const [state, dispatch] = useContext(Context);

  let europeanDateFormat = null;
  let monthYearFormat = null;

  // console.log(props);

  const getPeriodRoles = (period, roles) => {
    let fromDateString = auxGetDateMonthYearFormat(new Date(period[0]));
    let toDateString = "Today";
    if (period[1]) {
      toDateString = auxGetDateMonthYearFormat(new Date(period[1]));
    }

    let periodString = fromDateString + " to " + toDateString;
    let rolesString = roles.join(", ");
    console.log(periodString);

    return e(
      "p",
      { className: "clientPeriodRoles" },
      e("div", { className: "copyValueToClip" }, periodString),
      " | ",
      e("div", { className: "copyValueToClip" }, rolesString)
    );
  };

  const getProjectData = (project) => {
    // console.log(project);
    // console.log(state);
    return e(
      e(
        "p",
        { className: "clientElementData" },
        getPeriodRoles(project.period, project.roles),
        " | ",
        e("div", { className: "copyValueToClip" }, project.name)
      ),
      e("div", { className: "copyValueToClip" }, project.description),
      e(
        "p",
        { className: "clientTechnologies" },
        e("label", { className: "skillsUsed" }, "Skills used:"),
        e("div", { className: "copyValueToClip" }, project.skills.join(", "))
      )
    );
  };

  // console.log(props.projects);
  return e(
    "div",
    { className: "clientElement" },
    getPeriodRoles(["2010-05-01", "2010-11-01"], []),
    e(
      "p",
      { className: "clientElementData" },
      e("div", { className: "copyValueToClip" }, props.name)
    ),
    ...props.projects.map((project, index) => getProjectData(project))
  );
};

export default ClientElement;
