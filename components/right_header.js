const e = React.createElement;

class RightHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'rightHeader' },
      e('div', { id: 'name' }, this.props.name),
      e('div', { id: 'intro' }, this.props.intro)
    );
  }
}

export default RightHeader;
