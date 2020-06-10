const e = React.createElement;

const SkillElement = (props) => {
  return e(
    'div',
    { className: 'skillElement' },
    e('div', { className: 'skillsLearned' }, props.skill + ':'),
    e('div', { className: 'skillYears' }, props.years)
  );
};

export default SkillElement;
