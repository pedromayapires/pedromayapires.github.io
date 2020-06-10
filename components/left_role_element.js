const e = React.createElement;

const RoleElement = (props) => {
  return e(
    'div',
    { className: 'roleElement' },
    e('div', { className: 'rolesUsed' }, props.role + ':'),
    e('div', { className: 'roleYears' }, props.years)
  );
};

export default RoleElement;
