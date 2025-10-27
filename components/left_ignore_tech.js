import TechElement from "./left_tech_element.js";
const e = React.createElement;

const IgnoreTech = (props) => {
  let techObj = {};
  techObj = props.ignore_tech_duration;

  // sort
  let keysSorted = Object.keys(techObj).sort(function (a, b) {
    return techObj[b] - techObj[a];
  });

  let techElementArray = [];
  let i = 0;
  for (const key in keysSorted) {
    i++;
    techElementArray.push(
      e(TechElement, {
        tech: keysSorted[key],
        months: techObj[keysSorted[key]].toFixed(1),
        key: "techElement" + i,
      })
    );
  }

  return e(
    "div",
    null,
    e("div", { className: "leftCategories" }, "Other tech"),
    e("div", { className: "tech" }, techElementArray)
  );
};

export default IgnoreTech;
