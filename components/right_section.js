import RightHeader from "./right_header.js";
import Clients from "./right_clients.js";

const e = React.createElement;

const RightSection = (props) => {
  return e(
    "div",
    null,
    e(RightHeader, props.personal_info),
    // e(Clients, { clients: props.clients })
    e(Clients, props)
  );
};

export default RightSection;
