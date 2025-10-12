// import { Context } from "../utils/store.js";

const e = React.createElement;

const getPeriod = (period) => {
  // ugly way to append a 0 if it's a single digit month
  // return (
  //   dateObj.getFullYear() + " - " + ("0" + (dateObj.getMonth() + 1)).slice(-2)
  // );

  let fromDateObj = new Date(period[0]);
  let fromDateString = fromDateObj.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  let toDateString = "Today";
  if (period[1]) {
    let toDateObj = new Date(period[1]);
    toDateString = toDateObj.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
  }

  return fromDateString + " to " + toDateString;
};

const ClientElement = (props) => {
  // const { useEffect, useContext } = React;
  // const [state, dispatch] = useContext(Context);

  const getProjectData = (project) => {
    return e(
      "div",
      {},
      e(
        "p",
        { className: "clientProjectHeader" },
        e("label", {}, " - " + project.name + " | "),
        e("label", { className: "projectRoles" }, project.roles.join(", "))
      ),
      e(
        "div",
        { className: "clientProjectGoals" },
        project.goals.map((goal) =>
          e("p", { className: "clientProjectGoal" }, " • " + goal)
        )
      ),
      e(
        "p",
        {},
        e("label", { className: "projectLabel" }, "Team size: "),
        project.team_size
      ),
      e(
        "p",
        { className: "clientTechnologies" },
        e("label", { className: "projectLabel" }, "Tech used: "),
        project.tech.join(", ")
      )
    );
  };

  // ***************************************************
  // chunk of code to get the work period for a client
  const first_project = props.projects[props.projects.length - 1];
  let client_period = [first_project.period[0]];
  if (props.projects[0].period.length > 1) {
    client_period[1] = props.projects[0].period[1];
  }

  // chunk of code to get all the roles for a client
  // let client_roles = new Set();
  // let project_roles = [];
  // for (let i = 0; i < props.projects.length; i++) {
  //   project_roles = props.projects[i].roles;
  //   for (let j = 0; j < project_roles.length; j++) {
  //     client_roles.add(project_roles[j]);
  //   }
  // }
  // ***************************************************

  // console.log(client_roles);
  return e(
    "p",
    { className: "clientElement" },
    e(
      "div",
      { className: "copyValueToClip clientHeader" },
      getPeriod(client_period) + " | ",
      e("label", { className: "projectName" }, props.name)
      // [...client_roles].join(", ")
    ),
    e(
      "p",
      { className: "clientProjectData" },
      ...props.projects.map((project, index) => getProjectData(project))
    )
  );
};

export default ClientElement;
