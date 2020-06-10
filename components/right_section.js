import RightHeader from './right_header.js';
import Projects from './right_projects.js';

const e = React.createElement;

const RightSection = (props) => {
  return e(
    'div',
    null,
    e(RightHeader, props.personal_info),
    e(Projects, { projects: props.projects })
  );
};

export default RightSection;
