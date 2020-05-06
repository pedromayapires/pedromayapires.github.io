const e = React.createElement;

class CourseElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      null,
      e('label', { className: 'courseType' }, this.props.name),
      e(
        'label',
        null,
        this.props.period[0].substring(0, 4) +
          '-' +
          this.props.period[1].substring(0, 4)
      ),
      e('div', null, this.props.location)
    );
  }
}

export default CourseElement;
