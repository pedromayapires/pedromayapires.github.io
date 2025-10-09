import TechElement from "./left_tech_element.js";
const e = React.createElement;

const Tech = (props) => {
  let fromDate = null;
  let toDate = null;
  let currentClient = null;
  let techObj = {};
  let yearFloatPeriod = 0;
  // for (let i = 0; i < props.clients.length; i++) {
  //   currentClient = props.clients[i];
  //   fromDate = new Date(currentClient.period[0]);
  //   toDate = currentClient.period[1]
  //     ? new Date(currentClient.period[1])
  //     : new Date();

  //   yearFloatPeriod = (toDate - fromDate) / 31536000000;

  //   for (const key in currentClient.tech) {
  //     if (currentClient.tech[key] in props.tech_to_ignore) {
  //       continue;
  //     }

  //     const element = currentClient.tech[key];
  //     if (!(element in techObj)) {
  //       techObj[element] = 0;
  //     }
  //     techObj[element] += yearFloatPeriod;
  //   }
  // }

  techObj = props.tech_duration;

  // sort
  let keysSorted = Object.keys(techObj).sort(function (a, b) {
    return techObj[b] - techObj[a];
  });
  // check the number of tech in total
  // console.log(keysSorted.length);

  let techElementArray = [];
  let maxLimit = null;
  // let maxLimit = keysSorted.length;
  let i = 0;
  for (const key in keysSorted) {
    i++;
    techElementArray.push(
      e(TechElement, {
        tech: keysSorted[key],
        years: techObj[keysSorted[key]].toFixed(1),
        key: "techElement" + i,
      })
    );
    if (maxLimit && i == maxLimit) {
      break;
    }
  }

  return e(
    "div",
    null,
    // e('h3', null, 'Top ' + techElementArray.length + ' Tech (in years)'),
    e("div", { className: "leftCategories" }, "Tech experience (years)"),
    e("div", { id: "tech" }, techElementArray)
  );
};

export default Tech;
