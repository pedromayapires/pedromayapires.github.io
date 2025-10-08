import SkillElement from "./left_skill_element.js";
const e = React.createElement;

const Skills = (props) => {
  let fromDate = null;
  let toDate = null;
  let currentClient = null;
  let skillObj = {};
  let yearFloatPeriod = 0;
  // for (let i = 0; i < props.clients.length; i++) {
  //   currentClient = props.clients[i];
  //   fromDate = new Date(currentClient.period[0]);
  //   toDate = currentClient.period[1]
  //     ? new Date(currentClient.period[1])
  //     : new Date();

  //   yearFloatPeriod = (toDate - fromDate) / 31536000000;

  //   for (const key in currentClient.skills) {
  //     if (currentClient.skills[key] in props.skills_to_ignore) {
  //       continue;
  //     }

  //     const element = currentClient.skills[key];
  //     if (!(element in skillObj)) {
  //       skillObj[element] = 0;
  //     }
  //     skillObj[element] += yearFloatPeriod;
  //   }
  // }

  skillObj = props.skill_duration;

  // sort
  let keysSorted = Object.keys(skillObj).sort(function (a, b) {
    return skillObj[b] - skillObj[a];
  });
  // check the number of skills in total
  // console.log(keysSorted.length);

  let skillElementArray = [];
  let maxLimit = null;
  // let maxLimit = keysSorted.length;
  let i = 0;
  for (const key in keysSorted) {
    i++;
    skillElementArray.push(
      e(SkillElement, {
        skill: keysSorted[key],
        years: skillObj[keysSorted[key]].toFixed(1),
        key: "skillElement" + i,
      })
    );
    if (maxLimit && i == maxLimit) {
      break;
    }
  }

  return e(
    "div",
    null,
    // e('h3', null, 'Top ' + skillElementArray.length + ' Skills (in years)'),
    e("div", { className: "leftCategories" }, "Skills measured in years"),
    e("div", { id: "skills" }, skillElementArray)
  );
};

export default Skills;
