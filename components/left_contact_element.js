const e = React.createElement;

class ContactElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      null,
      e('label', { className: 'contactType' }, this.props.type + ':'),
      this.props.value
    );
  }
}

export default ContactElement;
