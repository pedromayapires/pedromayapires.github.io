import DATA from "../cv_db.js";

const e = (obj, ...args) => {
  let result = obj;
  args.forEach((a) => (result = result[a]));
  return result;
};

const expandTechArray = (techArray) => {
  const techObjects = [];
  techArray.forEach((tech) => {
    techObjects.push(e("div", {}, e("span", {}, [e("i", {}, { class: "fas fa-check" })], e("a", { href: "#", innerHTML: tech }, e("span", {}, " "))));
  });
  return techObjects;
};

const updateTechAndRoles = () => {
  const projects = DATA.projects.map((project) => {
    const newProject = {
      ...project,
      tech: expandTechArray(project.tech),
    };
    return newProject;
  });

  return JSON.stringify({ projects: projects }, null, 2);
};

export default updateTechAndRoles;
