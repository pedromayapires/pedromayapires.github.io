import ContactElement from './left_contact_element.js';

const e = React.createElement;

const Contacts = (props) => {
  return e(
    'div',
    { id: 'contacts' },
    e('div', { className: 'leftCategories' }, 'Contacts'),
    e(ContactElement, {
      type: 'Location',
      value: props.location
    }),
    // e(ContactElement, {
    //   type: 'Mobile',
    //   value: props.phone_number
    // }),
    e(ContactElement, {
      type: 'Skype',
      value: props.skype
    }),
    e(ContactElement, {
      type: 'Linkedin',
      value: 'in/' + props.skype
    }),
    e(ContactElement, {
      type: 'Email',
      value: props.email
    })
  );
};

export default Contacts;
