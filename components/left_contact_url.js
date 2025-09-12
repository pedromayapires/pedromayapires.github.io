const e = React.createElement;

const ContactURL = (props) => {
  return e(
    'div',
    null,
    e('label', { className: 'contactType' }, props.type + ':'),
    e('a', { href: props.href, className: 'contactType' },
    props.value)
  );
};

export default ContactURL;
