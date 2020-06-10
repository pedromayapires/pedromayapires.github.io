const e = React.createElement;

const RightHeader = (props) => {
  return e(
    'div',
    { id: 'rightHeader' },
    e('div', { id: 'name', className: 'copyValueToClip' }, props.name),
    e('div', { id: 'intro', className: 'copyValueToClip' }, props.intro)
  );
};

export default RightHeader;
