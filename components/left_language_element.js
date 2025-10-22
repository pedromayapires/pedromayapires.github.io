const e = React.createElement;

const LanguageElement = (props) => {
  return e(
    "div",
    null,
    e("label", { className: "languageLabel" }, props.language + ":"),
    e("label", { className: "languageValue" }, props.level)
  );
};

export default LanguageElement;
