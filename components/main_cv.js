import LeftSection from './left_section.js';
import RightSection from './right_section.js';

const e = React.createElement;

const MainCV = (props) => {
  return e(
    'div',
    { id: 'mainContainer' },
    e('div', { id: 'leftContainer' }, e(LeftSection, { ...props.jsonData })),
    e('div', { id: 'rightContainer' }, e(RightSection, { ...props.jsonData }))
  );
};

export default MainCV;
