import LeftSection from './left_section.js';
import RightSection from './right_section.js';

const e = React.createElement;

class MainCV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'mainContainer', onClick: () => this.setState({ liked: true }) },
      e(
        'div',
        { id: 'leftContainer' },
        e(LeftSection, { ...this.props.jsonData })
      ),
      e(
        'div',
        { id: 'rightContainer' },
        e(RightSection, { ...this.props.jsonData })
      )
    );
  }
}

export default MainCV;
