import Contacts from './left_contacts.js';
import Roles from './left_roles.js';
import Skills from './left_skills.js';
import Languages from './left_languages.js';
import Courses from './left_courses.js';
const e = React.createElement;

class LeftSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      null,
      e(
        'div',
        { id: 'photoContainer' },
        e('img', { id: 'photo', src: './imgs/photo.png' })
      ),
      e(Contacts, this.props.personal_info),
      e(Roles, this.props),
      e(Skills, this.props),
      e(Languages, this.props),
      e(Courses, this.props)
    );
  }
}

export default LeftSection;
