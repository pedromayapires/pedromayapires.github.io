const e = React.createElement;

const TechElement = (props) => {
  return e(
    "div",
    { className: "techElement" },
    e("div", { className: "techLearned" }, props.tech + ":"),
    e("div", { className: "techYears" }, props.years)
  );
};

export default TechElement;
