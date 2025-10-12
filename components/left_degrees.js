import DegreeElement from "./left_degree_element.js";
const e = React.createElement;

const Degrees = (props) => {
  let degreeArray = [];
  for (let i = 0; i < props.degrees.length; i++) {
    degreeArray.push(
      e(DegreeElement, {
        key: "degreeElement" + i,
        ...props.degrees[i],
      })
    );
  }

  return e(
    "div",
    { id: "degrees" },
    e("div", { className: "leftCategories" }, "Education"),
    degreeArray
  );
};

export default Degrees;
