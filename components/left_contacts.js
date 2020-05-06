import ContactElement from './left_contact_element.js';

const e = React.createElement;

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'div',
      { id: 'contacts' },
      e('div', { className: 'leftCategories' }, 'Contacts'),
      e(ContactElement, {
        type: 'Location',
        value: this.props.location
      }),
      // e(ContactElement, {
      //   type: 'Mobile',
      //   value: this.props.phone_number
      // }),
      e(ContactElement, {
        type: 'Skype',
        value: this.props.skype
      }),
      e(ContactElement, {
        type: 'Linkedin',
        value: 'in/' + this.props.skype
      }),
      e(ContactElement, {
        type: 'Email',
        value: this.props.email
      })
    );
  }
}

export default Contacts;
