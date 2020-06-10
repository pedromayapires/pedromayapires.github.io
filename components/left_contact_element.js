const e = React.createElement;

const ContactElement = (props) => {
  return e(
    'div',
    null,
    e('label', { className: 'contactType' }, props.type + ':'),
    props.value
  );
};

export default ContactElement;
