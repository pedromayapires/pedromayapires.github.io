const e = React.createElement;

class RoleElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { className: 'roleElement' },
      e('div', { className: 'rolesUsed' }, this.props.role + ':'),
      e('div', { className: 'roleYears' }, this.props.years)
    );
  }
}

export default RoleElement;
