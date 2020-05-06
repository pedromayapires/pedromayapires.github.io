const e = React.createElement;

class LanguageElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      null,
      e('label', { className: 'language' }, this.props.language + ':'),
      e('label', null, this.props.level)
    );
  }
}

export default LanguageElement;
