import CourseElement from './left_course_element.js';
const e = React.createElement;

const Courses = (props) => {
  let courseArray = [];
  for (let i = 0; i < props.courses.length; i++) {
    courseArray.push(
      e(CourseElement, {
        key: 'courseElement' + i,
        ...props.courses[i]
      })
    );
  }

  return e(
    'div',
    { id: 'courses' },
    e('div', { className: 'leftCategories' }, 'Courses'),
    courseArray
  );
};

export default Courses;
