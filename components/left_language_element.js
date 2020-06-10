const e = React.createElement;

const LanguageElement = (props) => {
  return e(
    'div',
    null,
    e('label', { className: 'language' }, props.language + ':'),
    e('label', null, props.level)
  );
};

export default LanguageElement;
