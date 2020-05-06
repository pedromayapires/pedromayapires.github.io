import CourseElement from './left_course_element.js';
const e = React.createElement;

class Courses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let courseArray = [];
    for (let i = 0; i < this.props.courses.length; i++) {
      courseArray.push(e(CourseElement, this.props.courses[i]));
    }

    return e(
      'div',
      { id: 'courses' },
      e('div', { className: 'leftCategories' }, 'Courses'),
      courseArray
    );
  }
}

export default Courses;
