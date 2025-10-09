const e = React.createElement;

const RightHeader = (props) => {
  return e(
    "div",
    { id: "rightHeader" },
    e("div", { id: "name", className: "copyValueToClip" }, props.name)
  );
};

export default RightHeader;
