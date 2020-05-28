const e = React.createElement;

class RightHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'rightHeader' },
      e('div', { id: 'name', className: 'copyValueToClip' }, this.props.name),
      e(
        'div',
        { id: 'intro', className: 'copyValueToClip' },
        this.props.intro
      )
    );
  }
}

export default RightHeader;
