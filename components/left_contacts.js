import ContactElement from './left_contact_element.js';
import ContactURL from './left_contact_url.js';

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
    // e(ContactElement, {
    //   type: 'Skype',
    //   value: props.skype
    // }),
    // e(ContactURL, {
    e(ContactElement, {
      type: 'Linkedin',
      href: 'https://www.linkedin.com/in/'+ props.skype,
      value: 'in/' + props.skype
      // value: props.skype
    }),
    // e(ContactURL, {
    e(ContactElement, {
      type: 'Email',
      href: 'mailto:' + props.email,
      value: props.email
    })
  );
};

export default Contacts;
