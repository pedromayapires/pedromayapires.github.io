import RightHeader from './right_header.js';
import Projects from './right_projects.js';

const e = React.createElement;

class RightSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'div',
      null,
      e(RightHeader, this.props.personal_info),
      // for some stupid reason this changes from array to an object
      // e(Projects, this.props.projects)
      e(Projects, this.props)
    );
  }
}

export default RightSection;
