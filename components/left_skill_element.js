const e = React.createElement;

class SkillElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { className: 'skillElement' },
      e('div', { className: 'skillsLearned' }, this.props.skill + ':'),
      e('div', { className: 'skillYears' }, this.props.years)
    );
  }
}

export default SkillElement;
