import ContactElement from "./left_contact_element.js";
import ContactURL from "./left_contact_url.js";

const e = React.createElement;

const Contacts = (props) => {
  return e(
    "div",
    { id: "contacts" },
    e("div", { className: "leftCategories" }, "Contacts"),
    e(ContactElement, {
      type: "Location",
      value: props.location,
    }),
    // e(ContactElement, {
    //   type: 'Skype',
    //   value: props.skype
    // }),
    // e(ContactURL, {
    e(ContactElement, {
      type: "Linkedin",
      href: "https://www.linkedin.com/in/" + props.id,
      value: "in/" + props.id,
      // value: props.skype
    }),
    e(ContactElement, {
      type: "GitPage",
      href: "https://" + props.id + props.github,
      value: props.id + props.github,
    }),
    e(ContactElement, {
      type: "Email",
      href: "mailto:" + props.id + props.email,
      value: props.id + props.email,
    })
  );
};

export default Contacts;
