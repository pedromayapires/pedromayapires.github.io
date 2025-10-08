const getDuration = (fromDateStr, toDateStr = null) => {
  let fromDate = new Date(fromDateStr);
  let toDate = toDateStr ? new Date(toDateStr) : new Date();
  let yearFloatPeriod = (toDate - fromDate) / 31536000000;

  return yearFloatPeriod;
};

const updateSkillsAndRoles = (jsonData) => {
  let skillDuration = {};
  let roleDuration = {};

  let projects = [];
  let period = [];
  let skills = [];
  let roles = [];
  let duration = 0;
  // iterate through clients
  for (let c = 0; c < jsonData.clients.length; c++) {
    projects = jsonData.clients[c].projects;
    // iterate through projects
    for (let p = 0; p < projects.length; p++) {
      period = projects[p].period;
      duration = getDuration(period[0], period[1]);

      skills = projects[p].skills;
      // iterate through skills
      for (let s = 0; s < skills.length; s++) {
        skillDuration[skills[s]] =
          skills[s] in skillDuration
            ? duration + skillDuration[skills[s]]
            : duration;
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

  jsonData["skill_duration"] = skillDuration;
  jsonData["role_duration"] = roleDuration;
  return jsonData;
};

export default updateSkillsAndRoles;
