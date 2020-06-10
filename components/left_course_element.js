const e = React.createElement;

const CourseElement = (props) => {
  return e(
    'div',
    null,
    e('label', { className: 'courseType' }, props.name),
    e(
      'label',
      null,
      props.period[0].substring(0, 4) + '-' + props.period[1].substring(0, 4)
    ),
    e('div', null, props.location)
  );
};

export default CourseElement;
