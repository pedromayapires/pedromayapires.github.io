const getYearsAndMonths = (totalMonths) => {
  const years = Math.floor(Math.abs(totalMonths) / 12);
  const months = Math.abs(totalMonths) % 12;

  return [years, months];
};

const getTotalMonths = (fromDateStr, toDateStr = null) => {
  const start = new Date(fromDateStr);
  const end = new Date(toDateStr);

  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  // return total months;
  return years * 12 + months;
};

const updateTechAndRoles = (jsonData) => {
  let techDuration = {};
  let ignoreTechDuration = {};
  let roleDuration = {};

  let projects = [];
  let period = [];
  let tech = [];
  let roles = [];
  let duration = 0;
  let totalExperience = 0;
  // iterate through clients
  for (let c = 0; c < jsonData.clients.length; c++) {
    projects = jsonData.clients[c].projects;
    // iterate through projects
    for (let p = 0; p < projects.length; p++) {
      period = projects[p].period;
      duration = getTotalMonths(period[0], period[1]);
      totalExperience += duration;

      tech = projects[p].tech;
      // iterate through tech
      for (let s = 0; s < tech.length; s++) {
        // if (tech[s] in jsonData.tech_to_ignore) {
        //   continue;
        // }

        if (tech[s] in jsonData.tech_to_highlight) {
          techDuration[tech[s]] =
            tech[s] in techDuration
              ? duration + techDuration[tech[s]]
              : duration;
        } else {
          ignoreTechDuration[tech[s]] =
            tech[s] in ignoreTechDuration
              ? duration + ignoreTechDuration[tech[s]]
              : duration;
        }
      }

      roles = projects[p].roles;
      // iterate through roles
      for (let r = 0; r < roles.length; r++) {
        roleDuration[roles[r]] =
          roles[r] in roleDuration
            ? duration + roleDuration[roles[r]]
            : duration;
      }
    }
  }

  jsonData["tech_duration"] = techDuration;
  jsonData["ignore_tech_duration"] = ignoreTechDuration;
  jsonData["role_duration"] = roleDuration;
  jsonData["total_experience"] = totalExperience;
  return jsonData;
};

export { getYearsAndMonths, updateTechAndRoles };
export default updateTechAndRoles;
