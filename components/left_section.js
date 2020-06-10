import Contacts from './left_contacts.js';
import Roles from './left_roles.js';
import Skills from './left_skills.js';
import Languages from './left_languages.js';
import Courses from './left_courses.js';
const e = React.createElement;

const LeftSection = (props) => {
  return e(
    'div',
    null,
    e(
      'div',
      { id: 'photoContainer' },
      e('img', { id: 'photo', src: './imgs/photo.png' })
    ),
    e(Contacts, props.personal_info),
    e(Roles, props),
    e(Skills, props),
    e(Languages, props),
    e(Courses, props)
  );
};

export default LeftSection;
